/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(arr) {
  return arr[0];
}

function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}

function getIndex3(arr) {
  if (arr.length < 4) {
    return arr[arr.length - 1];
  } else {
    return arr[3];
  }
}

function isLongList(arr) {
  return arr.length >= 10;
}

function firstItemIsNumber(arr) {
  const firstItem = arr[0];
  return typeof firstItem === 'number';
}

function secondCharOfThirdString(arr) {
  const thirdItem = arr[2];
  return thirdItem[1];
}




/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
