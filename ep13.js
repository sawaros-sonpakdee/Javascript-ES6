//ค้นหาข้อมูลใน Array 
// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex(ข้อมูล) => ผลการคเนหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]

// const index = colors.indexOf("น้ำเงิน")
// console.log(index);


const search = colors.find(element=>element==="เขียว")
const Indexsearch = colors.findIndex(element=>element==="เขียว")
console.log(search);
console.log(Indexsearch);

