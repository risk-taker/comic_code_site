import React from 'react'
import BookList from '../../components/bookList/BookList'
import styles from './Home.module.css'

const Home = () => {
    const books = [
        {
            id: 1,
            image: './img/a.jpg',
            name: 'The Adventures of Huckleberry Finn by Mark Twain',
            price: '₹400'
        },
        {
            id: 2,
            image: '/img/a.jpg',
            name: 'Anna Karenina by Leo Tolstoy',
            price: '₹410'
        },
        {
            id: 3,
            image: '/img/a.jpg',
            name: 'Madame Bovary by Gustav Flaubert',
            price: '₹400'
        },
        {
            id: 4,
            image: '/img/a.jpg',
            name: 'War and Peace by Leo Tolstoy',
            price: '₹350'
        },
        {
            id: 5,
            image: '/img/a.jpg',
            name: 'Lolita by Vladimir Nabokov',
            price: '₹310'
        },
        {
            id: 6,
            image: '/img/a.jpg',
            name: 'Hamlet by William Shakespeare',
            price: '₹400'
        },
        {
            id: 7,
            image: '/img/a.jpg',
            name: 'Middlemarch by George Eliot',
            price: '₹400'
        },
        {
            id: 1,
            image: '/img/a.jpg',
            name: ' In Search of Lost Time by Marcel Proust',
            price: '₹420'
        },
    ]

    return (
        <>
            <div className={`${styles.wrapper} && container`}>
                <div className={styles.heading}>
                    <h1>Wanna to read!</h1>
                    <button className={styles.button}>Order now</button>
                </div>
                <div>
                    <img src="./images/mainBook.svg" alt="book" width="400" />
                </div>
            </div>
            <h1 className="container">All popular Books</h1>
            <div className={`${styles.wrapperGrid} && container`}>
                {books.map((book) => (
                    <BookList book={book} />
                ))}
            </div>

        </>
    )
}

export default Home;
