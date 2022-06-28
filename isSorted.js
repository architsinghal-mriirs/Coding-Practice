function main(arr) {
  console.log(isSorted(arr, 0));
}

function isSorted(arr, index) {
  if (index == arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && isSorted(arr, index + 1);
}
let arr = [1, 2, 3, 4, 5, 6];
main(arr);
