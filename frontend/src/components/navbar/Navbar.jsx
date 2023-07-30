import React from 'react'
import classes from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'



const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <Link to='/'>BYTE BLOGS</Link>
                </div>
                {/* <ul className={classes.center}>
                    <li className={classes.listItem}>Home</li>
                    <li className={classes.listItem}>About</li>
                    <li className={classes.listItem}>Contacts</li>
                    <li className={classes.listItem}>Categories</li>
                </ul>
                */}
                <div className={classes.right}>
                    <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
                    {showModal &&
                        <div className={classes.modal}>
                            <Link to='/create'>Create</Link>
                            <Link to='/logout' >Logout</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar