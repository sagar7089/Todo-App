import { FaCheck} from "react-icons/fa";
import { MdDeleteForever} from "react-icons/md";

export const List = ({todo,setTodo}) => {

  const handleCheckBtn = (value) => {
  const updatedTodo = todo.map((item) =>
    item.id === value.id ? { ...item, checked: !item.checked } : item
  );
  setTodo(updatedTodo);
};


    const handleDltBtn = (value)=>{
        const newTodo = todo.filter((currElem)=> currElem.id != value.id)
        setTodo(newTodo) 
  }
  return (
    <>
    <section className="myUnOrdList">
          <ul>
            {todo.map((currElem) => {
              return (
                <li key={currElem.id} className={`todo-item ${currElem.checked ? "checkList" : "notCheckList"}`}>
                  <span>{currElem.content}</span>
                  <button className="check-btn" onClick={()=>handleCheckBtn(currElem)}><FaCheck/></button>
                  <button className="delete-btn" onClick={() =>handleDltBtn(currElem)}><MdDeleteForever/></button>
                </li>
              );
            })}
          </ul>
        </section>
    </>
  )
}
