import React, {useState, useCallback} from 'react'
import TodoList from './TodoList'


const Main = () => {
  const [count, setCount] = useState(0) 

  const counterList = () => {
    setCount((prevCount) => prevCount + 1 )  
  }
 
  return <div className="main">
            <p>Announcement Website</p>
            <TodoList />   
         </div> 
}

export default Main