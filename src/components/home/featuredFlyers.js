import React from 'react'
import Flyer from '../Flyers/flyer.component'
import {useStaticQuery, graphql} from "gatsby"
import Title from '../Titles/title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedFlyers = graphql`
query{
  featuredFlyers:allContentfulFlyer(filter:{current:{eq:false}}){
    edges{
      node{
        name
        date
        endDate
        description{
          description
        }
        slug
        contentful_id
        image{
          fluid{
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
` 


const FeaturedFlyers = () => {
    const response = useStaticQuery(getFeaturedFlyers);
    const flyers = response.featuredFlyers.edges;
    
    return (
        <section className={styles.flyers}>
            <Title title="featured" subtitle="flyers"/>
            <div className={styles.center}>
                {flyers.map(({node}) => {
                    return <Flyer key={node.contentful_id} flyer={node}/>
                    })}
            </div>
            <AniLink fade to="/flyers" className="btn-primary">
                 All Flyers
            </AniLink>
        </section>
    )
}

export default FeaturedFlyers
