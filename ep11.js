// splice & slice
// splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)
// slice(ตำแหน่งที่เริ่มต้น,ตำแหน่งสุดท้าย -1)


//ลำดับ arr 0 1 2 3 4 
const data =[10,20,30,40,50]

//ตัวเเรกนับแบบ arr เริ่มต้นที่ 0 
// console.log(data)
// data.splice(1,2,999)
console.log(data)


//slice ต้องสร้างตัวเเปรใหม่มารองรับ เพราะข้อมูลจะไม่มีผลต่อ arr เดิม
const lastdata = data.slice(1,3)// 1,2 [20,30]

console.log(lastdata)


