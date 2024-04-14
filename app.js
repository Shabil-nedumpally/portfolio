const form=document.querySelector("form");

const name=document.getElementById("name")
const mail=document.getElementById("email")
const mob=document.getElementById("mob")
const subject=document.getElementById("subject")
const message=document.getElementById("message")
const sendMail=()=>{
    const bodyMessage=`full Name :- ${name.value} <br> Email:- ${mail.value} <br> Phone Number :- ${mob.value} <br> 
    message:- <br>
    ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shabilnptvr@gmail.com",
        Password : "7C4EEF14BE68CD2F01FD282724C90EB10307",
        To : mail.value,
        From : "shabilnptvr@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      message => alert(message)
    );
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    sendMail();
})