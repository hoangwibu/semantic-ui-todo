import React, { useState } from 'react';
import { Container, Input, Button, List } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (todo) => {
        const updatedTodos = todos.filter(item => item !== todo);
        setTodos(updatedTodos);
    };

    return (
        <Container className="todo-container">
            <h1>Todo App</h1>
            <div className="input-button-container">
                <Input
                    className="todo-input"
                    placeholder="Thêm công việc..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button primary onClick={handleAddTodo}>
                    Thêm
                </Button>
            </div>
            <List divided relaxed className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} onDelete={handleDeleteTodo} />
                ))}
            </List>
        </Container>
    );
}

export default TodoList;
