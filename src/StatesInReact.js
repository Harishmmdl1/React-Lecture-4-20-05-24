import React from "react";

class StatesInReact extends React.Component {
  constructor() {
    super();

    this.state = {
      isBool: false,
    };

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin = () => {
    this.setState({ isBool: false });
  }
  handleLogout = () => {
    this.setState({ isBool: true });
  }

  render() {
    return (
      <div className="d-flex justify-content-center ">
        {this.state.isBool ? (
          <div>
            <p>Click on Login to See Logout button</p>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            <p>Click on Logout to See Login button</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}

export default StatesInReact;
