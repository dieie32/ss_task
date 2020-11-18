// №187
// Дане натуральне число n. Дійсні числа а1, ..., аN. В послідовності а1, ..., аN, 
// всі негативні члени збільшити на 0.5, а всі позитивні змінити на 0.1

let arr = [];
let n = Number(prompt("введіть n: ", 5));
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`введіть a[${i}]> `, 1));
}

function arrFilter(arr) {
  return (arr = arr.map((num) => (num >= 0 ? (num = 0.1) : (num = num + 0.5))));
}

console.log(arrFilter(arr));
