import React, { Component } from "react";

export class Step8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleAdd(e) {
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <input value={this.state.text} onChange={e => this.handleChange(e)} />
        <button onClick={this.handleAdd}>Add</button>
        <ol>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => this.removeItem(index)}>Delete</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
