document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var data = {
    todo: [],
    complete: []
  }

  document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
    if(value) {
      data.todo.push(value);
      addItemTodo(value);
      var value = document.getElementById('item').value = "";
    }
  });
  document.getElementById('item').addEventListener('keydown', function(e){
  var value = this.value
  if(e.keyCode === 13){
    data.todo.push(value);
    addItemTodo(value);
    var value = document.getElementById('item').value = "";
  }
  })

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if(id === 'todo'){
    data.todo.splice(data.todo.indexOf(value), 1);
  }else{
    data.complete.splice(data.complete.indexOf(value), 1);
  }
  
  parent.removeChild(item);
}
function completeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;
  if(id === 'todo'){
    data.todo.splice(data.todo.indexOf(value), 1);
    data.complete.push(value);
  }else{
    data.complete.splice(data.complete.indexOf(value), 1);
    data.todo.push(value);
  }
  

  var target = (id === 'todo') ? target = document.getElementById('completed') : target = document.getElementById('todo');
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text){
  var list = document.getElementById('todo');
  var divLI = document.createElement('div')
  var item = document.createElement('li');
  divLI.classList.add('divLI');
  item.classList.add('listLi');
  divLI.setAttribute('draggable', true);
  divLI.setAttribute('id', 'item')
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.classList.add('far');
  remove.classList.add('fa-trash-alt');
  remove.addEventListener('click', removeItem)

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.classList.add('far');
  complete.classList.add('fa-check-circle');

  complete.addEventListener('click', completeItem)
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  divLI.appendChild(item)

  list.insertBefore(item, list.childNodes[0]);

}


// Drag n Drop
const list_items = document.querySelectorAll('#item');
const lists = document.querySelectorAll('.Dr');


var draggedItem = null;

for(var i = 0; i < list_items.length; i++){
    const itemDR = list_items[i];

    itemDR.addEventListener('dragstart', function(){
      draggedItem = itemDR;
      setTimeout(function (){
        itemDR.style.display = 'none';
        }, 0);
    });
    itemDR.addEventListener('dragend', function(){
      setTimeout(function (){
        draggedItem.style.display = 'block';
        draggedItem = null;
      }, 0);
    });

    for(var j = 0; j < lists.length; j++){
      const list = lists[j];

      list.addEventListener('dragover', function (e) {
        e.preventDefault();
      })
      list.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.style.backgroundColor = '#7C7C7C';
      })
      list.addEventListener('drop', function () {
        this.append(draggedItem);
        this.style.backgroundColor = '#AEAEAE';
      })
    }
}


document.getElementById('todo-btn').addEventListener('click', function(){
  document.getElementById("todoBtn").classList.toggle('Active');
})
document.getElementById('complete-btn').addEventListener('click', function(){
  document.getElementById("completeBtn").classList.toggle('Active');
})

});
