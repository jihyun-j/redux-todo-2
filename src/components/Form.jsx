import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function Form() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneTodoHandler = (id) => {
    dispatch(switchTodo(id));
  };

  const navToDetail = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <form>
        <label htmlFor="">제목</label>
        <input type="text" value={title} onChange={onChangeTitle} />

        <label htmlFor="">내용</label>
        <input type="text" value={body} onChange={onChangeBody} />

        <button type="submit" onClick={onSubmitTodo}>
          추가
        </button>
      </form>
      {todoList.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.body}</li>
            <button onClick={() => doneTodoHandler(todo.id)}>
              {!todo.isDone ? "완료" : "취소"}
            </button>
            <button onClick={() => deleteTodoHandler(todo.id)}>삭제</button>
            <button onClick={() => navToDetail(todo.id)}>상세보기</button>
          </ul>
        );
      })}

      {/* 완료된 투두
      {todoList.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.body}</li>
            <button onClick={() => doneTodoHandler(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteTodoHandler(todo.id)}>삭제</button>
            <button>상세보기</button>
          </ul>
        );
      })} */}
    </>
  );
}

export default Form;
