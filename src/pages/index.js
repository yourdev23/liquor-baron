import React from 'react'
import Layout from '../components/layout/Layout'
import Banner from "../components/banner/banner"
import About from "../components/home/about-home"
import Services from "../components/home/services"
import StyledHero from "../components/heros/StyledHero"
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default ({data}) => {
    return (
        <Layout>
            <StyledHero home="true" img={data.LiquorB.childImageSharp.fluid}>
                <Banner 
                title="Welcome to our store" 
                info="Lsabnnsadn andnand ioanhsdolnad jnaosdnand nasdnan oansdolnasnd"
                 >
                 <AniLink fade to="/flyers" className="btn-white">
                    explore offers
                 </AniLink>
                </Banner>
                </StyledHero>
            <About />
            <Services />
        </Layout>
    )
}


export const query = graphql `
query{
  LiquorB:file(relativePath:{eq:"liqourBarrels-min.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
