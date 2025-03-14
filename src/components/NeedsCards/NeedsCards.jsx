import { useState, useRef } from "react";
import { useInView } from "../../hooks/useInView";

import BorderedImage from "../BorderedImage/BorderedImage";
import { needsItems } from "../../constants/needsItems";

import styles from "./NeedsCards.module.css";

const NeedsCards = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ul className={styles.list}>
      {needsItems.map(({ id, text, imgSrc }, index) => {
        const ref = useRef(null);
        const inView = useInView(ref, 30, 0.3);

        return (
          <li
            key={id}
            ref={ref}
            className={`${styles.item} ${inView ? styles.show : ""}`}
            style={{
              transitionDelay: `${index * 0.3}s`,
            }}
          >
            <h3
              className={`${styles.text} ${
                hoveredId === id ? styles.textActive : ""
              }`}
            >
              {text}
            </h3>
            <BorderedImage
              src={imgSrc}
              alt={text}
              variant="needs"
              onHover={() => setHoveredId(hoveredId === id ? null : id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NeedsCards;
