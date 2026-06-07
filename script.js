document.getElementById("myButton").addEventListener("click", function () {
  let task=document.getElementById("task-input").value ;
  document.getElementById("task-list").innerText = task;
localStorage.setItem("task", task);
});   