import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//here is the destructure method used on the useState in app.js 
const TodoList = ({ todoList, setTodoList }) => {
  const [item, setItem] = useState({
    // the inital value will be set to an empty string
    todoTask: "",
    // this will be set to false until checkbox is checked
    isTaskComplete: false,
  });

  const handleTodoSubmit = (e) => {
    // this prevents the page from reloading
    e.preventDefault();

    // ... is a spread operator which will create a new array with the current todos plus the new todo added
    setTodoList([...todoList, item]);

    // this will reset to the initial value once the item is added to array
    setItem({
      todoTask: "",
      isTaskComplete: false,
    });
  };

  const ItemOnChange = (e) => {
    setItem({
      ...item,
      todoTask: e.target.value,
    });
  };

  return (
    <Container>
      <div>
        <h1>Todo List</h1>
        <form
          className="todo-form"
          onSubmit={handleTodoSubmit}
        >
          <input
            className="form-control"
            placeholder="Enter a todo task"
            type="text"
            name="item"
            value={item.todoTask}
            onChange={ItemOnChange}
          />
          <Button variant="primary" className="btn" type="submit">
            Add Todo
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default TodoList;
