import React from 'react'
import Title from '../Titles/title'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form  
                action="https://formspree.io/sunnysingh@yourdevvy.com"
                method="POST"
                className={styles.form}>
                    <div>
                        <label htmlFo="name">Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className={styles.formControl} 
                        placeholder="John Doe"/>
                    </div>
                    <div>
                        <label htmlFo="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className={styles.formControl} 
                        placeholder="johndoe@email.com"/>
                    </div>
                    <div>
                        <label htmlFo="message">Message</label>
                        <textarea
                        name="message"
                        id="message"
                        rows="10"
                        className={styles.formControl}
                        placeholder="Hello there"/> 
                    </div>
                    <div>
                        <input
                        type="submit"
                        value="submit here"
                        className={styles.submit}/>
                        
                    </div>
                </form>
            </div>
            
        </section>
    )
}

export default Contact
