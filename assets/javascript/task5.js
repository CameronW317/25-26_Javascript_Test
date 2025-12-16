/* Put code for the task below */
function checkName(){
    let name = document.getElementById("fullName")
    if(name.value === ""){
        name.style.backgroundColor = "red"
    }else {
        name.style.backgroundColor = "white"
    }

}
function checkAddress(){
    let address = document.getElementById("address")
    if(address.value === ""){
        address.style.backgroundColor = "red"
    }else {
        address.style.backgroundColor = "white"
    }

}
function checkPhone(){
    let phone = document.getElementById("phone")
    if(phone.value === ""){
        phone.style.backgroundColor = "red"
    }else {
        phone.style.backgroundColor = "white"
    }

}
function checkEmail(){
    let email = document.getElementById("email")
    if(email.value === ""){
        email.style.backgroundColor = "red"
    }else {
        email.style.backgroundColor = "white"
    }

}