const Task = (props) => {
  const style = {
    color: 'red',
  };
  const { text, date, id, active, important, expirenceDate } = props.task;
  if (active) {
    return (
      <div className="task">
        <strong style={important ? style : null}>{text}</strong> - do{' '}
        <span>{date}</span>
        <button onClick={() => props.change(id)}>Done</button>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  } else {
    const experinece = new Date(expirenceDate).toLocaleString();
    return (
      <div className="task">
        <strong>{text}</strong> -{' '}
        <em>
          (Deadline: <span>{date})</span>
        </em>
        <div>
          - <em>Execution: {experinece}</em>
          <button onClick={() => props.delete(id)}>X</button>
        </div>
      </div>
    );
  }
};

export default Task;
