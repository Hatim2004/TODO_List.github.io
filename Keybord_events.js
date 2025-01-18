var input = document.getElementById("task");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter" &&  document.getElementById("task").value !='') {
    document.getElementById("add").click();
  }
}); 