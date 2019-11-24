import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/flyer.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Flyer = ({flyer}) => {
    const {name, slug, image} = flyer
    
    let mainImage = image[0].fluid;


    
    return (
        <article className={styles.flyer}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single flyer"/>
                <AniLink fade className={styles.link} to={`/flyers/${slug}`}>View</AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                <div className={styles.details}>
                </div>
                </div>
            </div>
        </article>
    )
}

export default Flyer
