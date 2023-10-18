//variable
var inputBox = document.getElementById("input-box")
var listContainer = document.getElementById("list-container")
var userLogin = localStorage.getItem("email")

//CONDITIONS
if(localStorage.getItem("users")){
    allUsers = JSON.parse(localStorage.getItem("users"));//array of object
    console.log(allUsers)
}else{
    allUsers = [];//empty array
}


userToDo = [];

//functions
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something");
    }else{
        //creating list items
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //creating span to delete task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//\u00d7 used to add x or delete at end of item
        li.appendChild(span);
        userToDo.push(listContainer)
    }
    inputBox.value = "";
    saveData();
}

//watchers
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);




function saveData(){
    // localStorage.setItem("data", listContainer.innerHTML);
    //to save in array for specific user
    for(var i=0 ; i<allUsers.length ; i++){
        if(localStorage.getItem("email") == allUsers[i].userEmail){
            allUsers[i].toDoList.push(userToDo);
            localStorage.setItem("users", JSON.stringify(allUsers))
}}
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()


// notes = []
// note = {
//     title : vaue , 
// }
// notes.push(note)