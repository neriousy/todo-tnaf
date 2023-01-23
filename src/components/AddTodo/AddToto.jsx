import React, {useState} from 'react';

function AddTodo(props){
  const [input, setInput] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });

    setInput('');
  };

  const handleChange = e =>{
    setInput(e.target.value);
  };

  

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add task' value={input} name='text' onChange={handleChange}/>
      <button onClick={handleSubmit}>Add todo</button>
    </form>
  );
}

export default AddTodo;
