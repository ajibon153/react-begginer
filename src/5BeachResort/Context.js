import React, { Component } from "react";
// import items from "./data";
import Client from "./Contenfull";

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello}
class RoomProvider extends Component {
  state = {
    rooms: [], //original
    sortedRooms: [], // yang akan di edit
    featuredRooms: [],
    loading: true,

    // filter
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData SERVER SIDE ( contentfull )
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
      });
      //  .then((response) => console.log(response.items));
      // .catch(console.error);
      let room_set = this.formatData(response.items);

      let featuredRoom_Set = room_set.filter((room) => room.featured === true);
      let maxPrice = Math.max(...room_set.map((item) => item.price));

      let maxSize = Math.max(...room_set.map((item) => item.size));

      this.setState({
        rooms: room_set,
        featuredRooms: featuredRoom_Set,
        sortedRooms: room_set,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData(); //panggil yang di server contentfull

    // // getData ( LOCAL )
    // let room_set = this.formatData(items);
    // let featuredRoom_Set = room_set.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...room_set.map((item) => item.price));
    // let maxSize = Math.max(...room_set.map((item) => item.size));
    // this.setState({
    //   rooms: room_set,
    //   featuredRooms: featuredRoom_Set,
    //   sortedRooms: room_set,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // });
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const type = target.type;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(event.target.checkbox);

    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
    // console.log(`ini type ${type}, ini name ${name}, ini value ${value}`);
  };
  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];

    // filter by type
    if (type != "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    capacity = parseInt(capacity);
    if (capacity != 1) {
      tempRooms = tempRooms.filter((room) => room.capacity === capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // console.log(breakfast);

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// High order component
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
