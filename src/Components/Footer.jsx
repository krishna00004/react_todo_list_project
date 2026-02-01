import styles from "./Footer.module.css"
export default function Footer({completedTodo,totalTodo}){
  return(
    <div className={styles.footer}>
      <span className={styles.items}>Completed Todo: {completedTodo}
      </span>
      <span className={styles.items}>Total Todo: {totalTodo}</span>
    </div>
  )
}