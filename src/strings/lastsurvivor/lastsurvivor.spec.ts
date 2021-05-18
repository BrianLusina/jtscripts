const chai = require("chai");
import { lastSurvivor } from './lastsurvivor';
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample", function () {
   it("given 'abc' and [1, 1] ", function () {
      assert.deepEqual(lastSurvivor('abc', [1, 1]), 'a');
   });

   it("given 'kbc' and [0, 1]", function () {
      assert.deepEqual(lastSurvivor('kbc', [0, 1]), 'b');
   });

   it("given 'zbk' and [2, 1]", function () {
      assert.deepEqual(lastSurvivor('zbk', [2, 1]), 'z');
   });

   it("given 'zbk' and [2, 1]", function () {
      assert.deepEqual(lastSurvivor('c', []), 'c');
   });
});

describe("New Edge", function () {
   it("given 'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr' and [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]", function () {
      assert.deepEqual(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]), 'd');
   });
});

describe("Random tests", function () {

   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
   }

   function createTest() {
      const alph = 'abcdefghijklmnopqrstuvwxyz';
      let length = getRandomInt(1, 100);
      let str = '';
      while (str.length < length) {
         str += alph[getRandomInt(0, 25)]
      }
      let ar = [];
      let copyStr = str.split('');
      while (copyStr.length > 1) {
         let num = getRandomInt(0, copyStr.length)
         ar.push(num)
         copyStr.splice(num, 1)
      }
      copyStr = copyStr.join('');
      return [str, ar, copyStr]
   }

   function randomTests() {
      for (let i = 0; i < 10; i++) {
         let test = createTest();
         let [a, b, c] = test;
         it(`given ${a} and ${b}`, function () {
            assert.deepEqual(lastSurvivor(a, b), c)
         })
      }
   }
   randomTests()
})