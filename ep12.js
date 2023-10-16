// การ loop arr
// For Loop , ForEach , ForOF

const data = [10,20,30,40,50]

// for(let i=0; i<data.length;i++){
//     if(data[i] >= 30) break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
// }

//element / e== ***call back function  ดึงมาจากข้อมูลใน Array
// data.forEach(element => {
//     console.log(element)
// });


// ForEach ใช้ Break กับ continous ไม่ได้
// data.forEach(e => {
//     console.log(`สมาชิก Array Data = ${e}`)
// });


// let sum  = 0
// data.forEach(e=>{
//     sum+=e
//     console.log(`สมาชิก Array Data =${sum}`)
// });

/* ForOF */
for(const element of data){
    if(element>=30) break
    console.log(`สมาชิก Array Data = ${element}`)
}