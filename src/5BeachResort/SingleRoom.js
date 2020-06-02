import React, { Component } from "react";
import defaultBcg from "./images/room-1.jpeg";
import Banner from "./Banner";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { RoomContext } from "./Context";
import HeroStyled from "./HeroStyled";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>Kamar Tidak Di Temukan...</h3>
          <Link to="/rooms/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      desc,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    let [mainImg, ...defaultImg] = images;
    console.log(defaultImg);

    return (
      <>
        <HeroStyled hero="roomsHero" img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </HeroStyled>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img src={image} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{desc}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : Rp. {price}.000</h6>
              <h6>size : {size} /m2</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast include"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>- {extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
