# Wordy

Parse and evaluate simple math word problems returning the answer as an integer.

You are required to create an `answer` method that evaluates the math expressions

## Addition

Add two numbers together.

``` javascript
> var question = 'What is 53 plus 2?';
> new WordProblem(question).answer()
55
```

Make sure to handle large numbers and negative numbers.

## Subtraction, Multiplication and Division

Now, perform the other three operations.

### Subtraction

``` javascript
> var question = 'What is 7 minus 5?';
> new WordProblem(question).answer()
2
```

### Division

``` javascript
> var question = 'What is 25 divided by 5?';
> new WordProblem(question).answer()
5
```

### Multiplication

``` javascript
> var question = 'What is -3 multiplied by 25?';
> new WordProblem(question).answer())
-75
```

## Multiple Operations

Handle a set of operations, in sequence.

Since these are verbal word problems, evaluate the expression from
left-to-right, _ignoring the typical order of operations._

> What is 5 plus 13 plus 6?

24

> What is 3 plus 2 multiplied by 3?

15  (i.e. not 9)


### Notes

Implement your own `ArgumentError` Exception class to catch expressions and questions that are not
math problems or not valid inputs at all.

These are the word operations that you will need to look out for

+ plus
+ minus
+ multiplied by
+ divided by

## Bonus — Exponentials

If you'd like, handle exponentials.

> What is 2 raised to the 5th power?

32
