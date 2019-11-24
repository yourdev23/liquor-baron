import React from 'react'
import FlyerList from './flyerList.component'
import {useStaticQuery, graphql} from 'gatsby'

const getFlyers = graphql`
query{
    flyers:allContentfulFlyer{
      edges{
        node{
          name
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

const Flyer = () => {
    const {flyers} = useStaticQuery(getFlyers);
    return (
           <FlyerList flyers={flyers} />
    )
}

export default Flyer