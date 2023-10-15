//Rest Parameter ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

summation=(...numberArr)=> {
    let total = 0
    for(let number of numberArr) total+=number // 0+500+1000+500+100 = 2100
    //เป็น function ต้อง return ด้วย
    return (total)
}

console.log(summation(500,1000,500,100)); 
console.log(summation(500,1000,500)); 
console.log(summation(500,1000)); 
console.log(summation(500)); 
