
 contactValidation=()=>{
    var Fullname=document.myform1.Fullname.value;
    var phonenumber  = document.myform1.Phnum.value;
    var email = document.myform1.Email.value;
    if(Fullname == null || Fullname ==""){
        alert("name cant be blank");
        return false;
    }else if(phonenumber >10){
        alert("Password must be 10 character long");
        return false;
    }
    else if(email == null || email ==""){
        alert("name cant be blank");
        return false;
}
}
