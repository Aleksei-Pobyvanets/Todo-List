function historyOpenButton() {
    document.getElementById("historyBTN").classList.toggle('active');
  }

  function activateOpenButton() {
    document.getElementById("activateBTN").classList.toggle('active');
  }
  
  function deletedOpenButton() {
    document.getElementById("deletedBTN").classList.toggle('active');
  }

// <div class="history__container" id="historyBTN">
//     <input type="text" class="history__container inp">
//     <button class="act__btn ggBTN" id="act__btn">Activate</button>
//     <button class="delet__btn ggBTN" id="delet__btn">Delete</button>
// </div>
// <div class="activate__container" id="activateBTN">
//     <input type="text" class="active__container inp">
//     <button class="act__btn ggBTN" id="act__btn">Activate</button>
//     <button class="delet__btn ggBTN" id="delet__btn">Delete</button>  
// </div>
// <div class="deleted__container" id="deletedBTN">
//     <input type="text" class="deleted__container inp">
//     <button class="act__btn ggBTN" id="act__btn">Activate</button>
//     <button class="delet__btn ggBTN" id="delet__btn">Delete</button>   
// </div>

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('clecked');
  } else if(ev.target.tagName === 'SPAN'){
    var div = ev.target.parentNode;
    div.remove();
  }
}, false);

function newElement(){
  var li = document.createElement('li');
  li.classList.toggle('border')
  var inputValue = document.getElementById('textArea__searsch').value;
  var newEl = document.createTextNode(inputValue);
  li.appendChild(newEl);
    if(inputValue === ""){
        alert("Введите текст")
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('textArea__searsch').value = "";
    var span = document.createElement('SPAN');
    var text = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
}