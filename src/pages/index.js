import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout/Layout'
import SimpleHero from "../components/heros/SimpleHero"
import Banner from "../components/banner/banner"
import About from "../components/home/about-home"
import Services from "../components/home/services"


export default () => {
    return (
        <Layout>
            <SimpleHero>
                <Banner 
                title="Welcome to our store" 
                info="Lsabnnsadn andnand ioanhsdolnad jnaosdnand nasdnan oansdolnasnd"
                 >
                 <Link to="/flyers" className="btn-white">
                    explore offers
                 </Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
    )
}
