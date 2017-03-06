/**
 * Created by lusinabrian on 06/03/17.
 */
// outside your component class
export default  increaseScore = (state, props) => {
  return {score : state.score + 1};
}

export default decreaseScore = (state, props) =>{
  return {score: state.score -1};
}

// these can now be tested
expect(increaseScore({value: 0}, {step: 5})).toBe(5);
expect(increaseScore({value: 0}, {step: -5})).toBe(-5);
expect(decreaseScore({value: 0}, {step: 5})).toBe(-5);
expect(increaseScore({value: 0}, {step: -5})).toBe(5);
