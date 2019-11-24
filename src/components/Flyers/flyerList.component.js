import React, {Component} from 'react'
import styles from '../../css/items.module.css'
import Flyer from './flyer.component'
import Title from '../Titles/title'


export default class FlyersList extends Component {
    state={
        flyers:[],
        sortedFlyers:[] 
    }

    componentDidMount() {
        this.setState({
            flyers:this.props.flyers.edges,
            sortedFlyers:this.props.flyers.edges,
        })
    }


    render () {
        return (
           <section className={styles.flyers}>
                <Title title="our" subtitle="flyers"/>
                <div className={styles.center}>
                    {
                        this.state.sortedFlyers.map(({ node }) => {
                            return <Flyer key={node.contentful_id} flyer={node}/>
                        })}
                </div>
           </section>
        )
    }
}