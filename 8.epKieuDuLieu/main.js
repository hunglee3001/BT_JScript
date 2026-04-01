//Xuất thông báo cho người dùng nhập số a
let numberA = prompt("Mời cụ nhập vào số a: ");
console.log(`A = ${numberA}`)
console.log(typeof(numberA));


let numberB = 5;
let kq = numberA + numberB
console.log(`${numberA} + ${numberB} = ${kq}`);
console.log(typeof(kq));
//nó sẽ hiện ra một kết quả cộng chuỗi chứ không cộng 2 N
//Các phép tính khác
console.log("A - B = "+(numberA-numberB));
console.log("A * B =",(numberA*numberB));
console.log(`A / B = ${numberA / numberB}`);
console.log(`A % B = %s`, numberA % numberB);
//Từ đó ta thấy chỉ có phép cộng sai thôi. --> ép kiểu dữ liệu
/*
parseInt: kiểu nguyên
parseFloat: Kiểu thực
hoặc đơn giản dùng hàm Number() để ép --> Kiểu dữ liệu number
*/
let numberC = parseInt(prompt("Mời cụ nhập vào số C: "));
console.log(`C = ${numberC}`);
console.log(typeof(numberC));
// nếu số thực mà ép kiểu nguyên sẽ mất phần đuôi phía sau
let numberD = parseInt(15.4);
console.log(`D = ${numberD}`);
console.log(typeof(numberD));