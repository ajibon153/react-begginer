import React, { Component } from "react";
import PropTypes from "prop-types";

const Person = ({ person: { img, name, age, info } }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>Name : {name}</h4>
      <h4>Age : {age}</h4>
      <h4>info : {info || "belum di isi"}</h4>
    </article>
  );
};
Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};
Person.defaultProps = {
  person: {
    img:
      "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/91621169_3479764888706433_2814524766654824448_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_eui2=AeH5ZSW7ITVrwI38ji7PPts-VAlmSrvevLVUCWZKu968tY-CTFSkJctVZHRzPzgJJwJykxDelpbJwMdoN9HALoMX&_nc_ohc=adQ7SNe2ypQAX9EJVG5&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=e8f7260d0ddf6f90555b5c3efe489a31&oe=5EF2E868",
    name: "Mahasiswa",
    age: 24,
  },
};

export default class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img:
          "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/91621169_3479764888706433_2814524766654824448_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_eui2=AeH5ZSW7ITVrwI38ji7PPts-VAlmSrvevLVUCWZKu968tY-CTFSkJctVZHRzPzgJJwJykxDelpbJwMdoN9HALoMX&_nc_ohc=adQ7SNe2ypQAX9EJVG5&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=e8f7260d0ddf6f90555b5c3efe489a31&oe=5EF2E868",
        age: 24,
        name: "aji",
      },
      {
        id: 2,
        img:
          "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/91621169_3479764888706433_2814524766654824448_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_eui2=AeH5ZSW7ITVrwI38ji7PPts-VAlmSrvevLVUCWZKu968tY-CTFSkJctVZHRzPzgJJwJykxDelpbJwMdoN9HALoMX&_nc_ohc=adQ7SNe2ypQAX9EJVG5&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=e8f7260d0ddf6f90555b5c3efe489a31&oe=5EF2E868",
        age: 24,
        name: "fauji",
      },
      {
        id: 3,
        img:
          "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/91621169_3479764888706433_2814524766654824448_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_eui2=AeH5ZSW7ITVrwI38ji7PPts-VAlmSrvevLVUCWZKu968tY-CTFSkJctVZHRzPzgJJwJykxDelpbJwMdoN9HALoMX&_nc_ohc=adQ7SNe2ypQAX9EJVG5&_nc_ht=scontent-sin6-1.xx&_nc_tp=7&oh=e8f7260d0ddf6f90555b5c3efe489a31&oe=5EF2E868",
        age: 24,
        name: "fauji",
        info: "beberapa info",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
            info={person.info}
          />
        ))}
      </section>
    );
  }
}
