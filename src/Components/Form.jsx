import { useState } from "react";
import styles from "./Form.module.css"
export default function Form({todo,setTodo}) {
  const [value, setValue] = useState({name:"",done:false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, value]);
    setValue({name:"",done: false});
  }
  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input}
          onChange={(e) => setValue({name:e.target.value,done: false})}
          type="text"
          value={value.name}
          placeholder="Enter Todo Items..."
        />
        <button className={styles.btn} type="submit">Add</button>
      </form>
      {/* {console.log(todo)} */}
    </div>
  );
}
