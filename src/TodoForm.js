import React, {useState} from 'react'


function TodoForm(props) {
    const [inputtitle, setInputtitle] = useState('');
    const [inputpost, setInputpost] = useState('');
   

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit ({
            id: Math.floor (Math.random()* 100),
            title: inputtitle,
            post: inputpost,
            date: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
        });
        setInputtitle('');
        setInputpost('');
    };

    const handleChangeTitle = e => {
        setInputtitle(e.currentTarget.value);
    }

    const handleChangePost = e => {
        setInputpost(e.currentTarget.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
                   <input value={inputtitle} type="text" onChange={handleChangeTitle} placeholder="Enter title" className="inpp" />
                   <input value={inputpost} type="text" onChange={handleChangePost} placeholder="Enter description" className="inpp" />
                  <button className="addbtn">Add Announcement</button>
             </form>
    )
    }
export default TodoForm
