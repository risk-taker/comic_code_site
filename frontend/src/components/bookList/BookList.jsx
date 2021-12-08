import React from 'react'
import styles from './BookList.module.css'

const BookList = ({ book }) => {
    return (
        <div>
            {/* {book.name}
            <img src={`${book.image}`} alt="" /> */}
            <img src={`${book.image}`} alt="book" width="150" />
            <h3>{book.name}</h3>
            <div className={styles.wrapper}>
                <h4>{book.price}</h4>
                <button className={styles.button}>ADD</button>
            </div>

        </div>
    )
}

export default BookList
