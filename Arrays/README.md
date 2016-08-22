
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

### Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

### Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

### Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## Get Short messages

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

### Arguments

  * messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

### Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

### Hint

  * Try chaining some Array methods!

### Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

### Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
