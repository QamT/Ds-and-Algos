const partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

const quicksort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;

  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quicksort(arr, left, index - 1);
  quicksort(arr, index, right);

  return arr;
}
