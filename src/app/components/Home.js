import React from "react";
import { setTimeout } from "timers";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Changed Link"
    };
    setTimeout(() => {
      this.setState({
        status: "Jeff"
      });
    }, 3000);
  }
  onMakeOlder(event) {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  render() {
    return (
      <div>
        <p>This is a new component</p>
        <p>
          Your name is {this.props.name}, your inital age is {this.state.age}
        </p>
        <p>Status: {this.state.status}</p>
        <hr />
        <button
          onClick={this.onMakeOlder.bind(this)}
          className="btn btn-primary"
        >
          Make me older
        </button>
        <hr />
        <button onClick={this.props.greet} className="btn btn-danger">
          Greet
        </button>
        <hr />
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-info">
          {" "}
          Change Link
        </button>
      </div>
    );
  }
}

//Home.protoTypes = {
//    name: React.propTypes.string,
//    age: React.propTypes.number,
//    user: React.propTypes.object
//    greet: React.PropTypes.func
//  };
