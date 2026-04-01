/*Yêu cầu nhập vào bán kính r từ bàn phím
a. tính chu vi hình tròn
b. tính diện tích hình tròn */
let r = prompt("Nhập vào bán kính r: ");
const PI = Math.PI;
let p = PI * r * 2;
console.log(`Chu vi hình tròn là: ${p}`);

let s = PI * r * r;
console.log(`Diện tích hình tròn là: ${s}`);