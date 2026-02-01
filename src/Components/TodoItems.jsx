import styles from "./TodoItems.module.css"
export default function TodoItems({item,todo,setTodo}){

  function deleteFunc(item){
    // console.log(item)

  let deleteValue = todo.filter((todos)=> todos!== item)
  setTodo(deleteValue);
  }

  function handleClick(name){
    // console.log(name)
    const newArray = todo.map((obj)=>obj.name === name?{...obj,done:!obj.done}:obj)

    setTodo(newArray)
  }
  const className = item.done?styles.completed:""
  return(
    <div className={styles.itmes}>
      <div className={styles.card}>
        <div className={styles.para}>
          <span className = {className} onClick={()=>handleClick(item.name)}>{item.name}</span>
      </div>
      <span className={styles.span}>
        <button onClick={()=>deleteFunc(item)} className={styles.btn}>x</button>
      </span>
      </div>
      <hr className={styles.line} />
    </div>
  )
}