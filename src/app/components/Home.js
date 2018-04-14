import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    };
  }
  onMakeOlder(event) {
    this.setState({
      age: this.state.age + 3
    });
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
      </div>
    );
  }
}

//Home.protoTypes = {
//    name: React.propTypes.string,
//    age: React.propTypes.number,
//    user: React.propTypes.object
//  };
