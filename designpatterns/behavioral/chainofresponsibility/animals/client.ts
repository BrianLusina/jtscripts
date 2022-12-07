import DogHandler from './DogHandler';
import Handler from './handler';
import MonkeyHandler from './MonkeyHandler';
import SquirrelHandler from './SquirrelHandler';

function client(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of Coffee', 'MeatBall'];

  for (const food of foods) {
    console.log(`Client: Who wants ${food}`);

    const result = handler.handle(food);

    if (result) {
      console.log(`\t ${result}`);
    } else {
      console.log(`\t ${food} was left untouched`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log(`Chain: Monkey > Squirrel > Dog\n`);
client(monkey);
console.log('');

console.log('SubChain: Squirrel > Dog\n');
client(squirrel);
