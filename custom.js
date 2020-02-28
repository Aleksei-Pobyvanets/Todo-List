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
    }
  });

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

  var item = document.createElement('li');
  item.classList.add('listLi');
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
  list.appendChild(item)

  list.insertBefore(item, list.childNodes[0]);

  var value = document.getElementById('item').value = "";
  value;
}
});



// function newElement(){
//   var li = document.createElement('li');
//   li.classList.toggle('border')
//   var inputValue = document.getElementById('textArea__searsch').value;
//   var newEl = document.createTextNode(inputValue);
//   li.appendChild(newEl);
//     if(inputValue == ""){
//         alert("Введите текст")
//     } else {
//         document.getElementById('list').appendChild(li);
//     } 
//   document.getElementById('textArea__searsch').value = "";
//   // Кнопка Complete
//   function completBtn(){
//     var span2 = document.createElement('BUTTON');
//     var text2 = document.createTextNode('V');
//     span2.className = 'close1';
//     span2.appendChild(text2);
//     li.appendChild(span2)    
//   }
//   // Кнопка Delete
//   function deleteEl(){
//     var span = document.createElement('BUTTON');
//     var text = document.createTextNode('X');
//     span.className = 'close';
//     span.appendChild(text);
//     li.appendChild(span);
//     }

//   // При клике перекидывает значение в "Complete"
//   var list1 = document.querySelector('ul');
//   list1.addEventListener('click', function Compl(ev){
//     var btnCompl = document.getElementsByClassName('close1');
//   if(ev.target = btnCompl){
//     document.getElementById('list2').appendChild(li);
//   } else if(ev.target.className === 'close'){
//     var div = ev.target.parentNode;
//     div.remove();
//   }else if(ev.target.tagName === 'LI'){
//     var div = ev.target.parentNode;
//     div.remove();
//   }
// }, false);

// completBtn();
// deleteEl();
// Compl();
// }

  
//   var delEl = document.getElementById('list');
//   delEl.addEventListener('click', function dele1(e){
//     e.preventDefault();
//     deleteEl();
//   })

//   var cta = document.getElementById('cta');
//   cta.addEventListener('click', function(e){
//     e.preventDefault();
//     newElement();
//   })

//   // 
//   // Кнопки истории и ТД.
//   // 
//   function allOpenButton() {
//     document.getElementById("allOp").classList.toggle('active');
//   }
//   function todoOpenButton() {
//     document.getElementById("todoOp").classList.toggle('active');
//   }
//   function completedOpenButton() {
//     document.getElementById("compOp").classList.toggle('active');
//   }

//   var allOpenButton1 = document.getElementById('allOpenBtn');
//   allOpenButton1.addEventListener('click', function(e){
//     e.preventDefault();
//     allOpenButton();
//   })
//   var todoOpenButton1 = document.getElementById('todoOpenBtn');
//   todoOpenButton1.addEventListener('click',function(e){
//     e.preventDefault();
//     todoOpenButton();
//   })
//   var completedOpenButton1 = document.getElementById('completedOpenBtn');
//   completedOpenButton1.addEventListener('click',function(e){
//     e.preventDefault();
//     completedOpenButton();
//   })

//   //
//   // History.
//   //