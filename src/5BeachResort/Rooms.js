import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import { Link } from "react-router-dom";

export default function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
