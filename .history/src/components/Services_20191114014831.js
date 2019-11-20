import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, placeat."
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nostrum!"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ducimus."
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad."
      }
    ]
  };

  render() {
    return (
      <div>
        <Title title="services" />

        <div />
      </div>
    );
  }
}
