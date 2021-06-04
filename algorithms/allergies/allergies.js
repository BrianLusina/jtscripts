function Allergies (allergenIndex) {
  this.allergenIndex = allergenIndex
  // all the possible allergies
  this.possibleAllergies = ['eggs', 'peanuts', 'shellfish', 'strawberries',
    'tomatoes', 'chocolate', 'pollen', 'cats']
}

/**
 * Return a list of all the possible foods this person is allergic to
 * @return a list of all the foods they are allergic to based on the allergen index
 */
Allergies.prototype.list = function () {
  const allergies = []

  // loop through all possible allergies and perform a bitwise operation on the
  // allergenIndex and the square of the position of the allergy
  // this will be either 1 or 0, if 1, add the allergy to the list
  for (let x = 0; x < this.possibleAllergies.length; x++) {
    const possibleAllergy = this.possibleAllergies[x]
    if (this.allergenIndex & Math.pow(2, x)) {
      allergies.push(possibleAllergy)
    }
  }

  return allergies
}

/**
 * check if they are allergic to a particular food
 * @param food, food to check for
 * @return Boolean, whether they are allergic to the food or not
 * */
Allergies.prototype.allergicTo = function (food) {
  let isAllergic = false

  const allergyList = this.list()

  // loops through the list, checks if the first food it finds is the one we are searching for
  // assignes isAllergic to true and breaks out of the loop early.
  for (let y = 0; y < allergyList.length; y++) {
    if (allergyList[y] === food) {
      isAllergic = true
      break
    }
  }

  return isAllergic
}

module.exports = Allergies
