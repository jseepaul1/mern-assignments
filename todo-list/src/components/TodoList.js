import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const TodoList = ({ item, index, setTodoList, todoList }) => {

    const handleTodo = () => {
        setTodoList(() => {
            // filter will remove the items when delete button is clicked based on the index and return a new array
            return todoList.filter(item => todoList.indexOf(item) !== index)
        })
    }

    const ItemOnChange = () => {
        // this will return the reverse of what the todoList currently is
        todoList[index].isTaskComplete = !todoList[index].isTaskComplete;
        setTodoList([...todoList]);
    }
    return (
        <Container>
        <div className= "todo-task">
            {item.isTaskComplete ?
                <h4>{item.todoTask}</h4> :
                <h4>{item.todoTask}</h4>}
                {/* checked is an attribute */}
            <input className = "check-task" type="checkbox" checked={item.isTaskComplete} onChange={ItemOnChange}  />
            <Button variant="danger" onClick={handleTodo}>Delete</Button>
        </div>
        </Container>
    )
}

export default TodoList;