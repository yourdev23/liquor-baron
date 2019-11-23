import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"
import links from '../../constants/links'
import socialIcons from '../../constants/social-icons'



const Footer = () => {

    return (
        <nav className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <Link key={index} to={item.path}>
                        {item.text}
                        </Link>
                    )
                })}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                        </a>
                    ) 
                })}
            </div>
            <div className="{styles.copyright}">
                copyright &copy; YOURDEVVY {new Date().getFullYear} all rights reserved
            </div>
        </nav>
    )
}

export default Footer;