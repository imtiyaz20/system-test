import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const newPriority = this.getPriority.value;
    const data = {
      newTitle,
      newMessage,
      newPriority
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <div>
            <lable>
              <span>Summary : </span>
            </lable>
            <input
              required
              type="text"
              ref={input => (this.getTitle = input)}
              defaultValue={this.props.post.title}
              className="Summary"
            />
          </div>
          <br />
          <br />
          <div>
            <lable>
              <span>Description : </span>
            </lable>
            <input
              required
              type="text"
              ref={input => (this.getMessage = input)}
              defaultValue={this.props.post.message}
              className="Summary"
            />
          </div>
          <div>
            <lable>
              <span>Priority : </span>
            </lable>
            <input
              required
              type="text"
              ref={input => (this.getPriority = input)}
              defaultValue={this.props.post.priority}
              className="Summary"
            />
          </div>
          <br />
          <br />
          <div>
            <lable>
              <span>Due Date : </span>
            </lable>
            <input
              required
              type="date"
              ref={input => (this.getDate = input)}
              defaultValue={this.props.post.date}
              className="Summary"
            />
          </div>
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
