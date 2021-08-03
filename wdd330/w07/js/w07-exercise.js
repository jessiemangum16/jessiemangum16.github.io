let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays);

var flatArray = arrays.reduce(function(flatten, array) {
    console.log("test", flatten, array);
    return flatten.concat(array);
  }, [])

console.log(flatArray);

