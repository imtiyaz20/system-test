import React, { Component } from "react";
import { connect } from "react-redux";
class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const priority = this.getPriority.value;
    const date = this.getDate.value;

    const data = {
      id: new Date(),
      title,
      message,
      priority,
      date,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
    this.getPriority.value = "";
    this.getDate.value = "";
  };
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Summary</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <lable>
              <span>Summary : </span>
            </lable>
            <input
              required
              type="text"
              ref={input => (this.getTitle = input)}
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
              className="Summary"
            />
          </div>
          <br />
          <br />
          <div>
            <lable>
              <span>Priority : </span>
            </lable>
            <input
              required
              ref={input => (this.getPriority = input)}
              className="priority"
            />

            <input
              id="dateRequired"
              type="date"
              name="dateRequired"
              ref={input => (this.getDate = input)}
              className ="dueDate"
            />
            <lable className ="dueDate">
              <span>Due Date : </span>
              &nbsp;
            </lable>
          </div>

          <br />
          <br />
          <div className = "butons">
          <button className = "cancel">Cancel</button>&nbsp;
          <button className = "save">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
