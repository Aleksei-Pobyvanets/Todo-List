document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");


  document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value) addItemTodo(value);
  });

  function addItemTodo(text){
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.classList.add('listLi');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.classList.add('for');
  remove.classList.add('fa-trash-alt');
  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.classList.add('for');
  complete.classList.add('fa-check-circle');

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.appendChild(item)
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