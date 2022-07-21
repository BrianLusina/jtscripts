import { assert } from 'chai'
import rps from './rps'

describe("Beginner - Lost Without a Map", () => {

  const solution = (p1: string, p2: string): string => {
    const winMap: {[ejini战神: string]: string} = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
    }
    const v: number = winMap[p1] === p2 ? 1 : 2
    return p1 === p2 ? 'Draw!' : `Player ${v} won!`
  }

    const getMsg = (n: number): string => `Player ${n} won!`

    it('player 1 win', () => {
      assert.strictEqual(rps('rock', 'scissors'), getMsg(1))
      assert.strictEqual(rps('scissors', 'paper'), getMsg(1))
      assert.strictEqual(rps('paper', 'rock'), getMsg(1))
    })

    it('player 2 win', () => {
      assert.strictEqual(rps('scissors', 'rock'), getMsg(2))
      assert.strictEqual(rps('paper', 'scissors'), getMsg(2))
      assert.strictEqual(rps('rock', 'paper'), getMsg(2))
    })

    it('draw', () => {
      assert.strictEqual(rps('rock', 'rock'), 'Draw!')
      assert.strictEqual(rps('scissors', 'scissors'), 'Draw!')
      assert.strictEqual(rps('paper', 'paper'), 'Draw!')
    })

    for (let i: number = 0; i < 50; ++i) {
      const options: string[] = ['rock', 'paper', 'scissors']
      const rnd1: string = options[~~(Math.random() * 3)]
      const rnd2: string = options[~~(Math.random() * 3)]
      const expected = solution(rnd1, rnd2)
      const actual = rps(rnd1, rnd2)

      it(`should return ${expected} for p1=${rnd1}, p2=${rnd2}`, () => {
        assert.strictEqual(actual, expected)
      })
    }
  })