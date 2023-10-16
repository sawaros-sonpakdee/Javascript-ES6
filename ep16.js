// Array Reduce

const data = [10,20,30,40]

const mapData = data.map(e=>100)

const filterData = data.filter(e=>e>20)


// array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)
// value = 0
// สมาชิดใน array

// const reduceData = data.reduce((value,e)=>{
//     console.log(value)
//     const total = e + value
//     return total
// },0)

// value = 0 10 30 60 100
// total =  10


// const summation = data.reduce((value,e)=>e+value,0)
// console.log(summation);

const cart = [
    {name: "กระเป๋า",price:500},
    {name: "หนังสือ", price:900},
    {name: "กล้องถ่ายรูป",price:5000}
]

const summation = cart.reduce((value,e)=>e.price+value,0)
console.log(`ลุกค้่าต้องการชำระเงิน = ${summation} บาท`);