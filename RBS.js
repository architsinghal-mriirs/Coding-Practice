function RBS() {
  let arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
  let target = 3;
  let result = search(arr, target, 0, arr.length - 1);
  console.log(result);
}

function search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) return mid;

  if (arr[start] <= arr[mid]) {
    if (target >= arr[start] && target <= arr[mid]) {
      return search(arr, target, start, mid - 1);
    } else {
      return search(arr, target, mid + 1, end);
    }
  }
  if (target >= arr[mid] && target <= arr[end]) {
    return search(arr, target, mid + 1, end);
  }
  return search(arr, target, start, mid - 1);
}

RBS();
