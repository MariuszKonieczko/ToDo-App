import './App.css';
import { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: '0',
        text: 'Zagrać w Cyberpunk 2077',
        date: '2021-01-15',
        important: true,
        active: true,
        expirenceDate: null,
      },
      {
        id: '1',
        text: 'Sprzedać butelki',
        date: '2021-03-01',
        important: false,
        active: true,
        expirenceDate: null,
      },
      {
        id: '2',
        text: 'pomalować dom',
        date: '2021-01-10',
        important: true,
        active: true,
        expirenceDate: null,
      },
      {
        id: '3',
        text: 'Fryzjer',
        date: '2021-02-01',
        important: false,
        active: true,
        expirenceDate: null,
      },
      {
        id: '4',
        text: 'Nie odbierać poleconego od komornika',
        date: '2021-12-31',
        important: false,
        active: true,
        expirenceDate: null,
      },
      {
        id: '5',
        text: 'Kupić drzewo',
        date: '2021-03-22',
        important: false,
        active: true,
        expirenceDate: null,
      },
      {
        id: '6',
        text: 'Jeszcze raz pomalować dom',
        date: '2021-09-05',
        important: false,
        active: true,
        expirenceDate: null,
      },
      {
        id: '7',
        text: 'Sprzedać gry planszowe',
        date: '2021-04-20',
        important: false,
        active: true,
        expirenceDate: null,
      },
    ],
  };
  counter = this.state.tasks.length;
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.expirenceDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      expirenceDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({ tasks: [...prevState.tasks, task] }));
    return true;
  };
  render() {
    return (
      <>
        <AddTask add={this.addTask} />
        <span className="border"></span>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default App;
