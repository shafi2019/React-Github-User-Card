import React, { Component } from "react";

class FollowerList extends Component {
  constructor() {
    super();
    this.state = { followers: [] };
    console.log("follower list constructed");
  }

  render() {
    console.log(`follewer list rendered`);
    return (
      <div className="followersContainer">
      
      </div>
    );
  }
}

export default FollowerList;