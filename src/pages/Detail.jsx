import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const todoList = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const { id } = useParams();

  const navToHome = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={navToHome}>Home</button>
      {todoList.map((todo) => {
        if (todo.id === id) {
          return (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.body}</p>
              <p>완료여부: {todo.isDone ? "완료" : "진행중"}</p>
            </>
          );
        }
      })}
    </>
  );
};

export default Detail;
