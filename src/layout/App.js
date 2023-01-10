import React, {useState} from 'react';
import AddTodo from '../components/AddTodo/AddToto';
import TodoList from '../components/TodoList/TodoList';
import './App.css';

function App() {
  const[todoData, setTodoData] = useState([{id: 0, desc: 'Pranie'}, {id: 1, desc: 'Sprzatanie'}]);
  const[item, setItem] = useState('');


  const handleClick = () =>{
    setTodoData(oldData => [...oldData, item])
  }

  const itemChange = e => {
    setItem(e.target.value)
    
  }

  return (
    <>
      <AddTodo onChangeFunc={itemChange} onClickFunc={handleClick}/>
      <TodoList todos={todoData}/>
      
    </>
  );
}

export default App;
