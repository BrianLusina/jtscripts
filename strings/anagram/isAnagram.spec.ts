import isAnagram from "./isAnagram";

const { assert } = require('chai');
const _ = require('lodash');

describe("isAnagram", () => {

  it('Fixed Tests', () => {

      assert.strictEqual(
          isAnagram('foefet', 'toffee'),
          true,
          'The word "foefet" is an anagram of "toffee"'
      );
      assert.strictEqual(
          isAnagram('Buckethead', 'DeathCubeK'),
          true,
          'The word "Buckethead" is an anagram of "DeathCubeK"'
      );
      assert.strictEqual(
          isAnagram('Twoo', 'WooT'),
          true,
          'The word "Twoo" is an anagram of "WooT"'
      );

      assert.strictEqual(
          isAnagram('dumble', 'bumble'),
          false,
          'Characters do not match for test case "dumble", "bumble"'
      );
      assert.strictEqual(
          isAnagram('ound', 'round'),
          false,
          'Missing characters for test case "ound", "round"'
      );
      assert.strictEqual(
          isAnagram('apple', 'pale'),
          false,
          'Same letters, but different count'
      );
  });


  it('Random Tests', () => {

    const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const changeCase = (c: string) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());
    const randomInt = (n: number) => ~~(Math.random() * n);
    const randomChar = () => ALPHABET[randomInt(ALPHABET.length)];
    const randomStr = (n: number) => [...new Array(n)].map((_) => randomChar()).join('');
    const randomIndex = (s: string | any[]) => randomInt(s.length);

    const randomAddChar = (s: string, i = randomIndex(s)) => s.slice(0, i) + randomChar() + s.slice(i);
    const randomDeleteChar = (s: string, i = randomIndex(s)) => s.slice(0, i) + s.slice(i + 1);
    const randomEditChar = (s: string, i = randomIndex(s)) => s.slice(0, i) + randomChar() + s.slice(i + 1);
    const randomChangeCase = (s: string | any[], i = randomIndex(s)) => s.slice(0, i) + changeCase(s[i]) + s.slice(i + 1);

    const shuffle = (s: any) => _.shuffle([...s]).join('');

    const randomModifyStr = (s: string) => {
        const t = shuffle(s),
            r = Math.random();
        if (r < 0.25) return randomAddChar(t);
        if (r < 0.5) return randomDeleteChar(t);
        if (r < 0.75) return randomEditChar(t);
        return randomChangeCase(t);
    };

    const normalize = (s: string) => s.toLowerCase().split('').sort().join('');

      for (let i = 0; i < 100; i++) {
        const original = randomStr(8 + randomInt(12));
        const modified = randomModifyStr(original);
        assert.strictEqual(
            isAnagram(original, modified),
            normalize(modified) === normalize(original),
            `Incorrect answer for test="${original}", original="${modified}"`
        );
      }
  });
});