// №205
// Дане натуральне число n. Дійсні числа а1, ..., аN.
// Получити max(|a1|, ..., |aN|) i sqrt(math.pow(a1) + ... + math.pow(aN)))

let arr = [];
let n = Number(prompt("Введіть n: ", 4));
for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Введіть a[${i}]> `, 2));
}

class ArrayResult {
  max = 0;
  sqrtSum = 0;
  constructor(arr) {
    this.arr = arr;
  }

  calcMax() {
    this.arr.map((e) => {
      if (Math.abs(e) > this.max) {
        this.max = Math.abs(e);
      }
    });
    return this.max;
  }

  calcSqrt() {
    for (let i = 0; i < this.arr.length; i++) {
      this.sqrtSum += Math.pow(this.arr[i], 2);
    }
    return Math.sqrt(this.sqrtSum);
  }
}

const arrResult = new ArrayResult(arr);

console.log("Array Sqrt = " + arrResult.calcSqrt());
console.log("Max = " + arrResult.calcMax());
