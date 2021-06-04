/**
 * Stack class to create Stack objects for browserHistory
 * underscore denotes that these variables are private and should not be manipulated externally
 * top method returns the current position
 * push method updates the browserHistory increasing the position variable which will be the key
 * pop removes the current object and goes to the next previous one */
class Stack {
  constructor () {
    this._storage = {}
    this._position = -1 // 0 indexed when we add items
  }

  push () {
    this._position++
    this._storage[this._position] = value
  }

  pop () {
    if (this._position > -1) {
      const val = this._storage[this._position]
      delete this._storage[this._position]
      this._position--
      return val
    }
  }

  top () {
    return this._position
  }
}

const browserHistory = new Stack()
const forward = new Stack() // new forward Stack

browserHistory.push('google.com') // navigating to Medium
browserHistory.push('medium.com') // navigating to Free Code Camp
browserHistory.push('freecodecamp.com') // navigating to Netflix
browserHistory.push('netflix.com') // current site

forward.push(browserHistory.pop())// returns Netflix and stores it in forward Stack
// when forward button is clicked it will return the current site which should be Netflix
browserHistory.push(forward.pop())

// freecodecamp is the current website on display
