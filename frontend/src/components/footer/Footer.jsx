import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={classes.wrapper}>
                <div className={classes.col}>
                    <h2>About </h2>
                    <p><i><b> Welcome to Byte blogs, where creativity knows no bounds. Unleash your inner storyteller and join a vibrant community of writers and readers. Explore diverse ideas and embrace the power of words on this enriching journey.</b>
                    </i>
                    </p>
                </div>
                <div className={classes.col}>
                    <h2>Contacts</h2>
                    <span>Phone: +91 8247645979</span>
                    <span>GitHub:  avpavanreddy</span>
                </div>
                <div className={classes.col}>
                    <h2>Location</h2>
                    <span>Continent: Asia</span>
                    <span>Country: India</span>
                    <span>Current Location: India</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer