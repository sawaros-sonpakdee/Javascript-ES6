// Array Filter
// ต้องมีเงื่อนไขในการคัดกรอง 
const data = [10,20,30,40]

// const result = data.filter(e=>{
//     return e>20
// })

const result = data.filter(e=>e>20)
console.log(result)

const employee_arr = [
    {name:"นุนิว",salary:25000,department:"โปรแกรมเมอร์"},
    {name:"จอย",salary:24000,department:"การตลาด"},
    {name:"ดิว",salary:22000,department:"ฝึกงาน"},
    {name:"เป้าเป้ย",salary:20000,department:"การตลาด"},
    {name:"ปริม",salary:18000,department:"ฝึกงาน"},
]
const result_emp = employee_arr.filter(e=>e.salary>=22000).filter(e=>e.department === "โปรแกรมเมอร์")
console.log(result_emp)