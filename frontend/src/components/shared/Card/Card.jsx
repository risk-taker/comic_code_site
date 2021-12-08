import React from 'react'
import styles from './Card.module.css';

const Card = ({ heading, children }) => {
    return (
        <div className={styles.card}>
            <h5 className={styles.heading}>{heading}</h5>
            {children}

        </div>
    )
}

export default Card
