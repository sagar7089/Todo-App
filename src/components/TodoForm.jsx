import "./ToDoApp.css"
import { useState } from "react";

export const TodoForm = ({todo,setTodo}) => {
    const [inputValue, setInputValue] = useState({
        id : "",
        content : "",
        checked : false
    });


     const handleInputChange = (value) => {
     setInputValue({id : value,content : value,checked : false});
     }


     const handleFormSubmit = (e) => {
     e.preventDefault();
        if (!inputValue.content) return;
     
        //  if(todo.includes(inputValue.content)) return;
        const ifTodoContentMatched = todo.find((curTask) =>curTask.content === inputValue.content);
        if(ifTodoContentMatched) return
     
         setTodo([...todo, inputValue]);
         setInputValue({id: "", content: "", checked: false });
       };


  return (
    <>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>
    </>
  );
};
