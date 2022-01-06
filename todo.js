const inputField = document.getElementById("inputField");
const button = document.getElementById("add");
const todoContainer = document.getElementById("todoContainer");

document.addEventListener("DOMContentLoaded", getTodos);

//functionality of add button
button.addEventListener("click", () => {
  if (inputField.value.length > 0) {
    todoLocalStorage(inputField.value);

    const li = document.createElement("li");
    li.innerText = inputField.value;
    li.classList.add("list");
    todoContainer.prepend(li);
    inputField.value = "";

    const del = document.createElement("button");
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.id = "del";
    li.appendChild(del);

    li.addEventListener("click", () => {
      li.style.backgroundColor = "mediumseagreen";
      li.style.color = "white";
    });

    li.addEventListener("dblclick", () => {
      li.style = "";
    });

    del.addEventListener("click", () => {
      deleteLocalStorage(del);
      todoContainer.removeChild(li);
    });
  }
});
//

//preventing form action
document.getElementById("form1").addEventListener("click", function (event) {
  event.preventDefault();
});

//to drag list items
const dragArea = document.querySelector(".todos");
new Sortable(dragArea, {
  animation: 500,
  delay: 50,
});
//

//for local storage
//saving items to local storage
function todoLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
   
  }

  todos.unshift(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
//

//retrieving items from local storage to the site
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }


  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerText = todo;
    li.classList.add("list");
    todoContainer.appendChild(li);
    inputField.value = "";

    const del = document.createElement("button");
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.id = "del";
    li.appendChild(del);

    li.addEventListener("click", () => {
      li.style.backgroundColor = "mediumseagreen";
      li.style.color = "white";
    });

    li.addEventListener("dblclick", () => {
      li.style = "";
    });

    del.addEventListener("click", () => {
        deleteLocalStorage(del);
      todoContainer.removeChild(li);
    });
  });
}
//deleting the items from local storage

function deleteLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  console.log(todo)
  console.log(todo.children[0])
  const todoElement = todo.parentElement.innerText;
  console.log(todoElement)
  
  todos.splice(todos.indexOf(todoElement), 1);
  // console..log(todos)
  localStorage.setItem("todos", JSON.stringify(todos));
}

