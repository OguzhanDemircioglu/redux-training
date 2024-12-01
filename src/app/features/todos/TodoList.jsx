import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo, toggleComplete} from "./TodoSlice.jsx";
import "./style.css";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const saveTodo = () => {
        if (title.trim()) {
            dispatch(addTodo(title, false));
            setTitle('');
        } else {
            alert('Title cannot be empty!');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            saveTodo();
        }
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter todo title"
                   onKeyPress={handleKeyPress}/>
            <button onClick={saveTodo} >Save</button>
            <br/>
            <ul style={{listStyleType: 'none', padding: 0}}>
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <li key={todo.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px',
                            background: '#f9f9f9',
                            padding: '10px',
                            borderRadius: '5px'
                        }}>
                            <span>{todo.title}</span>
                            <button onClick={() => handleRemove(todo.id)} style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'red',
                                fontSize: '18px',
                                marginTop: '20px'
                            }}>
                                🗑️
                            </button>
                            <button
                                onClick={() => dispatch(toggleComplete(todo.id))}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'red',
                                    fontSize: '18px',
                                    marginTop: '20px'
                                }}
                            >
                                {todo.isComplete ? 'Mark as UnCompleted' : 'Mark as Completed'}
                            </button>

                        </li>
                    ))
                ) : (
                    <p>No todos available. Add one!</p>
                )}
            </ul>

        </div>
    );
};

export default TodoList;