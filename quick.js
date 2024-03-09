/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let swapIndex = start; // Tracks where to swap the pivot at the end
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // Swap elements
      }
    }
  
    // Place the pivot in its final position
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  
    return swapIndex; // Index of the pivot after partitioning
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
  
      // Recursively sort left and right parts
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
}

module.exports = {quickSort, pivot};