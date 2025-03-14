import { useRef } from "react";
import { useInView } from "../../hooks/useInView";

import image01 from "../../assets/images/menu-about-1.jpg";
import image02 from "../../assets/images/menu-about-2.jpg";
import image03 from "../../assets/images/menu-about-3.jpg";

import styles from "./CardsList.module.css";

const CardsList = () => {
  const cards = [
    {
      title: "INŠPIROVANÝ\nHISTÓRIOU",
      img: image01,
      alt: "Inšpirovaný históriou",
      color: styles.gold,
    },
    {
      title: "VÍZIA\nA POSLANIE",
      img: image02,
      alt: "Vízia a poslanie",
      color: styles.red,
    },
    {
      title: "HODNOTY\nLEONIDES",
      img: image03,
      alt: "Hodnoty Leonides",
      color: styles.blue,
    },
  ];

  return (
    <ul className={styles.cardsWrapper}>
      {cards.map((card, index) => {
        const ref = useRef(null);
        const inView = useInView(ref, 30, 0.1);

        return (
          <li
            key={index}
            ref={ref}
            className={`${styles.card} ${card.color} ${
              inView ? styles.show : ""
            }`}
            style={{
              transitionDelay: `${index * 0.3}s`,
            }}
          >
            <h3 className={`${styles.cardTitle} ${card.color}`}>
              {card.title.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <img className={styles.cardImage} src={card.img} alt={card.alt} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;
