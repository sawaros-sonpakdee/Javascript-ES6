// Array Map 

const numbers = [10,20,30,40]

console.log(`number = ${numbers}`)
// const result =  numbers.map(e=>{
//     // const a = e*2
//     return e*2
// })

// เขียนแบบลดรูป
const result  =  numbers.map(e=>e*2)
console.log(`Array Map = ${result}`);

// [10,20,30,40]
// [10x2,20x2,30x2,40x2]
// [20,40,60,80]


const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]

// i คือ ตำแหน่งที่ใข้วนลูป
const resultTemp = data.map((e,i)=>{
    return  `วันที่ ${i+1} , สภาพอากาศ = ${e}`
})
console.log(resultTemp)


const data_set = [
    {day : "01/06/2564" , weather:"แดดร้อน", temp:27},
    {day : "03/06/2564" , weather:"ฝนตก", temp:23},
    {day : "04/06/2564" , weather:"หมอก", temp:18}
]

const resultDataSet = data_set.map(e=>e.weather) 

console.log(resultDataSet)