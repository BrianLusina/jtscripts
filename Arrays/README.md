

## doubleAll
Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll

###### Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

###### Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

###### Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## Get Short messages

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

###### Arguments

  * messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

###### Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

###### Hint

  * Try chaining some Array methods!

###### Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

###### Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

## Check Valid Users

Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

###### Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

###### Arguments

  * goodUsers: a list of valid users

Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

## Count Words

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

###### Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

###### Arguments

  * inputWords: An array of random Strings.

###### Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

###### Resources

  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

---

## Array Reduce
Use Array#reduce to implement a simple version of Array#map.

###### Expected Output

A function map that applies a function to each item in an array and collects the results in a new Array.

    
    var nums = [1,2,3,4,5]
    
    // `map` is your exported function
    var output = map(nums, function double(item) {
      return item * 2
    })
    
    console.log(output) // => [2,4,6,8,10]

###### Arguments

  * input: an arbitrary Array of any type.
  * operation: an arbitrary Function which can be applied to items in `input`.

###### Hints

  * No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!

###### Resources

  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

---

## Chunks

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.