function linearSearch(arr, target) {
  //   let result = helper(arr, 0, target);
  //   console.log(result);
  let store = [];
  findAllIndex(arr, 0, target, store);
  console.log(store);
}

function helper(arr, index, target) {
  if (arr[index] == target) {
    return "Found at index " + index;
  }
  if (index == arr.length) return "Not Found";
  return helper(arr, index + 1, target);
}

function findAllIndex(arr, index, target, store) {
  if (index == arr.length) return;
  if (arr[index] == target) {
    store.push(index);
  }
  return findAllIndex(arr, index + 1, target, store);
}

let arr = [3, 3, 3, 3, 3, 3, 2, 1, 18, 3, 9];
target = 3;
linearSearch(arr, target);
