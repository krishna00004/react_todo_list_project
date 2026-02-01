import Externalcss from "./Components/Externalcss"
import Inlinecss from "./Components/Inlinecss"
import Todo from "./Components/Todo"
import TodoHeader from "./Components/Todo.header"
import "./App.css"
function App() {

  return (
     <div>
      <TodoHeader/>
      <Todo/>
      {/* <Inlinecss/> */}
      {/* <Externalcss/> */}
     </div>
  )
}

export default App
