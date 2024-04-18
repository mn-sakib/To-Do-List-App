let inputData = document.getElementById('form-input');
let taskList = document.getElementById('list-group');

function addTask(){
    if (inputData.value === ""){
        alert('You must write something!');
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputData.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }
    inputData.value = '';
    saveData();
}
taskList.addEventListener('click',function(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
}, false)
function saveData(){
    localStorage.setItem('a0ee31c442a98', taskList.innerHTML);
}
function getData(){
    taskList.innerHTML = localStorage.getItem('a0ee31c442a98');
}
getData();
window.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        addTask();
    }
})