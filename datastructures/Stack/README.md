# Stacks

Stacks are like a stack of plates. Its 'Last In, First out', which means that the item that was placed on the stack most
recently, is the first item out.

Stacks have 2 main methods:

1. **push()**: adds an item
2. **pop()**: removes and returns the top item

They can include some utility methods:

1. **peek()**: returns the item on the top of the stack without removing it
2. **is_empty()**: returns True if the stack is empty, False otherwise

"""Complexity O(1) time for push(), pop(), and get_max(). O(m) additional space, where mm is the number of
operations performed on the stack.

Notice that our time-efficient approach takes some additional space, while a lazy ↴ approach (simply walking through the
stack to find the max integer whenever get_max() is called) took no additional space. We've traded some space efficiency
for time efficiency.
