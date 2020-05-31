import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello}
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  // getData
  componentDidMount() {
    // this.getData
    let room_set = this.formatData(items);

    let featuredRoom_Set = room_set.filter((room) => room.featured === true);
    this.setState({
      rooms: room_set,
      featuredRooms: featuredRoom_Set,
      sortedRooms: room_set,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
