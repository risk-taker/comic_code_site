import React from 'react'
import styles from './Button.module.css'

const Button = ({ onClick }) => {
    return (
        <div>
            <button className={styles.button} onClick={onClick} >
                <span className={styles.button_text}>NEXT</span>
            </button>
        </div>
    )
}

export default Button
