export default function removeElement(nums: number[], val: number): number {
    let pointer = 0;
    let size = nums.length;

    while(pointer < size) {
        if(nums[pointer] === val) {
            nums[pointer] = nums[size - 1];
            size--
        } else {
            pointer++
        }
    }

    return size
};
