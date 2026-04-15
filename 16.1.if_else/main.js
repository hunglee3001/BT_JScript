//Xuất thông báo nhập điểm và kiểm tra điểm đtb
let dtb = parseFloat(prompt("Nhập điểm trung bình: "));
if (dtb >= 5.0){
    console.log("Bạn đã đỗ");
}
else{
    console.log("Bạn đã rớt");
}