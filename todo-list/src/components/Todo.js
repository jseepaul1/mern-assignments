import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const TodoList = ({ todoList, setTodoList }) => {
    
    const handleTodoSubmit = (e) => {
        // this prevents the page from reloading
        e.preventDefault();
        
    }

    let item = {
        // the inital value will be set to an empty string
        todoTask: "",
        // this will be set to false until checkbox is checked
        isTaskComplete: false
    };

    const ItemOnChange = e => {
        item.todoTask = e.target.value;
    }

    const handleTodo = e => {
        // ... is a spread operator which will create a new array with the current todos plus the new todo added
        setTodoList([...todoList, item]);
    }

    return (
        <Container>
        <div>
            <h1>Todo List</h1>
            <form className= "todo-form" onSubmit={e => {handleTodoSubmit(e)}}>
            <input className="form-control"
                placeholder= "Enter a todo task"
                type="text"
                name="item"
                onChange={ItemOnChange} />
            <Button variant="primary" className="btn" onClick={handleTodo}>Add Todo</Button>
            </form>
        </div>
        </Container>
    )
}

export default TodoList;