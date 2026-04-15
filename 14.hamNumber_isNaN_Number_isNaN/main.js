let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);
//khi mà ép kiểu number không được console.log sẽ hiện là NaN, nhưng typeof vẫn là Number
console.log("==========Notes==========")
let character = "123a";
console.log(typeof character);
let numb = Number(character);
console.log(numb);
console.log(typeof numb);
console.log("==========Notes==========");
//let so = Number(prompt("Nhập vào một số: "));
//console.log(so);
console.log("==========isNaN==========");
let a = 123;
console.log(isNaN(a));
let b = "123";
console.log(isNaN(b));// nó vẫn cố gắng chuyển đổi sang số để check
let c = "123a";
console.log(isNaN(c));
console.log("==========convert==========");
let d = Number(true)//false vì có thể chuyển sang 0
console.log(d);
console.log(isNaN (d));
console.log(Number(null));
console.log(isNaN(null));
console.log(Number(" "));
console.log(isNaN(" "));
console.log(Number(""));
console.log(isNaN(""));
console.log("==========Number.isNaN==========");
console.log(Number.isNaN(NaN));
console.log("abc"/"bcd");
console.log(0/0);
console.log(Number.isNaN("abc"/"bcd"));
console.log(0/0);