
import step from './stepsinprimes';
import {assert} from "chai";

function testing(actual: number[] | null, expected: number[] | null) {
    assert.deepEqual(actual, expected);
}

describe("Fixed Tests", function() {
    it("Basic tests step", function() {        
        
        testing(step(2,100,110), [101, 103]);
        testing(step(4,100,110), [103, 107]);
        testing(step(6,100,110), [101, 107]);
        testing(step(8,300,400), [359, 367]);
        testing(step(10,300,400), [307, 317]);

        testing(step(4,30000,100000), [30109, 30113]);
        testing(step(6,30000,100000), [30091, 30097]);
        testing(step(8,30000,100000), [30089, 30097]);
        testing(step(11,30000,100000), null);
        testing(step(2,10000000,11000000), [10000139, 10000141]);

        testing(step(52,1300,15000), [1321, 1373]);
        testing(step(10,4900,5000), [4909, 4919]);
        testing(step(30,4900,5000), [4903, 4933]);
        testing(step(2,4900,5000), [4931, 4933]);
        testing(step(2,104000,105000), [104087, 104089]);

        testing(step(2,4900,4919), null);
        testing(step(7,4900,4919), null);
        testing(step(4, 30115,100000), [30133, 30137]);
        testing(step(4, 30140,100000), [30319, 30323]);
        testing(step(4, 30000,30325), [30109, 30113]);

    });
});

//...............
function randint(a: number, b: number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//................
function primeKVP(n: number) {
  if (n == 2) {
    return true;
  } else if ((n < 2) || (n % 2 == 0)) {
    return false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0)
        return false;
    }
    return true;
  }
}
function stepKVP(g: number, m: number, n: number) {
    var res = [];
    var i = m;
    while (i <= n - g) {
        if (primeKVP(i) && primeKVP(i + g)) {
            res.push(i);
            res.push(i + g);
            return res
        }
        i++;
    }
    return null;
}
//.................

describe("Random", function() {
    it("Tests step", function() {        
        for (var i = 0; i < 100; i++) {
            var g = randint(2, 11);
            var m = randint(1000, 1000000);
            var n = m + randint(1000, 2000);
            testing(step(g, m, n), stepKVP(g, m, n));
        }
    });
});