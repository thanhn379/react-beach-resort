import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const value = this.context;
    return <div>hello from featured rooms {value}</div>;
  }
}
