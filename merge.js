function merge(left, right) {
    const merged = [];
    let i = 0; // Index for left array
    let j = 0; // Index for right array
  
    // Compare and merge elements
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
  
    // Add remaining elements from either array (if any)
    merged.push(...left.slice(i)); 
    merged.push(...right.slice(j));
  
    return merged;
}
  
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: Array is already sorted
    }
  
    const mid = Math.floor(arr.length / 2); // 2  // Find the middle point
    const left = mergeSort(arr.slice(0,mid)) // Sort the left half
    const right = mergeSort(arr.slice(mid)) // Sort the right half
  
    return merge(left, right) // Merge the sorted halves

}
  
module.exports = { merge, mergeSort };
  