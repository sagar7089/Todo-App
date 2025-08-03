import { useEffect, useState } from "react";
import "./ToDoApp.css";
import { TodoForm } from "./TodoForm";
import { DateandTime } from "./DateandTime";
import { List } from "./List";




export const ToDoApp = () => {

  const todoKeys = "reactTodo"
  const getLocalData = () =>{
    const rawTodos = localStorage.getItem(todoKeys)
    if (!rawTodos) return [];
    return JSON.parse(rawTodos)
  }
  
  const [todo, setTodo] = useState(()=>getLocalData());


  const handleClearBtn =()=>{
    setTodo([])
  }


  //add data to local storage
  localStorage.setItem(todoKeys, JSON.stringify(todo))

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <DateandTime/>
        <TodoForm todo={todo} setTodo={setTodo}/>
        <List todo={todo} setTodo={setTodo} />
        <section>
          <button className="clear-btn" onClick={handleClearBtn}>Clear all</button>
        </section>
      </section>
    </>
  );
}