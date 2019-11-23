import React from 'react'
import Title from "../Titles/title"
import styles from "../../css/about.module.css"
import img from '../../images/aboutUsHero.jpg'


const About = () => {
    return (
        
        
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about Liquor Baron"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Ad fugiat veniam excepteur culpa aliqua.</p>
                    <p>Ad fugiat veniam excepteur culpa aliqua.</p>
                    <button type="button" className="btn-primary">
                    read more
                    </button>
                </article>
            </div>
        </section>
    

    )

}
export default About
