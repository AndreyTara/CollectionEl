import css from "./Task.module.css";

const Task = ({ data, onDelete }) => {
  return (
    <div className={css.wrap}>
      <p className={css.name}>Name: "{data.name}"</p>
      {/* <p className={css.number}>Number: "{data.number}"</p> */}
      <button
        onClick={(e) => onDelete(e.target.id)}
        id={data.id}
        className={css.btn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
