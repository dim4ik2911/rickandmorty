import React from "react";
import styles from "./Cards.module.scss";

const Cards = (props) => {
  const { characters } = props;
  return (
    <div className={styles.characters}>
      {characters &&
        characters.map((e) => {
          return (
            <div key={e.id} className={styles.character}>
              <img className={styles.image} src={e.image} />
              <div className={styles.characteristic}>
                <h1 className={styles.name}>{e.name}</h1>
                <h2 className={styles.status}>{e.status}</h2>
                <h3 className={styles.species}>{e.species}</h3>
                <h3 className={styles.species}>{e.location.name}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
