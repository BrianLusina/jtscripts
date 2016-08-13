# Math

Involves JavaScript snippets on math problems

## Pernicious

A pernicious number is a positive integer whose binary digit sum (or Hamming weight) is a prime number.

25 = 11010  -->  digit sum = 3 --> 3 is prime --> therefore 25 is a pernicious number

75 = 1001011  -->  digit sum = 4 --> 4 is not prime --> therefore 75 is not a pernicious number
Task

Your job is to create a function that will list all of the pernicious numbers up to the given value (inclusive). The values given will increase in size, meaning the list will be very large.

For example:
```javascript
pernicious(5) should return [3, 5]

pernicious(12) should return [3, 5, 6, 7, 9, 10, 11, 12]
```

If there are no pernicious numbers in the given range, your function should return "No pernicious numbers". This means when given a negative value, it should still recieve this output.
``` javascript
pernicious(0) should return "No pernicious numbers"

pernicious(-1) should return "No pernicious numbers"
```

Also, if given a floating point number, return the list of pernicious numbers with the number floored (rounded down).

```JavaScript
pernicious(17.546456) should return [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17]
```

You will only be given integers and floats.

Remember:

1 is not a prime number and 2 is a prime number.


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
