document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // function completBtn(){
  //   var span2 = document.createElement('BUTTON');
  //   var text2 = document.createTextNode('V');
  //   span2.className = 'close1';
  //   span2.appendChild(text2);
  //   li.appendChild(span2)
  //   // var btnCompl = document.getElementsByClassName('close1');
  // }
  
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('clecked');
  } else if(ev.target.tagName === 'BUTTON'){
    var div = ev.target.parentNode;
    div.remove();
  }
}, false);

  // 
  // Li ul данные.
  // 

function newElement(){
  var li = document.createElement('li');
  li.classList.toggle('border')
  var inputValue = document.getElementById('textArea__searsch').value;
  var newEl = document.createTextNode(inputValue);
  li.appendChild(newEl);
    if(inputValue == ""){
        alert("Введите текст")
    } else {
        document.getElementById('list').appendChild(li);
    } 
  document.getElementById('textArea__searsch').value = "";
  function completBtn(){
    var span2 = document.createElement('BUTTON');
    var text2 = document.createTextNode('V');
    span2.className = 'close1';
    span2.appendChild(text2);
    li.appendChild(span2)
    // var btnCompl = document.getElementsByClassName('close1');
  }
  function deleteEl(){
    var span = document.createElement('BUTTON');
    var text = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
    }
  deleteEl();
  completBtn()
}

  var delEl = document.getElementById('list');
  delEl.addEventListener('click', function dele1(e){
    e.preventDefault();
    deleteEl();
    return true
  })

  var cta = document.getElementById('cta');
  cta.addEventListener('click', function(e){
    e.preventDefault();
    newElement();
  })

  // 
  // Кнопки истории и ТД.
  // 
  function allOpenButton() {
    document.getElementById("allOp").classList.toggle('active');
  }
  function todoOpenButton() {
    document.getElementById("todoOp").classList.toggle('active');
  }
  function completedOpenButton() {
    document.getElementById("compOp").classList.toggle('active');
  }

  var allOpenButton1 = document.getElementById('allOpenBtn');
  allOpenButton1.addEventListener('click', function(e){
    e.preventDefault();
    allOpenButton();
  })
  var todoOpenButton1 = document.getElementById('todoOpenBtn');
  todoOpenButton1.addEventListener('click',function(e){
    e.preventDefault();
    todoOpenButton();
  })
  var completedOpenButton1 = document.getElementById('completedOpenBtn');
  completedOpenButton1.addEventListener('click',function(e){
    e.preventDefault();
    completedOpenButton();
  })

  //
  // History.
  //
  

});
