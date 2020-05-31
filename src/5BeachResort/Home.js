import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Service from "./Service";
import { Link } from "react-router-dom";
import FeaturedRoom from "./FeaturedRoom";

export default function Home() {
  // return <div>Hai</div>;
  // return <Hero hero="defaultHero" />;
  return (
    <>
      <Hero>
        <Banner
          title="luxurios rooms"
          subtitle="deluxe room starting at $299"
          buttonTitle="Our Rooms"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
    </>
  );
}
