document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  var data = {
    todo: [],
    complete: [],
  }
  
  function setCookies(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log('cookie', cname, cvalue, exdays)
  }
  

  function chekInp() {
    var value = document.getElementById('item').value;
    if (value === '') {
      return false
    }
    if (value) {
      data.todo.push(value);
      console.log(data)
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
    setCookies('todo', JSON.stringify(data),1);
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
    // addEventsDragAndDrop(item);
    return item;
  }

  function addItemTodo(text) {
    console.log(text)
    var parent = document.getElementById('todo');

    var todoItem = createTodoEl(text);
    buttons(todoItem);

    todo.appendChild(todoItem);
    parent.insertBefore(todoItem, parent.childNodes[0]);
    DragNDrop()
  }


  //Drag n Drop

  function DragNDrop(){
    initDragAndDrop();

  function initDragAndDrop() {
      let draggables = document.querySelectorAll(".draggable");
      var dropZones = document.querySelectorAll(".Dr");
      initDraggables(draggables);
      initDropZones(dropZones);
  }
  
  function initDraggables(draggables) {
      for (const draggable of draggables) {
          initDraggable(draggable);
      }
  }
  
  function initDropZones(dropZones) {
      for (let dropZone of dropZones) {
          initDropZone(dropZone);
      }
  }
  
  function initDraggable(draggable) {
      draggable.addEventListener("dragstart", dragStartHandler);
      draggable.addEventListener("drag", dragHandler);
      draggable.addEventListener("dragend", dragEndHandler);
      draggable.setAttribute("draggable", "true");
  }
  
  function initDropZone(dropZone) {
      dropZone.addEventListener("dragenter", dropZoneEnterHandler);
      dropZone.addEventListener("dragover", dropZoneOverHandler);
      dropZone.addEventListener("dragleave", dropZoneLeaveHandler);
      dropZone.addEventListener("drop", dropZoneDropHandler);
  }
  
  function dragStartHandler(e) {
      setDropZonesHighlight();
      this.classList.add('dragged', 'drag-feedback');
      e.dataTransfer.setData("type/dragged-box", 'dragged');
      e.dataTransfer.setData("text/plain", this.textContent.trim());
  }
  
  function dragHandler() {
  }
  
  function dragEndHandler() {
      setDropZonesHighlight(false);
      this.classList.remove('dragged');
  }
  
  function dropZoneEnterHandler(e) {
      if (e.dataTransfer.types.includes('type/dragged-box')) {
          this.classList.add("over-zone");
          e.preventDefault();
      }
  }
  
  function dropZoneOverHandler(e) {
      if (e.dataTransfer.types.includes('type/dragged-box')) {
          e.preventDefault();
      }
  }
  
  
  function dropZoneLeaveHandler(e) {
      if (e.dataTransfer.types.includes('type/dragged-box') &&
          e.relatedTarget !== null &&
          e.currentTarget !== e.relatedTarget.closest('.drop-zone')) {
          this.classList.remove("over-zone");
      }
  }
  
  
  function dropZoneDropHandler(e) {
      let draggedElement = document.querySelector('.dragged');
      e.currentTarget.appendChild(draggedElement);
      e.preventDefault();
  
  }
  
  
  
  function setDropZonesHighlight(highlight = true) {
      const dropZones = document.querySelectorAll(".drop-zone");
      for (const dropZone of dropZones) {
          if (highlight) {
              dropZone.classList.add("active-zone");
          } else {
              dropZone.classList.remove("active-zone");
              dropZone.classList.remove("over-zone");
          }
      }
  }
  }

  document.getElementById('todo-btn').addEventListener('click', function () {
    document.getElementById("todoBtn").classList.toggle('Active');
  })
  document.getElementById('complete-btn').addEventListener('click', function () {
    document.getElementById("completeBtn").classList.toggle('Active');
  })

});
