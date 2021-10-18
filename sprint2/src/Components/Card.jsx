import React from 'react'
import styles from "./Card.module.css";
function Card({data1}) {
    return (
        <div>
            <div className={styles.box}>
                <div>
                {/* <div className={styles.box} > */}
                        <img src={data1.image_url} alt="images"></img>
                </div>
                <div>
                    <p >{data1.product_name}</p>
                    <p>{data1.description}</p>
                <p>{data1.price}</p>
            </div>
            </div>
            </div>
    );
}

export default Card
