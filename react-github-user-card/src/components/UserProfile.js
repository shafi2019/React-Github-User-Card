import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowerList from "./FollowerList.js";

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

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    console.log(`user profile rendered`);
    return (
      <div className="appContainer">
        <UserCard
          image={this.state.user.avatar_url}
          name={this.state.user.name}
          bio={this.state.user.bio}
          location={this.state.user.location}
          follower={this.state.user.followers}
          following={this.state.user.following}
        />
        <h2>User {this.state.user.name}'s followers</h2>

        <FollowerList username={this.state.user.name} />

      </div>
    );
  }
}
export default UserProfile;