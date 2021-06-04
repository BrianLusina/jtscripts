module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}',
    '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
}
