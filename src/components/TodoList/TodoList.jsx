import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddToto';
import TodoTile from '../TodoTile/TodoTile';
import styles from './TodoList.module.scss';
function TodoList(){
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text){
      return;
    } 
    setTodos([todo, ...todos]);
  };

  const removeTile = id => {
    setTodos(currentList => currentList.filter((item) => item.id != id.id));
  };

  return(
    <div className={styles.container}>
      <AddTodo onSubmit={addTodo}/>
      <div className={styles.list}>
        {todos.map(todo => <TodoTile onClick={removeTile} key={todo.id} desc={todo.text} id={todo.id}/>)}
      </div>
    </div>
  );
}

export default TodoList;