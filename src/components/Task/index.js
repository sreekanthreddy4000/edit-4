const Task = ({task}) => (
  <li>
    <p>{task.taskText}</p>
    <button type="button" key={task.optionId}>
      {task.taskText}
    </button>
  </li>
)

export default Task
