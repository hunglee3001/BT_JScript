//14. các hàm toán học thông dụng
//1. hàm math.sqrt()
let a = Math.sqrt(4);
console.log(a);

//2. Hàm Math.pow(base, exponent)
let soC = 2;
let soD = 3;
let result = Math.pow(soC, soD);
console.log(`${soC} ^ ${soD} = ${result}`);

//3. Hàm Math.abs()
let soF = -10;
let absoluteValue = Math.abs(soF);
console.log(`|${soF}| = ${absoluteValue}`);

//4. Hàm Math.ceil(): Làm tròn lên
//   Hàm math.floor(): Làm tròn xuống
let decimalNum = 4.01;
let ceilValue = Math.ceil(decimalNum);
let floorValue = Math.floor(decimalNum);
console.log(`${decimalNum} lam tròn lên: ${ceilValue}; làm tròn xuống ${floorValue}`);
//Hàm Math.round(): từ 0.5 làm tròn thành 1
let floatNum = 7.49;
let roundValue = Math.round(floatNum);
console.log(`${floatNum} làm tròn: ${roundValue}`);

//Hàm tròn x chữ số phần đơn vị
x = 3.1345435
let xRound = x.toFixed(2); //--> trả về kết quả là string, muốn là số phải ép kiểu
console.log(`${x} sau khi làm tròn: ${xRound}`);
console.log(typeof xRound);

y = 4.243242;
let yRound = parseFloat(y.toFixed(3));
console.log(`${y} sau khi làm tròn: ${yRound}`);
console.log(typeof yRound);
//Hàm Math.min() và Math.max()
let num1 = 8;
let num2 = 12,
    num3 = 5;
let minValue = Math.min(num1, num2, num3);
let maxValue = Math.max(num1, num2, num3);
console.log(`So lớn nhất là: ${maxValue}, số nhỏ nhất là ${minValue}`);