import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

export default function RoomContainer() {
  return (
    <div>
      hello from rooms container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}
