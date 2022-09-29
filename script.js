


function addTask(){
    let inputTask=document.getElementById("task").value;

    
    let values=JSON.parse(localStorage.getItem("values"));
    if(values===null){
        taskList=[];
    }else{
        taskList=values;
    }
    taskList.push(inputTask)
    localStorage.setItem("values",JSON.stringify(taskList))

    show()

}

function show(){
    let output="";
    let todoList=document.getElementById("root");

    let values=JSON.parse(localStorage.getItem("values"));
    if(values===null){
        taskList=[];
    }else{
        taskList=values;
    }

    taskList.map((data,index)=>{
        output +=`<div class="todoList">
        <p>${data}</p>
        </div>`

    });

    todoList.innerHTML=output;


}
