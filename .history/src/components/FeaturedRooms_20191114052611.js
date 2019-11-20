import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { greeting, name } = this.context;
    return <div>hello from featured rooms {greeting}</div>;
  }
}
