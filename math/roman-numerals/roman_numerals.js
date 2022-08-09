/**
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.* */
function convertToRoman(num) {
  if (!Number(num)) {
    return false;
  }
  // convert the number to a string and split it into an array
  // store key values of roman numerals
  const digits = String(Number(num)).split('');
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  let roman = '';
  let i = 3;
  while (i--) {
    roman = (key[Number(digits.pop()) + i * 10] || '') + roman;
  }
  return Array(Number(digits.join('')) + 1).join('M') + roman;
}

convertToRoman(36);
