import React, { Component } from "react";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = { user: "shafi2019", search: "" };
    console.log(`user profile constructed`);
  }

  render() {
    console.log(`user profile rendered`);
    return (
      <div className="appContainer">
      
      </div>
    );
  }
}
export default UserProfile;