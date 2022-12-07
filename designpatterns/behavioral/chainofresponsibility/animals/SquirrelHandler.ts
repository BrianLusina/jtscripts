import AbstractHandler from './AbstractHandler';

export default class SquirrelHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
