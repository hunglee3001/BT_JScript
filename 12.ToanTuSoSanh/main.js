//12. Các phép so sanh
let a = 1;
let b = 3;
let c = "3";

console.log(typeof b);
console.log(typeof c);

//các phép so sánh
console.log (a > b);
console.log (a < b);
console.log (a <= b);
console.log (a >= b);
console.log (a != b);
console.log (c != b);//Lưu ý:

//So sánh 2 dấu bằng không quan tâm đến kiểu dữ liệu
console.log(c == b);

//so sánh 3 dấu bằng quan tâm đến cả kiểu dữ liệu
console.log(c === b);