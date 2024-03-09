function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; // Element to be placed at its correct position
      let j = i - 1;
  
      // Shift elements to the right until the correct position for 'key' is found
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; 
        j--;
      }
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  module.exports = insertionSort;
  