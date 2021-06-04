const test = require('ava')
const expect = require('expect')
const SpaceAge = require('./space-age')

test('age in seconds', t => {
  const age = new SpaceAge(1000000)
  t.is(age.seconds, 1000000)
})

test('age in earth years', t => {
  const age = new SpaceAge(1000000000)
  t.is(age.onEarth(), 31.69)
})

test('age in mercury years', t => {
  const age = new SpaceAge(2134835688)
  t.is(age.onEarth(), 67.65)
  t.is(age.onMercury(), 280.88)
})

test('age in venus years', t => {
  const age = new SpaceAge(189839836)
  t.is(age.onEarth(), 6.02)
  t.is(age.onVenus(), 9.78)
})

test('age in mars years', t => {
  const age = new SpaceAge(2329871239)
  t.is(age.onEarth(), 73.83)
  t.is(age.onMars(), 39.25)
})

test('age in jupiter years', t => {
  const age = new SpaceAge(901876382)
  t.is(age.onEarth(), 28.58)
  t.is(age.onJupiter(), 2.41)
})

test('age in saturn years', t => {
  const age = new SpaceAge(3000000000)
  t.is(age.onEarth(), 95.06)
  t.is(age.onSaturn(), 3.23)
})

test('age in uranus years', t => {
  const age = new SpaceAge(3210123456)
  t.is(age.onEarth(), 101.72)
  t.is(age.onUranus(), 1.21)
})

test('age in neptune year', t => {
  const age = new SpaceAge(8210123456)
  t.is(age.onEarth(), 260.16)
  t.is(age.onNeptune(), 1.58)
})
