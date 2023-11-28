// import uuid from "react-uuid";
import { act } from "react-dom/test-utils";
import shortid from "shortid";

// ACTION TYPE
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

// ACTION CREATOR
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case SWITCH_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...state, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

export default todos;
