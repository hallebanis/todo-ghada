import React from "react";
import { filtertodo } from "../features/toDoSlice";
import { useDispatch } from "react-redux";
export const Filtre = (todos) => {
  const dispatch = useDispatch();
  const hundleFiltre = (e) => {
    // j'ai changé dispatch(filtertodo(e.target.done))
    dispatch(filtertodo(e.target.id));
  };
  return (
    <div className="todos_filter">
      {/*j'ai ajouté un id*/}
      <li
        id="all"
        style={{
          textDecoration: "underline",
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        All{" "}
      </li>
      <li
        id="done"
        style={{
          textDecoration: "underline",
          marginLeft: 20,
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        Done{" "}
      </li>
      <li
        id="undone"
        style={{
          textDecoration: "underline",
          marginLeft: 20,
          color: "darkorange",
          fontWeight: "500"
        }}
        onClick={hundleFiltre}
      >
        {" "}
        notDone{" "}
      </li>
    </div>
  );
};
