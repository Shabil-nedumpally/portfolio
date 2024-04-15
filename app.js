const form = document.querySelector("form");

const Name = document.getElementById("name")
const mail = document.getElementById("email")
const mob = document.getElementById("mob")
const subject = document.getElementById("subject")
const message = document.getElementById("message")



/*error print */
const NameError = document.getElementById("name-error")
const MailError = document.getElementById("mail-error")
const MobError = document.getElementById("mob-error")
const SubError = document.getElementById("subject-error")
const MessageError = document.getElementById("message-error")

// error classes
const Error = document.getElementsByClassName("error");

// submission error
const submiterror=document.getElementById("submit-error")

// robot change 
const robot = document.getElementsByClassName("bird");

const sendMail = () => {
    const bodyMessage = `full Name :- ${Name.value} <br> Email:- ${mail.value} <br> Phone Number :- ${mob.value} <br> 
    message:- <br>
    ${message.value}`
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shabilnptvr@gmail.com",
        Password: "7C4EEF14BE68CD2F01FD282724C90EB10307",
        To: "shabilnptvr@gmail.com",
        From: "shabilnptvr@gmail.com",
        Subject: subject.value,
        Body: bodyMessage,
    }).then(
        message => submiterror.innerHTML=message
        ,
        setTimeout(robot[0].style.cssText=`background-image:url("./assets/bubl-robot.gif")`,5000)
        
        
    );

}
const NameErrorfun = (e) => {
    NameError.innerHTML = e;
    Error[0].style.display = "block"
    Name.style.cssText = "box-shadow:0 0 3px red;border-color:red;"
}

const MailErrorfun = (e) => {
    MailError.innerHTML = e;
    Error[1].style.display = "block"
    mail.style.cssText = "box-shadow:0 0 3px red;border-color:red;"
}
const MobErrorfun = (e) => {
    MobError.innerHTML = e;
    Error[2].style.display = "block"
    mob.style.cssText = "box-shadow:0 0 3px red;border-color:red;"
}
const SubjectErrorfun = (e) => {
    SubError.innerHTML = e;
    Error[3].style.display = "block";
    subject.style.cssText = "box-shadow:0 0 3px red;border-color:red;"
}
const MessageErrorfun = (e) => {
    MessageError.innerHTML = e;
    Error[4].style.display = "block";
    message.style.cssText = "box-shadow:0 0 3px red;border-color:red;"
}




/*for removing error*/

Name.addEventListener("input", () => {
    NameError.style.display = "none";
    Name.style.cssText = "border-color:#39FF14;box-shadow:0 0 3px #39FF14;"

});
mail.addEventListener("input", () => {
    MailError.style.display = "none";
    mail.style.cssText = "border-color:#39FF14;box-shadow:0 0 3px #39FF14;"

});
mob.addEventListener("input", () => {
    MobError.style.display = "none";
    mob.style.cssText = "border-color:#39FF14;box-shadow:0 0 3px #39FF14;"

});
subject.addEventListener("input", () => {
    SubError.style.display = "none";
    subject.style.cssText = "border-color:#39FF14;box-shadow:0 0 3px #39FF14;"

});




form.addEventListener("submit", (e) => {
    e.preventDefault()
    // const regx=RegExp(/^a-z/,"@")
    if (Name.value == "") {
        NameErrorfun("Pleae fill this field")
    } else if (mail.value == "") {
        MailErrorfun("Please fill this field");
    }
    else if (mob.value == "") {
        MobErrorfun("Please fill this field");
        console.log("I am mobile");

    } else if (subject.value == "") {
        SubjectErrorfun("Please fill this field");
    } else if (message.value == "") {
        MessageErrorfun("Please fill this field")
    }
    else {
        robot[0].style.cssText=`background-image:url("./assets/bubl-robot-clapping.gif")`
        sendMail();
    }

})