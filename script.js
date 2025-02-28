let sortedTasks = [];

function addTask(){

    let tasksArr =[];
    tasksArr.task = document.getElementById('task').value;
    tasksArr.priority = document.getElementById('priority').value;
    
    sortedTasks.push(tasksArr);

    sortedTasks.sort(function(a, b){
        return a.priority - b.priority;
    });

    console.log(sortedTasks);

    document.getElementById('tasks').innerHTML = '';
    
    
    for(let i=0; i<sortedTasks.length; i++){
        
        let li = document.createElement("li");
       
        li.innerText = sortedTasks[i].task;
        document.getElementById('tasks').appendChild(li);
        
    } 

}