const BinarySearch = (arr, x, start, end) => {
  if (start > end) return false;

  const mid = Math.floor((start + end) / 2);

  if (mid === x) return true;

  return arr[mid] > x ? BinarySearch(arr, x, start, mid - 1) : BinarySearch(arr, x, mid + 1, end);
}