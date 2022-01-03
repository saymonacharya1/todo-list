
const inputField = document.getElementById('inputField');
const button = document.getElementById('add');
const todoContainer = document.getElementById('todoContainer');


button.addEventListener('click', () =>{
if(inputField.value.length>0){
    const li = document.createElement('li');
    li.innerText = inputField.value;
    li.classList.add('list');
    todoContainer.appendChild(li);
    inputField.value = '';

    const del = document.createElement('button');
    del.innerHTML = '<i class="fas fa-trash"></i>';
    del.id = 'del';
    li.appendChild(del);

    li.addEventListener('click', () => {
        li.style.backgroundColor = 'mediumseagreen';
        li.style.color = 'white';
    })

    li.addEventListener('dblclick', () => {
        li.style='';
    })

    del.addEventListener('click', () => {
        todoContainer.removeChild(li);

    })
}
})

document.getElementById("form1").addEventListener("click", function(event){
    event.preventDefault()
  });

const dragArea = document.querySelector(".todos");
new Sortable(dragArea, {
    animation: 500,
    delay: 50 
});





