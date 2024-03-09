function bubbleSort(arr) {
    let swapped;
  
    do {
      swapped = false; // Initially assume no swaps needed
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements if they are in the wrong order
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true; // A swap happened, more iterations might be needed
        }
      }
    } while (swapped); // Keep iterating until there are no swaps
  
    return arr;
  }
  
  module.exports = bubbleSort;
  