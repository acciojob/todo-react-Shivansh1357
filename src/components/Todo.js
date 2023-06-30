import React ,{useState} from "react"
 
const Todo=()=>{
    let [todo,setTodo]=useState("");
    let [todoList,setTodoList]=useState([]);
    function addTodo(){
        setTodoList(setTodo);
        setTodo("")
    }
    function removeTodo(index){
        let updatedTodo=[];
todoList.map((e,i)=>{
    if(i!=index){
        updatedTodo.push(e);
    }
});
setTodoList(updatedTodo)
    }
    return (
<div>
        <p>To-Do List</p>
        <div>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={()=>addTodo}>Add Todo</button>
        </div>
        <ul>
        {
            todoList.map((e,i)=><li>
                <span>{e}</span><button onClick={()=>removeTodo(i)}>Delete</button>
            </li>)
        }
        </ul>
</div>
    )
}

export default Todo