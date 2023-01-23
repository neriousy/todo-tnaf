import React from 'react';
import styles from './TodoTile.module.scss';


function TodoTile(props){

  const removeHandler = e => {

    props.onClick({
      id: props.id
    });
  };

  return(
    <div className={styles.tileContainer}>
      <span>Opis: {props.desc}</span>
      <button type="button" onClick={removeHandler}> - </button>
    </div>
    
  );
}

export default TodoTile;