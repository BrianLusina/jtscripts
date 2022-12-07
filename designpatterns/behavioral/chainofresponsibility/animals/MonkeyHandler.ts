import AbstractHandler from './AbstractHandler';

export default class MonkeyHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
