import React from "react";
import styles from "./Cards.module.scss";

const Cards = (props) => {
  const { episodes } = props;
  return (
    <div className={styles.episodes}>
      {episodes.map((e) => {
        return (
          <p className={styles.episode} key={e.id}>
            {e.name}
          </p>
        );
      })}
    </div>
  );
};

export default Cards;
