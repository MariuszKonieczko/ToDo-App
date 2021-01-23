import { Component } from 'react';

class AddTask extends Component {
  currentDate = new Date().toISOString().slice(0, 10);
  lastDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toISOString()
    .slice(0, 10);

  state = {
    text: '',
    date: this.currentDate,
    important: false,
  };

  onChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;

    if (type === 'checkbox') {
      this.setState({ [name]: e.target.checked });
    } else {
      this.setState({ [name]: e.target.value });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, date, important } = this.state;

    if (text.length < 2) {
      alert('Za krótka nazwa w polu Dodaj zadanie');

      return;
    }

    if (date === '') {
      alert('Wprowadź datę');
      return;
    }

    const add = this.props.add(text, date, important);
    if (add) {
      this.setState({ text: '', priority: false, deadline: this.currentDate });
    }
  };

  render() {
    return (
      <form onSubmit={this.props.onClick}>
        <div>
          <input
            placeholder="Dodaj zadanie"
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            id="important"
            type="checkbox"
            name="important"
            checked={this.state.important}
            onChange={this.onChange}
          />
          <label htmlFor="important">Prioryty</label>
        </div>
        <div>
          <label htmlFor="date">Deadline: </label>
          <input
            id="date"
            type="date"
            name="date"
            value={this.state.date}
            min={this.currentDate}
            max={this.lastDate}
            onChange={this.onChange}
          />
        </div>
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default AddTask;
