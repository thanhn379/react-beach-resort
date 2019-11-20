import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

export default function RoomContainer() {
  return (
    <div>
      hello from rooms container
      <RoomFilter />
      <RoomList />
    </div>
  );
}
