// №593

let m = Number(prompt("Введіть m: ", 5));

function returnNumbers(m) {
  let num = [];
  for (let i = 100; i < 1000; i++) {
    let arr = i.toString().split("");
    if (Number(arr[0]) + Number(arr[1]) + Number(arr[2]) == m) {
      num.push(arr.join(""));
    }
  }
  return num;
}

console.log(returnNumbers(m));
