import Task from './Task';

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (active.length >= 2) {
    active.sort((a, b) => a.text.toLowerCase() > b.text.toLowerCase());
  }
  if (done.length >= 2) {
    done.sort((a, b) => b.expirenceDate - a.expirenceDate);
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>Tasks to do </h2>
        {activeTasks.length ? activeTasks : <p>You have got nothing to do</p>}
      </div>
      <span className="border"></span>
      <div className="done">
        <h3>Tasks done ({done.length})</h3>
        {done.length > 5 && <span>You have see last 5 tasks done</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
