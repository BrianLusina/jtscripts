var test = require("ava");
var expect = require('chai').expect;
var closedBracketWord = require("./closed-bracket-word")


test("It should works for basic tests.", t => {
  expect(closedBracketWord("abiryz")).to.equal(true)
});

test("", t => {
  expect(closedBracketWord("aibryz")).to.equal(false)
});

test("random word", t => {
  expect(closedBracketWord("abitryz")).to.equal(false)
});

test("some random word", t => {
  expect(closedBracketWord("zhuazfsa")).to.equal(true)
});

test("baby", t => {
  expect(closedBracketWord("baby")).to.equal(false)
});

test("grit", t => {
  expect(closedBracketWord("grit")).to.equal(true)
});

test("Foul", t => {
  expect(closedBracketWord("foul")).to.equal(false)
});
