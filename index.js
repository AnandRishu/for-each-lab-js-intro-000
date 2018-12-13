function iterativeLog(arr) {
  return arr.forEach(function (element, index, array) {
    console.log(`${index}: ${element}`);
  });
  
}

function iterate(callback) {
  var arr = [1, 2, 3, 4];
  arr.forEach(callback)
  return arr;
}

function doTOArray(arr, callback) {
  arr.forEach(callback);
}