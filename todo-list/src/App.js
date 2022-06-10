import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  // useState will return an array of two todos, the initial todo and the final todo
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Todo todoList={todoList} setTodoList={setTodoList} />
      {/* here we are mapping through the todo list array*/}
        {todoList.map((item, index) => (
          /* key is to used to prevent the popup error in the console */
          <div key = {index}>
          <TodoList item={item} index={index} setTodoList={setTodoList} todoList={todoList} />
          </div>
        ))}
      </div>
  );
}

export default App;