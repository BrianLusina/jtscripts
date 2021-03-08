/**
 * Partitions a list into 2 & returns the pivot index.
 * Takes the pivot as the last element in the array
 * @param {Number[]} theList List of numbers 
 * @param {number} startIndex Start index
 * @param {number} endIndex End index
 */
function partition(theList: number[], startIndex: number, endIndex: number): number {
    
    let pivot = theList[endIndex];
    let leftIndex = startIndex;
    let rightIndex = endIndex - 1;

    while(leftIndex <= rightIndex) {
        // walk until we find something on the left side that belongs on the right (less than the pivot)
        while(leftIndex <= endIndex && theList[leftIndex] < pivot) {
            leftIndex += 1;
        }

        // walk until we find something on the right side that belongs on the left(greater than or equal to the pivot)
        while(rightIndex >= startIndex && theList[rightIndex] >= pivot) {
            rightIndex -= 1;
        }

        // swap the items at the left_index and right_index, moving the element that's smaller than the pivot to the left
        // half and the element that's larger than the pivot to the right half
        if (leftIndex < rightIndex) {
            const temp = theList[leftIndex];
            theList[leftIndex] = theList[rightIndex];
            theList[rightIndex] = temp;
        } else {
            // unless we have looked at all the elements in the list and are done partitioning. In that case, move the pivot element
            // into it's final position
            const temp = theList[leftIndex];
            theList[leftIndex] = theList[endIndex];
            theList[endIndex] = temp;
        }
    }

    return leftIndex;
}

/**
 * Quicksorts a sublist of array of numbers
 * @param {Number[]} theList List of numbers to sort
 * @param {number} startIndex Start index 
 * @param {number} endIndex End endex
 */
function quicksortSubArray(theList: number[], startIndex: number, endIndex: number) {

    // Base case: array with 0 or 1 element(s)
    if(startIndex >= endIndex) {
        return
    }

    const pivotIndex = partition(theList, startIndex, endIndex);

    quicksortSubArray(theList, startIndex, pivotIndex - 1);
    quicksortSubArray(theList, pivotIndex + 1, endIndex);
}

/**
 * Quiksorts a list of numbers
 * @param {Number[]} theList list of numbers to sort
 */
export function quicksort(theList: number[]) {
    let length = theList.length;

    // Nothing to sort here
    if(length <= 1) {
        return theList
    }

    quicksortSubArray(theList, 0, length - 1);
}