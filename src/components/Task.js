import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { toggledone, deletetodo, edittodo } from "../features/toDoSlice";

const Task = ({ todo, description, done, id }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(description);
  let dispatch = useDispatch();

  const handleDone = () => {
    dispatch(
      toggledone({
        id
      })
    );
  };

  return (
    <div>
      <div className="task">
        <Checkbox
          checked={todo.done}
          color="default"
          onChange={handleDone}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.description}</h4>
          )}
        </div>
        <button
          className="btn"
          onClick={() => {
            dispatch(
              edittodo({
                ...todo,
                description: name
              })
            );
            if (editable) {
              setName(name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button className="btn" onClick={() => dispatch(deletetodo({ id }))}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Task;
