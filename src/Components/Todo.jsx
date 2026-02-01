import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
const [todo, setTodo] = useState([]);

const totalTodo = todo.length;
const completedTodo = todo.filter
((todos)=>todos.done).length


  return (
    <div>
     <Form todo = {todo} setTodo ={setTodo}/> 
     <TodoList item = {todo} setTodo = {setTodo}/>
     <Footer completedTodo = {completedTodo} totalTodo = {totalTodo}/>
    </div>
  );
}
