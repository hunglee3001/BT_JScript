//random từ 0 -> 1
let randomValue = Math.random();
console.log(randomValue);

//random số lớn hơn 1
let randomValue2 = Math.random()*10;
console.log(randomValue2);

//random số nguyên
let randomValue3 = parseInt(Math.random()*10);
console.log(randomValue3);

//random chạy lên sát 30
let ran4 = Math.random() * 30;
console.log(ran4);

//random chạy tới 30
let ran5 = Math.random() * 31;
console.log(ran5);

//random cho nó không xuất phát từ không
let ran6 = Math.random() * 30 + 10; 
console.log(ran6);
//nhưng đây sẽ chạy lên 40 nên hạ số nhân xuống
let ran7 = Math.random() * 20 + 10;
console.log(ran7);