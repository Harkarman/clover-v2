import React, { Component } from "react";
import { PostsList, FriendsList } from "./";

export default class Home extends Component {
  render() {
    const { posts, isLoggedIn, friends } = this.props;
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedIn && <FriendsList friends={friends} />}
        {/* <FriendsList friends={friends} /> */}
      </div>
    );
  }
}
