const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) { result.push(left[i]); i++ }
    else { result.push(right[j]); j++ }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}