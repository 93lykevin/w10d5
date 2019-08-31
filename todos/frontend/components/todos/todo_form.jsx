import React from 'react';
import {uniqueId} from '../../util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: uniqueId()
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    // this.handleId = this.handleId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  // handleId(e) {
  //   this.setState({ id: uniqueId() });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      title: "",
      body: "",
      id: uniqueId()
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              onChange={this.handleTitle}
              type="text"
              value={this.state.title}
            />
          </label>
          <label>
            Body:
            <input
              onChange={this.handleBody}
              type="text"
              value={this.state.body}
            />
          </label>
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoForm;