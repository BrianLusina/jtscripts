interface BandMap {
  [key: string]: number
}

const bandMap: BandMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedResistorValue(bands: string[]): string {
  const [ bandOne, bandTwo, bandThree] = bands
  const resistanceValue = (bandMap[bandOne] * 10 + bandMap[bandTwo]) * Math.pow(10, bandMap[bandThree])
  const value = resistanceValue < 1000 ? resistanceValue : resistanceValue / 1000
  const unit = `${resistanceValue >= 1000 ? 'kilo' : ''}ohms`
  return `${value} ${unit}`
}
