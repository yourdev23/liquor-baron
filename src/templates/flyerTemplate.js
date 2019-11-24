import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import StyledHeroTwo from '../components/heros/StyledHeroTwo'




export const flyerTemplate = ({data}) => {
    const{
        image,
    } = data.contentfulFlyer
    

    
    const [mainImage] = image
 

    return (
       <Layout>
        <StyledHeroTwo img={mainImage.fluid}/>
       </Layout>
    )
}




export const query = graphql`
query($slug:String!) {
contentfulFlyer(slug:{eq:$slug}){
      name
      date	 (formatString:"dddd MMMM do, YYYY" )
      endDate(formatString:"dddd MMMM do, YYYY" )
      description {
        description
      }
      image{
          fluid{
              src
          }
      }
    }
  }`

export default flyerTemplate