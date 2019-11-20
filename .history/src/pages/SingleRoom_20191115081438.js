import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContext from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    let room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h1>no search room could be found</h1>
        </div>
      );
    }

    return <div>hello from singleroom page</div>;
  }
}
