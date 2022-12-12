document.querySelector('.todo-btn').onclick = function(){
  if(document.querySelector('.todo-text').value.length == 0){
      alert('Please enter new text!');
  }

  else{


const todoText = document.getElementsByClassName("todo-text")[0];
const todoBtn = document.getElementsByClassName("todo-btn")[0];
const inputTask = document.getElementsByClassName("input-task")[0];
const allClean = document.getElementsByClassName("container")[0];



const addTask = (task) => {
        const listItem = document.createElement("div");
        listItem.className = "div";
        const showItem = inputTask.appendChild(listItem);
        const taskElem = document.createElement("span");
        taskElem.className = 'newDiv_name';

        taskElem.innerHTML = task;
        listItem.appendChild(taskElem);
        listItem.classList.add("list-item");

        //create a delete button
        const deleteBtn = document.createElement("span");
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
        listItem.appendChild(deleteBtn);

        const del = document.querySelectorAll(".deleteBtn");
        for(let i=0; i<del.length; i++){
            del[i].onclick = function(){
            this.parentNode.remove();
            console.log("salom");
         };
        };


    

        //create an edit button
        const editBtn = document.createElement("span");
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        //   add a class to identify
        editBtn.classList.add("edit");
        listItem.appendChild(editBtn);
};


inputTask.addEventListener("click", function(e) {
  const target = e.target.classList.contains("edit"),
    update = e.target.classList.contains("update");
  if (target) {
    let val = e.target.parentElement.firstChild.innerHTML;
    // alert(val);
    e.target.parentElement.innerHTML = `
       <input type="text" name="todo" class="todo-text" value="${val}">
       <input type="submit" value="save" class="todo-btn update">
       `;
  }
  if (update) {
    let updatedValue = e.target.previousElementSibling.value;
    e.target.parentElement.innerHTML = `
    <div class="list-item"><span class="todo-text">${updatedValue}</span><span class="deleteBtn"><i class="far fa-trash-alt"></i></span><span class="edit"><i class="fa-solid fa-pen-to-square"></i></span></div>
    `;
    const del = document.querySelectorAll(".deleteBtn");
    for(let i=0; i<del.length; i++){
      del[i].onclick = function(){
        this.parentNode.remove();
        console.log("salom");
      };
    };
  }
});

let Complete_cleaning = document.querySelectorAll(".all__clean");
        
        for(let i=0; i<Complete_cleaning.length; i++){
            Complete_cleaning[i].onclick = function(){
                let myBottom = document.querySelector(".input-task");
                myBottom.innerHTML = "";
                return;
            }
};


todoBtn.addEventListener("click", () => {
  const task = todoText.value;
  if (task == "") {
    return;
   
  }
  addTask(task);
  todoText.value = "";
});

let clear = document.querySelector(".clear");
let input = document.getElementsByClassName('input');
clear.addEventListener("click", () => {
    todoText.value = "";
    console.log("salom");

});
  }};
