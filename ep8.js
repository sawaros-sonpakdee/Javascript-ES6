//Default parameter
getDataCustomer = (customerName = " ไม่ปรากฎชื่อ  " ,customerAddress = " - ") =>{
    // if(!customerAddress){
    //         customerAddress = " - "
    // }
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("สวรส","กรุงเทพ"));
console.log(getDataCustomer("พระพาย","เชียงราย"));
console.log(getDataCustomer("มิลามาริน"));
console.log(getDataCustomer());