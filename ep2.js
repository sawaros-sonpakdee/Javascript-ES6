//Arrow function

//แบบเดิม
function fullname(fname,lname){
    return fname+lname
}
function setAgeold(old){
    return "อายุแบบเก่า "+ old
}
console.log(fullname("kong","ruksiam"));
console.log(setAgeold(40))

//แบบใหม่ ลดรูป
fullnamenew=(fname,lname)=>" "+fname+" "+lname
setAge=(age)=> "อายุ = "+age

console.log("การเขียน Function ลดรูป แบบใหม่"+fullnamenew("Lin","Sawaros"));
console.log(setAge(25))

