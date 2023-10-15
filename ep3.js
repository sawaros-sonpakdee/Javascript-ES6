//ทำงานกับ Object

//ตัวแปรเก็บข้อมูล
const customerName = "Sawaros"
const age = 25
const address = "กรุงเทพมหานคร"


//ถ้าชื่อตัวเเปร กับชื่แ property เหมือนกัน เขียนเเค่ตัวเดียวได้
const customer = {
    customerName,
    age,
    address,
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า = " + customerName)
    }

}

// console.log(customer)

customer.showData();