const chai = require('chai');
const compose  = require("./compose");
const assert = chai.assert;

let doubleTheValue = function(v) { return v * 2 };
let addOneToTheValue = function(v) { return v + 1 };
let valueLength = function(v) { return v.length };

describe("Example Tests", function() {
  it("Handles edge cases correctly", function() {
     assert.strictEqual(compose(), undefined);
     assert.strictEqual(compose(42), 42);
  });
  it("Works well for some simple tests", function() {
      assert.strictEqual(compose("Hello, world"), "Hello, world" );
      assert.strictEqual(compose(5, doubleTheValue), 10 );
      assert.strictEqual(compose(5, doubleTheValue, addOneToTheValue), 11 );
      assert.strictEqual(compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue), 25 );
      assert.strictEqual(compose(1, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue), 10);
  });
});

function randomBool() {
  return Math.floor(Math.random()) == 0;
}

function randomNumber(lower, upper) {
  return Math.floor((Math.random() * upper) + lower);
}

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

describe("Random Tests", function() {
  it("works for random inputs", function() {
    
      let referenceCompose = function(value) {
        let args = Array.prototype.slice.call(arguments, 1);
        args.forEach(function(fn) {
          value = fn(value);
        });
        
        return value;
      };
        
      let randomNumbers = Array.from({length: 42}, () => Math.floor(Math.random() * 500)); 
      const ops = [(x,y)=>x+y,(x,y)=>x-y,(x,y)=>x*y,(x,y)=>x/y];
      let functions = randomNumbers.map(num=> {
        let someNum = randomNumber(0,3);
        return other => ops[someNum](num, other);
      });
      for (let i = 0; i < 1000; i++) {
        functions = shuffle(functions);
        let someNum = randomNumber(-1000, 1000);
        assert.strictEqual(compose(someNum, ...functions),
                         referenceCompose(someNum, ...functions));
      }
  });
});