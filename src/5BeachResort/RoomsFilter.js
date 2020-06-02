import React from "react";
import { useContext } from "react";
import { RoomContext } from "./Context";
import Title from "./Title";

// get all uniq value
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  //   console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //   get uniqu type
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  types = types.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });

  let capacities = getUnique(rooms, "capacity");
  // add all
  capacities = [...capacities];
  capacities = capacities.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  //   console.log("breakfast", breakfast);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* endselect type */}
        {/* select capacity */}

        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* endselect capacity */}
        {/* select price */}
        <div className="form-group">
          <label htmlFor="price">Price Rp.{price}.000</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* endselect price */}
        {/* select size */}
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
          {/* endselect size */}
        </div>
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              //   value={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              //   value={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
}
