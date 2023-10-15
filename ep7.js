//Destructuring การสลายโครงสร้าง 
// คือการกำหนดค่าที่อยู่ภายใน Object ให้กับตัวแปร โดยใช้วิธีการจับคู่ตัวแปรกับค่าใน Array หรือ Object 

const colors = ["เขียว","แดง","เหลือง"]
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]

// const [green,red,yellow] = colors
// console.log(green)
// console.log(red)
// console.log(yellow)


//ต้องการเเค่สีเหลือง
// const [,,yellow] = colorsS
// console.log(yellow)

// const [green,,yellow] = colors
// console.log(green ,",",  yellow)


//object
const product = {
    productName :   "คอม",
    price : 30000,
    stock : 10
}

// const productname  = product.productName
// const price = product.price
// const stock = product.stock



const {productName:productName,price:price,stock:stock} = product


console.log(productName)
console.log(price)
console.log(stock)


