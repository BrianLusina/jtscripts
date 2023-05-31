import { DoubleNode } from '../../datastructures/linkedlist/doublylinkedlist';

class BrowserHistory {
  private currentNode: DoubleNode<string, string>;
  constructor(homepage: string) {
    this.currentNode = new DoubleNode(homepage, homepage);
  }

  /**
   * Visit url from the current page. It clears up all the forward history.
   * @param {string} url url to visit
   * @returns {void}
   */
  visit(url: string): void {
    const node = new DoubleNode(url, url);

    this.currentNode.next = node;
    node.previous = this.currentNode;
    this.currentNode = node;
  }

  /**
   * Back moves steps back in history. If you can only return x steps in the history and steps > x,
   * you will return only x steps. Return the current url after moving back in history at most steps
   * @param {number} steps steps to move back
   * @returns {string} the current url
   */
  back(steps: number): string {
    let { currentNode } = this;
    for (let i = 0; i < steps; i++) {
      if (currentNode.previous) {
        currentNode = currentNode.previous;
      }
    }
    this.currentNode = currentNode;
    return currentNode.data;
  }

  /**
   * Forward moves steps forward in history. If you can only forward x steps in the history and steps > x,
   * you will forward only x steps. Return the current url after forwarding in history at most steps.
   * @param {number} steps steps to move forward
   * @returns {string} the current url
   */
  forward(steps: number): string {
    let { currentNode } = this;
    for (let i = 0; i < steps; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    this.currentNode = currentNode;
    return currentNode.data;
  }
}

export default BrowserHistory;
