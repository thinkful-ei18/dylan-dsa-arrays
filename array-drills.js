'use strict';

function replaceSpaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str = str.slice(0, i) + '%20' + str.slice(i + 1);
    }
  }
  return str;
}

// console.log(replaceSpaces('hello there'));

function arrayFilter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(arrayFilter([1, 5, 10], x => x > 5));

//ASK MENTOR
function maxSum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    result.push(sum);
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      result.push(sum);
    }
  }
  return Math.max(...result);
}

// console.log(maxSum([1, 2, 3, 4, -2, -1]));

function merge(arr1, arr2) {
  const result = [];
  while (arr1.length || arr2.length) {
    if (!arr1[0]) {
      result.push(arr2[0]);
      arr2.splice(0, 1);
    } else if (!arr2[0]) {
      result.push(arr1[0]);
      arr1.splice(0, 1);
    } else if (arr1[0] < arr2[0]) {
      result.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      result.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  return result;
}

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChar(str, filter) {
  for (let i = 0; i < str.length; i++) {
    if (filter.includes(str[i])) {
      str = str.slice(0, i) + str.slice(i + 1);
      i--;
    }
  }
  return str;
}

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function arrayProducts(arr) {
  let zeroCounter = 0;
  let sum = 1;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCounter++;
    } else {
      sum *= arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (zeroCounter === 0) {
      result.push(sum / arr[i]);
    } else if (zeroCounter === 1) {
      result.push(arr[i] === 0 ? sum : 0);
    } else {
      result.push(0);
    }
  }
  return result;
}

// console.log(arrayProducts([1, 3, 9, 4]));

function twoDArrayManipulation(arr) {
  let zeroRows = [];
  let zeroColumns = [];
  const result = [];
  arr.forEach(() => result.push([]));
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (arr[row][column] === 0) {
        zeroRows.push(row);
        zeroColumns.push(column);
      }
    }
  }
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (zeroRows.includes(row)) {
        result[row].push(0);
      } else if (zeroColumns.includes(column)) {
        result[row].push(0);
      } else {
        result[row].push(1);
      }
    }
  }
  return result;
}

function twoDimension(arr) {
  const zRows = new Array(arr.length);
  const zColumns = [];
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (arr[row][column] === 0) {
        zRows[row] = true;
        zColumns[column] = true;
      } else {
        zRows[row] = zRows[row] ? true : false;
        zColumns[column] = zColumns[column] ? true : false;
      }
    }
  }
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (zRows[row] || zColumns[column]) {
        arr[row][column] = 0;
      }
    }
  }
  return arr;
}

console.log(
  twoDimension([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);

function isStringRotated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = str2.length - 1; i > 0; i--) {
    block_1: {
      if (str2[i] === str1[str1.length - 1]) {
        let str2Counter = i;
        for (let j = str1.length - 1; j > 0; j--) {
          if (str2Counter < 0) {
            str2Counter = str2.length - 1;
          }
          if (str2[str2Counter] !== str1[j]) {
            break block_1;
          }
          str2Counter--;
        }
        return true;
      }
    }
  }
  return false;
}

// console.log(isStringRotated('amanzon', 'anzonam'));

function isRotation(string1, string2) {
  return (string2 + string2).indexOf(string1) > -1;
}
