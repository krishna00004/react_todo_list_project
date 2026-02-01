import styles from "./TodoList.module.css"
import TodoItems from "./TodoItems"
export default function TodoList({item,setTodo}){
  const sortedTodo = item.slice().sort((a,b)=>Number(a.done)-Number(b.done))

  return(
    <div className={styles.todolist}>
      {
       sortedTodo.map((object)=>(
        <TodoItems key={object.name} item = {object} todo = {item} setTodo = {setTodo}/>
      ))
    }
    </div>
  )
}