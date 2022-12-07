import AbstractHandler from './AbstractHandler';

export default class DogHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request == 'MeatBall') {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
