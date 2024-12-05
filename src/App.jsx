import { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const clearInput = useRef();

  const addTodo = () => {
    setTodoList([
      ...todoList,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
    clearInput.current.value = "";
  };

  const deleteTodos =(Outdelete)=>{
    setTodoList(todoList.filter((arr)=>{
      return arr.id !== Outdelete
    }))  
  }

  const completedTodos =(Outcompleted)=>{
    setTodoList(todoList.map((arr)=>{
      return arr.id === Outcompleted ? {id: Outcompleted, text:arr.text, completed: !arr.completed} : {id:arr.id, text:arr.text, completed : arr.completed ? true :false }
    }))
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-400">
      <div className="bg-white shadow-lg rounded-3xl p-16">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          REACT TODO LIST ✅
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a todo..."
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none
          focus:ring-2 focus:ring-blue-400"
            ref={clearInput}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600"
            onClick={addTodo}
          >
            ADD
          </button>
        </div>
        {todoList.map((arr) => (
          <ul className="space-y-2">
            <li
              key={arr.id}
              className="flex justify-between p-3 rounded-lg   text-black"
            >
              <div className="flex items-center">
              <span className={`${arr.completed ? "line-through":""}`}>{arr.text}</span>
              </div>
             
              <div className="flex gap-1">
              <button className="bg-green-400 p-2 rounded-xl text-sm" onClick={()=>completedTodos(arr.id)}>complete</button>
              <button className="bg-red-400 p-2 rounded-xl text-sm" onClick={()=>deleteTodos(arr.id)}>Delete</button>
              </div>
            </li>
            
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
