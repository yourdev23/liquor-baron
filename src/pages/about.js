import React from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from "../components/heros/StyledHero"
import {graphql} from 'gatsby'

export default function About ({data}) {
    return (
        <Layout>
        <StyledHero img={data.aboutBcg.childImageSharp.fluid}/>
        </Layout>
    )
}

export const query = graphql `
query{
  aboutBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`