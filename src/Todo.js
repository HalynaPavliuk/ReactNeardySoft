import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {RiEditLine} from 'react-icons/ri'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };


    if (edit.id) {
       return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    
    return ( 
        todos.map((todo, index) => <div className={todo.isComplete ? 'todo-complete' : 'todo'}  key={todo.index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="postarea" > 
                <h5>{todo.title}</h5>
                {todo.post} <br/> 
                {todo.date} 
            </div>
            <div className="icon">
                < RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
                <RiEditLine onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon" />
            </div>
        </div>)
    )
}

export default Todo
