/**
 * Created by lusinabrian on 06/03/17.
 */
import { increaseScore, decreaseScore } from './state-changes';

class User {
  state = { score: 0 };

  // faking state in React
  setState(state, callback) {
    console.log('state', state);
    this.state = Object.assign({}, this.state, state);
    if (callback) callback();
  }
  // inside your component class
  handleIncreaseScore() {
    this.setState(increaseScore);
  }

  // multiple functional setState call
  increaseScoreBy3() {
    this.setState((state) => ({ score: state.score + 1 }));
    this.setState((state) => ({ score: state.score + 1 }));
    this.setState((state) => ({ score: state.score + 1 }));
  }
}

const Justice = new User();

/*
Update queue looks something like this */
const updateQueue = [
  (state) => ({ score: state.score + 1 }),
  (state) => ({ score: state.score + 1 }),
  (state) => ({ score: state.score + 1 }),
];

/**
 * faking the updating process
 * */
function updateState(component, updateQueue) {
  if (updateQueue.length() === 1) {
    return component.setState(updateQueue[0](component.state));
  }

  return component.setState(updateQueue[0](component.state), () =>
    updateState(component, updateQueue.slice(1)),
  );
}

// update the state
updateState(Justice, updateQueue);
