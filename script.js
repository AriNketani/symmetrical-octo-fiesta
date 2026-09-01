// Get references to the input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }           
    else{
        let li = document.createElement("li");
        
        // Wrap text in a span or text node so styling doesn't break
        let textNode = document.createElement("p");
        textNode.innerHTML = inputBox.value;
        li.appendChild(textNode);
        
        // Add Edit Button (✎)
        let editBtn = document.createElement("em");
        editBtn.innerHTML = "\u270e";
        li.appendChild(editBtn);

        // Add Delete Button (×)
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";
        li.appendChild(deleteBtn);
        
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}     

listContainer.addEventListener("click", function(e){
    // Toggle check mark when clicking the paragraph or list item
    if(e.target.tagName === "LI" || e.target.tagName === "P"){
        let li = e.target.tagName === "P" ? e.target.parentElement : e.target;
        li.classList.toggle("checked");
        saveData();
    }
    // Delete item feature
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    // New Edit feature
    else if(e.target.tagName === "EM"){
        let li = e.target.parentElement;
        let p = li.querySelector("p");
        
        // Prompt user to update text
        let currentText = p.innerHTML;
        let newText = prompt("Edit your task:", currentText);
        
        if(newText !== null && newText.trim() !== "") {
            p.innerHTML = newText.trim();
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//function to logout
function logout() {
    localStorage.removeItem('LoggedIn');
    window.location.href = 'login.html';
}
