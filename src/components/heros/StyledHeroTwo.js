import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledHeroTwo = ({img,className,children,home}) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHeroTwo)`
    min-height: ${props => (props.home? "calc(100vh - 62px)" :
    "100vh")}; 
    background: ${props => 
     props.home
     ? "linear-gradient(rgba(201, 4, 4, 0.488),rgba(0, 0, 0, 0.4))"
      :"none"};
    background-position:center;
    background-repeat: no-repeat; 
    opacity: 1!important;
    display:flex;
    justify-content:center;
    align-items:center;


`