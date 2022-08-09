import generateParenthesis from './generateParenthesis';

describe('generateParenthesis', () => {
  it('should return [()] for n = 1', () => {
    const n = 1;
    const expected = ['()'];
    const actual = generateParenthesis(n);
    expect(actual).toEqual(expected);
  });

  it('should return ["((()))", "(()())", "(())()", "()(())", "()()()"] for n = 3', () => {
    const n = 3;
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    const actual = generateParenthesis(n);
    expect(actual).toEqual(expected);
  });

});
