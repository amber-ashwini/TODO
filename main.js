const tasksCounter = document.getElementById('tasks-counter');

// Create a "deleteList" button and append it to each list item
var deletebtn = document.getElementsByTagName("LI");
var i;
for (i = 0; i < deletebtn.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteList";
  span.appendChild(txt);
  deletebtn[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInputList").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Milestone can not be empty!");
  } else {
    document.getElementById("userList").appendChild(li);
    alert("New Milestone has been added");
  }
  document.getElementById("userInputList").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteList";
  span.appendChild(txt);
  li.appendChild(span);
  
  

  for (i = 0; i < deleteList.length; i++) {
    deleteList[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      alert("One milestone has been removed!!!");
    }
  }
}

// Click on a deleteList button to hide the current list item
var deleteList = document.getElementsByClassName("deleteList");
var i;
for (i = 0; i < deleteList.length; i++) {
    deleteList[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    alert("Bravo You're one step closer to your goal!!!");
  }
}, false);
