function binarySearch(arr, target) {
  let mid = Math.floor((arr[0] + arr[arr.length - 1]) / 2);
  let result = helper(arr, target, mid);
  if (!result) {
    console.log("Not Found");
    return;
  }
  console.log(result);
}

function helper(arr, target, mid) {
  if (arr[mid] == target) return "Found at " + mid;

  if (arr[mid] > target) {
    return helper(arr, target, mid - 1);
  }
  if (arr[mid] < target) {
    return helper(arr, target, mid + 1);
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let target = 2;

binarySearch(arr, target);
