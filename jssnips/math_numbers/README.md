# Math

Involves JavaScript snippets on math problems


## Population Growth

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer (> 0), percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
```javascript
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

## Sum without highest and lowest number

Sum all the numbers of the array except the highest and the lowest element.
(Only one element at each edge, even if there are more than one with the same value!)

Example: { 6, 2, 1, 8, 10 } => 16

If array is empty or null, or if only 1 Element exists, return 0.

## Product of Largest Pair

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

> Disclaimer: Mr. Roll will only accept solutions that are faster than his, which has a running time O(nlogn).

```javascript
maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
```

> FUNDAMENTALS ARRAYS ALGORITHMS LOOPS CONTROL FLOW BASIC LANGUAGE FEATURES SORTING
