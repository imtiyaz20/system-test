import React, { Component } from "react";
import { connect } from "react-redux";
class Post extends Component {
  // searchSubmit = e => {
  //   const people = this.props.post.title;
  //   const [searchTerm, setSearchTerm] = React.useState("");
  //   const [searchResults, setSearchResults] = React.useState([]);
  //   const handleChange = event => {
  //     setSearchTerm(event.target.value);
  //   };
  //   React.useEffect(() => {
  //     const results = people.filter(person =>
  //       person.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  //   }, [searchTerm]);
  // };
  render() {
    return (
      <div className="post">
        <div>
          <div onChange={this.searchSubmit}>
            <input
              type="text"
              placeholder="Search"
              // value={searchTerm}
              // onChange={this.handleChange}
            />
            {/* <ul>
              {searchResults.map(item => (
                <li>{item}</li>
              ))}
            </ul> */}
          </div>
          <div className="input-sec">
            <span onClick="">
              <lable>Summary : </lable>
            </span>
            <h4 className="post_title">{this.props.post.title}</h4>
          </div>
          <div className="input-sec">
            <span>
              <lable>Description : </lable>
            </span>
            <h4 className="post_message">{this.props.post.message}</h4>
          </div>
          <div className="input-sec">
            <span>
              <lable>Priority : </lable>
            </span>
            <h4 className="post_message">{this.props.post.priority}</h4>
          </div>
          <div className="input-sec">
            <span>
              <lable>Due Date : </lable>
            </span>
            <h4 className="post_message">{this.props.post.date}</h4>
          </div>
          <div className="control-buttons"></div>
          <button
            className="edit"
            onClick={() =>
              this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })
            }
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
