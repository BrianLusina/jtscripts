function CompareLists (llist1, llist2) {
  if (!llist1 || !llist2) {
    return false
  }

  let pointerOne = llist1
  let pointerTwo = llist2

  while (pointerOne && pointerTwo) {
    if (pointerOne.data != pointerTwo.data) {
      return false
    }

    pointerOne = pointerOne.next
    pointerTwo = pointerTwo.next
  }

  if ((pointerOne && !pointerTwo) || (pointerTwo && !pointerOne)) {
    return false
  }
  return true
}
