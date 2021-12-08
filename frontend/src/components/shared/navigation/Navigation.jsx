import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { logout } from '../../../http'
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'

const Navigation = () => {
    const dispatch = useDispatch()
    async function logoutUser() {
        try {
            //logout server request
            const { data } = await logout()
            dispatch(setAuth(data))

        } catch (err) {
            console.log(err)
        }
    }
    const { isAuth } = useSelector((state) => state.auth)

    return (
        <>
            <div className={styles.navbar}>
                <div className="container">
                    <div className={styles.nav}>
                        <div className={styles.nav}>
                            <Link to='/' className={styles.nav}>
                                <img src="/images/logo.png" alt="logo" width="66" />
                                <h3>Millennium Boutique</h3>
                            </Link>
                        </div>
                        <ul className={styles.nav}>
                            <li>
                                <Link className={styles.links} to='/books'>BOOKS</Link>
                            </li>
                            <li>
                                <Link className={styles.links} to='/blog'>BLOG</Link>
                            </li>
                            <li>
                                <Link className={styles.links} to='/cart'>CART</Link>
                            </li>
                            <li>
                                <Link className={styles.last_link} to='/authenticate'>SIGN IN</Link>
                            </li>
                            <li>
                                {/* <Link className={styles.last_link} to='/authenticate'><button>LOGOUT</button></Link> */}
                                {isAuth && <button className={styles.button} onClick={logoutUser}>LOGOUT</button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation
