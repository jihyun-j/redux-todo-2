import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const todoList = useSelector((state) => state.todos);
  const { id } = useParams();
  console.log(id);

  console.log(todoList);
  return (
    <>
      {todoList.map((todo) => {
        if (todo.id === id) {
          console.log(todo.id);
        }
      })}
    </>
  );
};

export default Detail;
