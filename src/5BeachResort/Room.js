import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "./images/room-1.jpeg";
import PropTypes from "prop-types";
export default function Room({ room }) {
  //   console.log(room);
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container" alt="single room">
        <img src={images[0] || defaultImg} />
        <div className="price-top">
          <h6>Rp. {price}.000</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info" style={{ marginBottom: "0" }}>
        {name}
      </p>
    </article>
  );
}

Room.prototype = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
