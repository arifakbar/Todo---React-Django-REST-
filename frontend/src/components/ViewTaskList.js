import React from "react";
import { connect } from "react-redux";
import { deleteTask, toggleTaskStatus } from "../actions/index";

class ViewTaskList extends React.Component {
  onDeleteClick = (id) => {
    this.props.deleteTask(id);
  };
  toggleComplete = (id, status) => {
    const values = { completed: !status };
    this.props.toggleTaskStatus(id,values);
  };
  render() {
    return (
      <div className="item">
        <div className="ui right floated">
          <button
            className="ui button green"
            onClick={() =>
              this.toggleComplete(this.props.task.id, this.props.task.completed)
            }
          >
            {this.props.btn}
          </button>
          <button
            className="ui button red"
            onClick={() => this.onDeleteClick(this.props.task.id)}
          >
            Remove
          </button>
        </div>
        <div className="content">
          <div className="header">{this.props.task.title}</div>
          <div className="description">{this.props.task.description}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  deleteTask: deleteTask,
  toggleTaskStatus: toggleTaskStatus,
})(ViewTaskList);
