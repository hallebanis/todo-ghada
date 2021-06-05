import "./App.css";
import Addtask from "./components/Addtask";
import ListTask from "./components/ListTask";
import { Filtre } from "./components/Filter";
import { useSelector } from "react-redux";

//App is the final displayed component, but also we used here a filter to kinda sort tasks by done and undone actions.

function App() {
  const todoList = useSelector((state) => state.todos.todoList);
  const filtred = useSelector((state) => state.todos.filter);

  const showing = (todoList, filtred) => {
    if (filtred === "done") {
      return todoList.filter((todo) => todo.done === true);
    } else if (filtred === "undone") {
      return todoList.filter((todo) => todo.done === false);
    } else if (filtred === "all") {
      return todoList;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <img
          src="https://todolist.org.uk/wp-content/uploads/2017/12/todolistlogo-1.png"
          alt="logo"
        ></img>
        <div className="buttons">
          <Filtre></Filtre>
        </div>
        {console.log(showing(todoList, filtred))}
        <ListTask todos={showing(todoList, filtred)}></ListTask>
        <div className="todo-container">
          <Addtask></Addtask>
        </div>
      </div>
    </div>
  );
}

export default App;
