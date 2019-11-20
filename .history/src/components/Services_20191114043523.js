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
          "Aliquip pariatur cillum cillum aliquip aliqua qui voluptate nisi."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Anim do do consequat proident magna commodo ipsum."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Elit adipisicing aute ut pariatur pariatur est fugiat."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Incididunt labore qui adipisicing incididunt sint qui in."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
