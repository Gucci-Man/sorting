function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1; 
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(arr) {
    let maxDigits = 0;
    for (const num of arr) {
      maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
  }
  
  function countingSort(arr, place) {
    const output = new Array(arr.length).fill(0); 
    const count = new Array(10).fill(0); 
  
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], place);
      count[digit]++;
    }
  
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = getDigit(arr[i], place);
      count[digit]--;
      output[count[digit]] = arr[i];
    }
  
    return output;
  }
  
  function radixSort(arr) {
    const maxDigits = mostDigits(arr);
  
    for (let place = 0; place < maxDigits; place++) {
      arr = countingSort(arr, place);
    }
  
    return arr;
  }
  
  module.exports = { getDigit, digitCount, mostDigits, radixSort };
  