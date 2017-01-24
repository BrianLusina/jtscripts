##

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in descending alphabetical order.

```javascript
(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")
```

## Complete The Pattern, again

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1

22
333
....
.....
nnnnnn
Examples:
```javascript
pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
```
* Hint: Use \n in string to jump to next line

Tags
> PUZZLES LOOPS CONTROL FLOW BASIC LANGUAGE FEATURES FUNDAMENTALS SEQUENCES ARRAYS STRINGS

## Name That Number

In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:
```javascript
nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
```
Words should be seperated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!


## Word Search
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty"
Examples

If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].



## Hashtag Generator

The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

If the final result is longer than 140 chars it must return false.
If the input is a empty string it must return false.
It must start with a hashtag (#).
All words must have their first letter capitalized.
Example Input to Output:

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

" Hello World " => "#HelloWorld"

> ALGORITHMS STRINGS

## Consecutive String

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
```javascript
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
