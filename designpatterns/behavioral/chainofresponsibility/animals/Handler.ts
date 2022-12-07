/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
export default interface Handler {
  setNext(e: Handler): Handler;

  handle(e: string): string | null;
}
