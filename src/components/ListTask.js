import React from "react";
import Task from "./Task";

import "./ListTask.css";

//mapping all Tasks inputed in one component named TaskList

const ListTask = ({ todos }) => {
  //changement des useSelector

  return (
    <div className="todo-container">
      {todos.map((task) => (
        <Task
          todo={task}
          description={task.description}
          done={task.done}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default ListTask;
