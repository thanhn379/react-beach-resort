import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContext from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <div>hello from singleroom page</div>;
  }
}
