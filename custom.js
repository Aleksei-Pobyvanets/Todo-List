document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var list = document.querySelector('ul');
list.addEventListener('click', function (ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('clecked');
  } else if(ev.target.tagName === 'BUTTON'){
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
    if(inputValue == ""){
        alert("Введите текст")
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('textArea__searsch').value = "";

    var span = document.createElement('BUTTON');
    var text = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
}

var cta = document.getElementById('cta');
cta.addEventListener('click', function(e){
  e.preventDefault();
  newElement();
})

});