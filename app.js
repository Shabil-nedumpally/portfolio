const form=document.querySelector("form");

const Name=document.getElementById("name")
const mail=document.getElementById("email")
const mob=document.getElementById("mob")
const subject=document.getElementById("subject")
const message=document.getElementById("message")



/*error print */
const NameError=document.getElementById("name-error")
const MailError=document.getElementById("mail-error")
const MobError=document.getElementById("mob-error")
const SubError=document.getElementById("subject-error")
const MessageError=document.getElementById("message-error")

// error classes
const Error=document.getElementsByClassName("error");

// error removing class
const Error_remove=document.getElementsByClassName("error-remove");

const sendMail=()=>{
    const bodyMessage=`full Name :- ${Name.value} <br> Email:- ${mail.value} <br> Phone Number :- ${mob.value} <br> 
    message:- <br>
    ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shabilnptvr@gmail.com",
        Password : "7C4EEF14BE68CD2F01FD282724C90EB10307",
        To : "shabilnptvr@gmail.com",
        From : "shabilnptvr@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      message => alert(message)
    );
    
}
const NameErrorfun=(e)=>{
    NameError.innerHTML=e;
        Error[0].style.display="block"
        Name.style.cssText="box-shadow:0 0 3px red;border-color:red;"
}

const MailErrorfun=(e)=>{
    MailError.innerHTML=e;
        Error[1].style.display="block"
}
const MobErrorfun=(e)=>{
    MobError.innerHTML=e;
        Error[2].style.display="block"
}
const SubjectErrorfun=(e)=>{
    SubError.innerHTML=e;
        Error[3].style.display="block"
}
const MessageErrorfun=(e)=>{
    MessageError.innerHTML=e;
        Error[4].style.display="block"
}




/*for removing error*/

form.addEventListener("input",()=>{
    Error.style.display="none";
    Error_remove.style.cssText="border-color:#39FF14;box-shadow:0 0 3px #39FF14;"
    
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // const regx=RegExp(/^a-z/,"@")
    if(Name.value==""){
      NameErrorfun("Pleae fill this field")  
    }else if(mail.value==""){
        MailErrorfun("Please fill this field");
    }
    else if(mob.value==""){
        MobError("Please fill this field")
         
    }else if(subject.value==""){
        SubjectErrorfun("Please fill this field");
    }else if(message.value==""){
        MessageErrorfun("Please fill this field")
    }
    else{
        // sendMail();
    }
    
})