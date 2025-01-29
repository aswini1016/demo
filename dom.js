let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
console.log(gender);    

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";

    for(let i=0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
            gen = gender[i].value;

        }
    }
    let userDetails={
        username:un,
        password:up,
        gender:gen
    }
    console.log(userDetails);
    sessionStorage.setItem("userData" ,
        JSON.stringify(userDetails)
    )

    
})

let username = document.getElementById("uName");
let password = document.getElementById("upass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementByName("gender");

check.addEventListener("click",event=>{
    console.log(event.target.checked);
    
})