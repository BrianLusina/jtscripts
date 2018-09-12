var at = require('../../jssnips/time_dates/clock/clock_2').at;

test('Clock', function () {
	test('Creating a new clock with an initial time', function () {
		test('on the hour', function () {
			expect(at(8).toString()).toEqual('08:00');
		});

		test('past the hour', function () {
			expect(at(11, 9).toString()).toEqual('11:09');
		});

		test('midnight is zero hours', function () {
			expect(at(24, 0).toString()).toEqual('00:00');
		});

		test('hour rolls over', function () {
			expect(at(25, 0).toString()).toEqual('01:00');
		});

		test('hour rolls over continuously', function () {
			expect(at(100, 0).toString()).toEqual('04:00');
		});

		test('sixty minutes is next hour', function () {
			expect(at(1, 60).toString()).toEqual('02:00');
		});

		test('minutes roll over', function () {
			expect(at(0, 160).toString()).toEqual('02:40');
		});

		test('minutes roll over continuously', function () {
			expect(at(0, 1723).toString()).toEqual('04:43');
		});

		test('hour and minutes roll over', function () {
			expect(at(25, 160).toString()).toEqual('03:40');
		});

		test('hour and minutes roll over continuously', function () {
			expect(at(201, 3001).toString()).toEqual('11:01');
		});

		test('hour and minutes roll over to exactly midnight', function () {
			expect(at(72, 8640).toString()).toEqual('00:00');
		});

		test('negative hour', function () {
			expect(at(-1, 15).toString()).toEqual('23:15');
		});

		test('negative hour rolls over', function () {
			expect(at(-25, 0).toString()).toEqual('23:00');
		});

		test('negative hour rolls over continuously', function () {
			expect(at(-91, 0).toString()).toEqual('05:00');
		});

		test('negative minutes', function () {
			expect(at(1, -40).toString()).toEqual('00:20');
		});

		test('negative minutes rolls over', function () {
			expect(at(1, -160).toString()).toEqual('22:20');
		});

		test('negative minutes rolls over continuously', function () {
			expect(at(1, -4820).toString()).toEqual('16:40');
		});

		test('negative hour and minutes both roll over', function () {
			expect(at(-25, -160).toString()).toEqual('20:20');
		});

		test('negative hour and minutes both roll over continuously', function () {
			expect(at(-121, -5810).toString()).toEqual('22:10');
		});

		test('Adding and subtracting minutes', function () {
			test('add minutes', function () {
				expect(at(10, 0).plus(3).toString()).toEqual('10:03');
			});

			test('add no minutes', function () {
				expect(at(6, 41).plus(0).toString()).toEqual('06:41');
			});

			test('add to next hour', function () {
				expect(at(0, 45).plus(40).toString()).toEqual('01:25');
			});

			test('add more than one hour', function () {
				expect(at(10, 0).plus(61).toString()).toEqual('11:01');
			});

			test('add more than two hours with carry', function () {
				expect(at(0, 45).plus(160).toString()).toEqual('03:25');
			});

			test('add across midnight', function () {
				expect(at(23, 59).plus(2).toString()).toEqual('00:01');
			});

			test('add more than one day (1500 min = 25 hrs)', function () {
				expect(at(5, 32).plus(1500).toString()).toEqual('06:32');
			});

			test('add more than two days', function () {
				expect(at(1, 1).plus(3500).toString()).toEqual('11:21');
			});

			test('subtract minutes', function () {
				expect(at(10, 3).minus(3).toString()).toEqual('10:00');
			});

			test('subtract to previous hour', function () {
				expect(at(10, 3).minus(30).toString()).toEqual('09:33');
			});

			test('subtract more than an hour', function () {
				expect(at(10, 3).minus(70).toString()).toEqual('08:53');
			});

			test('subtract across midnight', function () {
				expect(at(0, 3).minus(4).toString()).toEqual('23:59');
			});

			test('subtract more than two hours', function () {
				expect(at(0, 0).minus(160).toString()).toEqual('21:20');
			});

			test('subtract more than two hours with borrow', function () {
				expect(at(6, 15).minus(160).toString()).toEqual('03:35');
			});

			test('subtract more than one day (1500 min = 25 hrs)', function () {
				expect(at(5, 32).minus(1500).toString()).toEqual('04:32');
			});

			test('subtract more than two days', function () {
				expect(at(2, 20).minus(3000).toString()).toEqual('00:20');
			});
		});

		test('Construct two separate clocks, set times, test if they are equal', function () {
			test('clocks with same time', function () {
				expect(at(15, 37).equals(at(15, 37))).toBeTruthy();
			});

			test('clocks a minute apart', function () {
				expect(at(15, 36).equals(at(15, 37))).toBeFalsy();
			});

			test('clocks an hour apart', function () {
				expect(at(14, 37).equals(at(15, 37))).toBeFalsy();
			});

			test('clocks with hour overflow', function () {
				expect(at(10, 37).equals(at(34, 37))).toBeTruthy();
			});

			test('clocks with hour overflow by several days', function () {
				expect(at(3, 11).equals(at(99, 11))).toBeTruthy();
			});

			test('clocks with negative hour', function () {
				expect(at(22, 40).equals(at(-2, 40))).toBeTruthy();
			});

			test('clocks with negative hour that wraps', function () {
				expect(at(17, 3).equals(at(-31, 3))).toBeTruthy();
			});

			test('clocks with negative hour that wraps multiple times', function () {
				expect(at(13, 49).equals(at(-83, 49))).toBeTruthy();
			});

			test('clocks with minute overflow', function () {
				expect(at(0, 1).equals(at(0, 1441))).toBeTruthy();
			});

			test('clocks with minute overflow by several days', function () {
				expect(at(2, 2).equals(at(2, 4322))).toBeTruthy();
			});

			test('clocks with negative minute', function () {
				expect(at(2, 40).equals(at(3, -20))).toBeTruthy();
			});

			test('clocks with negative minute that wraps', function () {
				expect(at(4, 10).equals(at(5, -1490))).toBeTruthy();
			});

			test('clocks with negative minute that wraps multiple times', function () {
				expect(at(6, 15).equals(at(6, -4305))).toBeTruthy();
			});

			test('clocks with negative hours and minutes', function () {
				expect(at(7, 32).equals(at(-12, -268))).toBeTruthy();
			});

			test('clocks with negative hours and minutes that wrap', function () {
				expect(at(18, 7).equals(at(-54, -11513))).toBeTruthy();
			});
		});
	});
});
