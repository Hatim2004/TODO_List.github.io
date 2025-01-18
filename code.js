document.addEventListener("DOMContentLoaded", function () {
    var list = document.getElementById('TODO');
    function addTask() {
        var task = document.getElementById('task').value;
        var div = document.createElement('div');
        var list_text = document.createElement('li');
        var DE_button = document.createElement('button');
        var checkbox = document.createElement("input");


        checkbox.type = "checkbox";
        checkbox.className = "checkbox";



        DE_button.textContent = '';
        DE_button.id = 'X';
        DE_button.className = "fa fa-close";
        DE_button.addEventListener('click', function () {
            list.removeChild(div);
        });
       
        div.className = "task_par";

   
       
        list_text.appendChild(document.createTextNode(task));
        list.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(list_text);
        div.appendChild(DE_button);
        task = document.getElementById('task').value = '';

    }

    document.getElementById('add                ').onclick = addTask;
});




