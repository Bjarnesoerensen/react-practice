import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }
  onGreet() {
    alert("hello");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Max"}
          initialAge={23}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path={"user"} component={User} />
          <Route path={"home"} component={Home} />
        </Router>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1" />
          {homeCmp}
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1" />
          <button
            onClick={this.onChangeHomeMounted.bind(this)}
            className="btn btn-primary"
          >
            ComponentChanger
          </button>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
