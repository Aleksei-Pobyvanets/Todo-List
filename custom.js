document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  var data = {
    todo: [],
    complete: []
  }

  function chekInp() {
    var value = document.getElementById('item').value;
    if (value === '') {
      return false
    }
    if (value) {
      data.todo.push(value);
      addItemTodo(value);
      var value = document.getElementById('item').value = "";
    }
  }
  document.getElementById('add').addEventListener('click', function () {
    chekInp();
  });
  document.getElementById('item').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      chekInp();
    }
  })

  function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (id === 'todo') {
      data.todo.splice(data.todo.indexOf(value), 1);
    } else {
      data.complete.splice(data.complete.indexOf(value), 1);
    }

    parent.removeChild(item);
  }

  function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;
    if (id === 'todo') {
      data.todo.splice(data.todo.indexOf(value), 1);
      data.complete.push(value);
    } else {
      data.complete.splice(data.complete.indexOf(value), 1);
      data.todo.push(value);
    }


    var target = (id === 'todo') ? target = document.getElementById('completed') : target = document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
  }

  function buttons(todoItem) {
    function remove() {
      var remove = document.createElement('button');
      remove.classList.add('remove');
      remove.classList.add('far');
      remove.classList.add('fa-trash-alt');
      remove.addEventListener('click', removeItem)
      return remove
    }

    function complete() {
      var complete = document.createElement('button');
      complete.classList.add('complete');
      complete.classList.add('far');
      complete.classList.add('fa-check-circle');
      complete.addEventListener('click', completeItem);
      return complete
    }
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    var complete = complete();
    var remove = remove();
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    todoItem.appendChild(buttons);
  }

  function createTodoEl(text) {
    var item = document.createElement('li');
    item.classList.add('listLi');
    item.classList.add('draggable')
    item.setAttribute('draggable', true);
    item.innerText = text;
    addEventsDragAndDrop(item);
    return item;
  }

  function addItemTodo(text) {
    console.log(text)
    var parent = document.getElementById('todo');

    var todoItem = createTodoEl(text);
    buttons(todoItem);

    todo.appendChild(todoItem);
    parent.insertBefore(todoItem, parent.childNodes[0]);
  }


  //Drag n Drop
  function dragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };

  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function dragEnd(e) {
    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function (item) {
      item.classList.remove('over');
    });
  }

  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('drop', dragDrop, false);
  }
  var listItens = document.querySelectorAll('li');
  console.log(listItens);
  [].forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
  });




  document.getElementById('todo-btn').addEventListener('click', function () {
    document.getElementById("todoBtn").classList.toggle('Active');
  })
  document.getElementById('complete-btn').addEventListener('click', function () {
    document.getElementById("completeBtn").classList.toggle('Active');
  })

});