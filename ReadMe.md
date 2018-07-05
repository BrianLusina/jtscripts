# JS Snippets

[![Build Status](https://travis-ci.org/BrianLusina/JS-Snippets.svg?branch=master)](https://travis-ci.org/BrianLusina/JS-Snippets)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b871db59f2544adb906bec4da66cda3a)](https://www.codacy.com/app/BrianLusina/JS-Snippets?utm_source=github.com&utm_medium=referral&utm_content=BrianLusina/JS-Snippets&utm_campaign=badger)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b871db59f2544adb906bec4da66cda3a)](https://www.codacy.com/app/BrianLusina/JS-Snippets?utm_source=github.com&utm_medium=referral&utm_content=BrianLusina/JS-Snippets&utm_campaign=Badge_Coverage)
[![CircleCI](https://circleci.com/gh/BrianLusina/JS-Snippets.svg?style=svg)](https://circleci.com/gh/BrianLusina/JS-Snippets)
[![codecov](https://codecov.io/gh/BrianLusina/JS-Snippets/branch/master/graph/badge.svg)](https://codecov.io/gh/BrianLusina/JS-Snippets)
[![david-dm](https://david-dm.org/BrianLusina/JS-Snippets.svg)](https://david-dm.org/BrianLusina/JS-Snippets.svg)
[![david-dm](https://david-dm.org/BrianLusina/JS-Snippets/dev-status.svg)](https://david-dm.org/BrianLusina/JS-Snippets/dev-status.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

Consists of various JavaScript problems and thei solutions. Of course the solutions are my own, feel free to comment on them and add on to them.
These problems are from various coding challenge sites(Codewars, exercism), some from FreeCode Camp and others are my own.
Each problem will have a brief description as to what is required and their tests will be provided and implemented using jasmine-node.

Simply clone the project git into the directory and install the dependencies.

``` sh
$ git clone https://github.com/BrianLusina/JS-Snippets.git
$ cd JS-Snippets
$ npm install
```
> `yarn install`, if using yarn

## Tests

To run tests, simply use jasmine-node

``` sh
$ jasmine-node tests/
```
> This will run all the tests in the tests/ directory, which is where all tests should live.

Alternatively, you can use `npm run test-all`, which will do the trick.

You can run coverage with `npm run cover`, which will use [istanbul](https://istanbul.js.org/) for test coverage.
