import React from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from "../components/heros/StyledHero"
import {graphql} from 'gatsby'
import Contact from '../components/Contact/contact.component'

export default function ContactPage ({ data }) {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid}/>
            <Contact/>
        </Layout>
    )
}
export const query = graphql `
query{
  contactBcg:file(relativePath:{eq:"contactUs.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
