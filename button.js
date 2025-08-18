function checkPassword(){
    let pass= document.getElementById("password").value
    let confirmPassword=document.getElementById("confirmPassword").value
    let message=document.getElementById("message");
    if(pass ==="" || confirmPassword ===""){
        message.style.color = "red";
        message.textContent="please fill our both fields";
        return false;
    }
    if(pass !==confirmPassword){
        message.style.color = "red";
        message.textContent="password do not match";
        return false;
    }
    message.style.color ="green";
    message.textContent="password match";
    return true;
}