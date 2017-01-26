ROMANS = {
	1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
	10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC',
	100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM',
	1000: 'M', 2000: 'MM', 3000: 'MMM'
};
/** 1. Get the length of the number
 * 2. if number is ones, return the roman numeral
 * 3. if number is tens(length of 2) evaluate if divisble by 10
 * 3a if divisible by 10, return the roman numeral
 * 3b divide up the number to ones and tens
 * 3c get the roman numeral for the 'split up' number
 * 4. if number is 100s (length of 3)
 * 4a check for divisibility by both 100 and 10, return the roman numeral if true
 */
function toRoman(arabic) {
	var len = arabic.toString().length;
	switch (len) {
        // eval for ones
		case 1:
			return ROMANS[arabic];
        // eval for tens
		case 2:
            // check for divisibility
			if (arabic % 10 === 0) {
				return ROMANS[arabic];
			} else {
				let ones = arabic % 10;
				let tens = ((arabic / 10) - (ones / 10)) * 10;
				return ROMANS[tens] + ROMANS[ones];
			}
        // evaluate for 100s
		case 3:
            // check for divisibility by 100 and 10
			if (arabic % 10 === 0 && arabic % 100 === 0) {
				return ROMANS[arabic];
			} else {
				let ones = arabic % 10;
				let tens = (arabic % 100) - ones;
				let hund = Math.floor((arabic / 100) - (tens / 100)) * 100;
				return (tens == 0) ? ROMANS[hund] + ROMANS[ones] :
                ROMANS[hund] + ROMANS[tens] + ROMANS[ones];
			}
        // evaluate for 1000s
		case 4:
            // check for divisibility
			if (arabic % 1000 === 0) {
				return ROMANS[arabic];
			} else {
				let ones = arabic % 10;
				let tens = (arabic % 100) - ones;
				let hund = (arabic % 1000) - (tens + ones);
				let thou = Math.floor(arabic / 1000) * 1000;
				if (ones == 0) {
					return ROMANS[thou] + ROMANS[hund] + ROMANS[tens];
				}				else if (tens == 0) {
					return ROMANS[thou] + ROMANS[hund] + ROMANS[ones];
				}				else if (hund == 0) {
					return ROMANS[thou] + ROMANS[tens] + ROMANS[ones];
				}
				return ROMANS[thou] + ROMANS[hund] + ROMANS[tens] + ROMANS[ones];
			}
	}
}

module.exports = toRoman;
