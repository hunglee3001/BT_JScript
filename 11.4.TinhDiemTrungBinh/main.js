let diemToan = Number(prompt("Nhập điểm môn Toán; "));
let diemVan = Number(prompt("Nhập điểm môn Văn; "));
let diemAnh = Number(prompt("Nhập điểm môn Anh; "));

dtb = (diemAnh + diemToan + diemVan)/3;
dtb = dtb.toFixed(2);
console.log(`Điểm trung bình là ${dtb}`);