const PeteTalk = require('./pete-talk')

test('Test 1', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk(''))
})

xtest('Test 2', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk('I want to punch someone in the face')).toEqual('I w**t to p***h s*****e in t*e f**e')
})

xtest('Test 3', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk('uh!')).toEqual('Uh!')
})

xtest('Test 4', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk('What the hell am I doing here? And where is my wallet? PETE SMASH!')).toEqual('W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!')
})

xtest('Test 5', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk('I want to punch someone in the face', ['someone', 'face'])).toEqual('I w**t to p***h someone in t*e face')
})

xtest('Test 6', () => {
  const pete = new PeteTalk()
  expect(pete.peteTalk('I want to punch someone in the face', ['drink', 'job', 'girls'])).toEqual('I w**t to p***h s*****e in t*e f**e')
})
