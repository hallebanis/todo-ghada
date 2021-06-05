import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//todSlice to gather all reducers and actions

const toDoSlice = createSlice({
  //changement de la structure du reducer
  name: "todos",
  initialState: {
    todoList: [],
    filter: "all"
  },

  reducers: {
    savetodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        description: action.payload.description,
        done: false
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodo]
      };
    },
    toggledone: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((elm) =>
          elm.id === action.payload.id ? { ...elm, done: !elm.done } : elm
        )
      };
    },
    deletetodo: (state, action) => {
      console.log(action);
      return {
        ...state,
        todoList: state.todoList.filter((elm) => elm.id !== action.payload.id)
      };
    },
    edittodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((el) =>
          el.id === action.payload.id ? action.payload : el
        )
      };
    },
    filtertodo: (state, action) => {
      return { ...state, filter: action.payload };
    }
  }
});
export const {
  savetodo,
  toggledone,
  deletetodo,
  edittodo,
  filtertodo
} = toDoSlice.actions;

export default toDoSlice.reducer;
