# String Manipulation

Series of problems and solutions to String manipulation in Python. Of course there are dozens of other ways to solve these problems.
Here is a breakdown of challenges and their descriptions

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

## Complete The Pattern

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:

(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
```javascript
pattern(4):

4321
432
43
4
pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
```
Hint: Use \n in string to jump to next line

## Determine offspring sex based on genes XX and XY chromosomes

The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

## Time Degrees
Time , time , time . Your task is to write a function that will return the degrees on a analog clock from a digital time that is passed in as parameter . The digital time is type string and will be in the format 00:00 . You also need to return the degrees on the analog clock in type string and format 360:360 . Remember to round of the degrees . Remeber the basic time rules and format like 24:00 = 00:00 and 12:60 = 13:00 . Create your own validation that should return "Check your time !" in any case the time is incorrect or the format is wrong , remember this includes passing in negatives times like "-01:-10".

A few examples :
```javacript
clock_degree("00:00") will return : "360:360"
clock_degree("01:01") will return : "30:6"
clock_degree("00:01") will return : "360:6"
clock_degree("01:00") will return : "30:360"
clock_degree("01:30") will return : "30:180"
clock_degree("24:00") will return : "Check your time !"
clock_degree("13:60") will return : "Check your time !"
clock_degree("20:34") will return : "240:204"
```
Remember that discrete hour hand movement is required - snapping to each hour position and also coterminal angles are not allowed. Goodluck and Enjoy !

## Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
``` java
Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parenthese!
Tags:
> ALGORITHMS, ARRAYS, STRINGS, LOOPS, CONTROL FLOW, BASIC LANGUAGE FEATURES, FUNDAMENTALS, FORMATTING, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES

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
name_that_number(4)   # returns "four"
name_that_number(19)  # returns "nineteen"
name_that_number(99)  # returns "ninety nine"
```

Words should be seperated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
