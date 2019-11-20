import React from "react";
import { useContext } from "react";
import RoomContext from "../context";
import Title from "../components/Title";

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    size,
    maxSize,
    breakfast,
    pets
  } = context;
  return (
    <section className="filter-container">
      <title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          ></select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
}
