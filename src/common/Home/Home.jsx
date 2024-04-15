import React, { useState } from 'react'
import './Home.css'


const Home = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo, e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: Math.random(),
      todo: input.trim(),
    }
    
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo => todo.id !==id));
    setList(newList);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  };

  return (
    <div>
      <form onSubmit={(e) => addTodo(input, e)}>
        <input type='text' 
        value={input}
        onChange={handleInputChange}
        placeholder='add a new to-do' 
        maxLength={50}/>
        <button type="submit">add to-do</button>
      </form>

      <ul>
        {list.map((todo) =>  (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={() => deleteTodo(todo.id)}>&times;</button>
         </li> 
        ))}
        
      </ul>
    </div>
  )
}

export default Home