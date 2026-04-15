//cách xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5
//Cách 1
console.log("Căn bậc hai của "+soA +" la "+ soB);
//Cách 2
console.log("Căn bậc hai của", soA, "la" ,soB);
//Cách 3
console.log(`Căn bậc hai của ${soA} la ${soB}`);
//Cách 4
console.log(`Căn bậc hai của %s la %s`,soA, soB);
let a = 4,
    b = 3,
    kq = a*b;
console.log("Kết quả: " +a+ " nhân với "+b+ " bằng "+kq)
console.log("Kết quả:" ,a,"nhân với" ,b,"bằng" ,kq)
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`)
console.log(`Kết quả: %s nhân với %s bằng %s`, a,b,kq)