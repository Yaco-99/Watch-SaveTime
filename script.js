let arr = [4, 6, 10, 1, 2, 13];
let stop = false;
do {
  stop = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      stop = true;
    }
  }
} while (stop);
test = 4;
console.log(test);
if (test == 5) {
  let x = "oui";
  return x;
}
if (test < 5) {
  let x = "maybe";
  return x;
} else {
  return no;
}

function cspell() {}
