const Proverb = require('./proverb')

test('tests a single consequence', () => {
  const proverb = new Proverb('nail', 'shoe')

  expect(proverb.toString()).toEqual(
    'For want of a nail the shoe was lost.\n' +
    'And all for the want of a nail.')
})

test('tests a short chain of consequences', () => {
  const proverb = new Proverb('nail', 'shoe', 'horse')

  expect(proverb.toString()).toEqual(
    'For want of a nail the shoe was lost.\n' +
    'For want of a shoe the horse was lost.\n' +
    'And all for the want of a nail.')
})

test('tests a longer chain of consequences', () => {
  const proverb = new Proverb('nail', 'shoe', 'horse', 'rider')

  expect(proverb.toString()).toEqual(
    'For want of a nail the shoe was lost.\n' +
    'For want of a shoe the horse was lost.\n' +
    'For want of a horse the rider was lost.\n' +
    'And all for the want of a nail.')
})

test('tests Proverb class does not hard code the rhyme dictionary',
  () => {
    const proverb = new Proverb('key', 'value')

    expect(proverb.toString()).toEqual(
      'For want of a key the value was lost.\n' +
      'And all for the want of a key.')
  })

test('tests the whole proveb', () => {
  const proverb = new Proverb('nail', 'shoe', 'horse', 'rider',
    'message', 'battle', 'kingdom')

  expect(proverb.toString()).toEqual(
    'For want of a nail the shoe was lost.\n' +
    'For want of a shoe the horse was lost.\n' +
    'For want of a horse the rider was lost.\n' +
    'For want of a rider the message was lost.\n' +
    'For want of a message the battle was lost.\n' +
    'For want of a battle the kingdom was lost.\n' +
    'And all for the want of a nail.')
})

test('tests the use of an optional qualifier in the final consequence',
  () => {
    const proverb = new Proverb('nail', 'shoe', 'horse', 'rider',
      'message', 'battle', 'kingdom', {
        qualifier: 'horseshoe'
      })

    expect(proverb.toString()).toEqual(
      'For want of a nail the shoe was lost.\n' +
      'For want of a shoe the horse was lost.\n' +
      'For want of a horse the rider was lost.\n' +
      'For want of a rider the message was lost.\n' +
      'For want of a message the battle was lost.\n' +
      'For want of a battle the kingdom was lost.\n' +
      'And all for the want of a horseshoe nail.')
  })

test('tests the proverb is the same each time', () => {
  const proverb = new Proverb('nail', 'shoe')

  expect(proverb.toString()).toEqual(proverb.toString())
})
