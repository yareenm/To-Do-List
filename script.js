let addButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let clearButton = document.getElementById('clearToDo');
let inputText = document.getElementById('inputText');

addButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
    clearButton.addEventListener('click',function(){
        paragraph.remove();
    
    })
});



