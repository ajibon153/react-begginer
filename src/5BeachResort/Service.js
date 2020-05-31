import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lihat gestur tubuh Pak Ruslan Buton dan lihat wajahnya saat akan diterbangkan ke Jakarta untuk di adili, tak terlihat aura ketakutan diwajah beliau, melangkah dengan pasti karena Kebenaran ",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Ini adalah foto para santri n ulama yg menolak faham komunis. Para santri di suruh gali lubang panjang di sekitar pompes utk kuburan mrk n mrk smua di kubur hidup2",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shutles",
        info:
          "Perjalanan MMORPG ajaib dimulai. Bangunkan jiwamu yang tertidur dan tunjukkan kekuatanmu!",
      },
      {
        icon: <FaBeer />,
        title: "Stronger Beer",
        info:
          "Selamat Malam #Healthies Sebagai bentuk kesiapan untuk menghadapi tatanan kehidupan normal baru bagi pekerja, Kementerian Kesehatan telah menerbitkan protokol pencegahan dan pengendalian Covid-19",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
