
import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'



function TodoList(props) {
    const [todos, setTodos] = useState([]);
    const [visible, setVisible] = useState(false);

    const addTodo = todo => {
        if ((!todo.title || /^\s*$/.test(todo.title)) && (!todo.post || /^\s*$/.test(todo.post))) {
            return 
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        
    }

    const completeTodo = id => {
        let updatesTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }  return todo
        })

        setTodos(updatesTodo)
    }

    const removeTodo = id => {
        const removed = [...todos].filter(todo => todo.id !== id)

        setTodos(removed)
    }


    const updateTodo = (todoId, newValue) => {
        if((!newValue.title || /^\s*$/.test(newValue.title)) && (!newValue.post || /^\s*$/.test(newValue.post))) {
            return 
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const showAnn = () => {
        setVisible(!visible)
        console.log(visible)
    }


    const [str, setStr] = useState('');

    const FilteredPosts = todos.filter(todo => {
        return todo.title.toLowerCase().includes(str.toLowerCase()) 
    })
    
 
    return (
        
            <div className="posts"> 
                <div className="show">
                    <TodoForm onSubmit={addTodo} />
                    <a onClick={showAnn}>Show {todos.length} announcement</a> 
                </div>
                {visible ? 
                    <div className="postscontainer">
                        <div className="search">
                            <input placeholder="enter text" 
                                onChange={(e) => setStr(e.target.value)} />
                            <button className="btnsearch" >Search</button>
                        </div>
                         <Todo todos={FilteredPosts} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} visible={visible} />
                    </div>  : null}
            </div>
           
        
    )
}

export default TodoList;
