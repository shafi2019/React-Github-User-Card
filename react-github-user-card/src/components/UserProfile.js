import React, { Component } from "react";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = { user: "shafi2019", search: "" };
    console.log(`user profile constructed`);
  }

  componentDidMount() {
    console.log(`user profile mounted`);
    axios
      .get(`https://api.github.com/users/shafi2019`)
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.log("something went wrong"));
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