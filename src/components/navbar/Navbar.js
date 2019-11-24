import React,{useState} from "react"
import { FaAlignRight } from "react-icons/fa"
import styles from "./navbar.module.css"
import links from '../../constants/links'
import socialIcons from '../../constants/social-icons'
import logo from "../../images/baron-logo3.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Navbar = () => {
    const[isOpen,setNav] = (useState(false))
    const toggleNav = () => {
        setNav( isOpen => !isOpen )
    }
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="Liquor Baron logo"/>
                    <button 
                    type="button" 
                    className={styles.logoBtn} 
                    onClick={toggleNav}>
                    <FaAlignRight className={styles.logoIcon}/> 
                    </button>
                </div>
                <ul className={
                    isOpen
                    ?`${styles.navLinks} ${styles.showNav}`
                    :`${styles.navLinks}`
                    }
                >
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={item.path}>{item.text}</AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                        </a>
                        
                    })}
                </div>
              
            </div>
        </nav>
    )
}

export default Navbar;