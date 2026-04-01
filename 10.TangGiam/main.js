let a = 99;
let b = 10;
let c = 77;
let d = 88;

a++;
console.log(a);
b--;
console.log(b);
++c;
console.log(c);
--d;
console.log(d);

//thứ tự ưu tiên tính toán
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);