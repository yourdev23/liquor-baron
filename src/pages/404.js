import React from 'react'
import Layout from '../components/layout/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/banner/banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default function error() {
    return (
        <Layout>
          <header className={styles.error}>
            <Banner title="oops we can't seem to find your page">
                <AniLink fade to='/' className="btn-white">back to home page
                </AniLink>
            </Banner>
          </header>
        </Layout>
    )
}