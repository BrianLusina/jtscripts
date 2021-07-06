# Max Stack

Design a stack that supports push, pop, top, and retrieving the maximum element in constant time.

Implement the MaxStack class:

MaxStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMax() retrieves the minimum element in the stack.

Example 1:

Input
["MaxStack","push","push","push","getMax","pop","top","getMax"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MaxStack maxStack = new MaxStack();
maxStack.push(-2);
maxStack.push(0);
maxStack.push(-3);
maxStack.getMax(); // return 0
maxStack.pop();
maxStack.top();    // return 0
maxStack.getMax(); // return 0
