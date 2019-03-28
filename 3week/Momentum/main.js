console.log(new Date(Date.now()).getHours());
console.log(new Date().getMinutes);

document.getElementById("time").innerHTML = 
new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes();

var x = setInterval(function(){

    var m = (new Date(Date.now()).getMinutes() < 10)?"0":"";
    document.getElementById("time").innerHTML = 
    new Date(Date.now()).getHours() + ":" + m +new Date(Date.now()).getMinutes();
}, 1000)


var tasks = document.getElementById("tasks"); 
var task = document.getElementById("tk0");

function del(id){
    var child = id.parentNode.parentNode;
    child.parentNode.removeChild(child);
    console.log(child);
}


function add(){
    var taskName = document.getElementById("inp").value||document.getElementById("inp").placeholder;
    var newTask = task.cloneNode(true);
    newTask.style.display = "inline";
    newTask.getElementsByTagName("span")[0].innerHTML = taskName; 
    console.log(newTask);
    // newTask.firstChild.childNodes[1].innerHTML = document.getElementById("inp").value;
    tasks.insertBefore(newTask, tasks.firstChild);
    document.getElementById("inp").value = "";
   // document.getElementsByClassName("cont-tasks").appendChild()
}
