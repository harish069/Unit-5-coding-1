import React from 'react'
import data from "./data.json";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import styles from "./Card.module.css";

function Homes() {
  const [items, setItems] = useState(data);
  console.log(items);

  return (
    <div className={styles.main}>
      {items.map((item, id) => {
        return <Card key={id} data1={item} />
      })}
    </div>
  );
}

export default Homes
