import css from "./TaskList.module.css";
import Task from "./../Task/Task";
const TaskList = ({ tasks, onDelete }) => {
  // console.log(Task);
  return (
    <ul className={css.ul}>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task data={task} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
