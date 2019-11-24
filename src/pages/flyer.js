import React, {Component} from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from "../components/heros/StyledHero"
import {graphql} from 'gatsby'
import Flyers from '../components/Flyers/flyers.component'



    export default class FlyerPage extends Component {
        render(){
            return (
                <Layout>
                    <StyledHero img={this.props.data.LiquorB.childImageSharp.fluid}/>
                    <Flyers/>
                </Layout>
            )
        }
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