//VARIABLES for login
var signInBtn = document.querySelector("#sign-in-btn");
var signUpBtn = document.querySelector("#sign-up-btn");

var email = document.getElementById("email-inp"); //""
var password = document.getElementById("password-inp"); //""

var displayProductData = document.getElementById("product-data-container");
var allUsers;//undefined


//CONDITIONS
if(localStorage.getItem("users")){
    allUsers = JSON.parse(localStorage.getItem("users"));//array of object
    console.log(allUsers)
}else{
    allUsers = [];//empty array
}

//WATCHERS
signInBtn.addEventListener("click" , login);
signUpBtn.addEventListener("click" , signUpPage);

//signup function
function signUpPage(){
    location.href = `../signup.html`
}

//login function
var x = false
function login(){
    for(var i=0 ; i<allUsers.length ; i++){
        if(email.value == allUsers[i].userEmail && password.value == allUsers[i].userPassword){
            localStorage.setItem("email", allUsers[i].userEmail)
            location.href = `../todo.html`
            x = true;
            var usedName = allUsers[i].userName
        }
    }
    if(x == false){
        alert("wrong email or password")
    }
}


