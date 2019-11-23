import React from 'react'
import Layout from '../components/layout/Layout'
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/banner/banner'


export default function error() {
    return (
        <Layout>
          <header className={styles.error}>
            <Banner title="oops we can't seem to find your page">
                <Link to='/' className="btn-white">back to home page
                </Link>
            </Banner>
          </header>
        </Layout>
    )
}