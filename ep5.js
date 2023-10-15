//Spread Operator ใช้ในการก ระจายสมาชิกใน Array ออกในใช้งานโดยเติมเครื่องหมาย...ด้านหน้า ตัวแปร Array

const newArr = [100,200,300]
const data = [10,20,newArr]
const data2 = [10,20,...newArr]
// console.log(data)
// console.log("length of array : " + data.length)
// console.log(data2)

//การ push ข้อมูลเข้าไปใน arr
const colors = ["เขียว","น้ำเงิน","ขาว"]
const allColors = ["แดง","เหลือง",...colors]
const newColors = ["ดำ","เทา"]
allColors.push(...newColors)
console.log(allColors);


