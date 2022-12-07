import Handler from './handler';

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
export default abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
