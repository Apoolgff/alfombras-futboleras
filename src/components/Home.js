import React from 'react'
import Hero from './home-components/Hero'
import Services from './Services'
import './Home.css'
import Blocks from './home-components/Blocks'
import Hgallery from './home-components/Hgallery'
import Hus from './home-components/Hus'
import Reviews from './home-components/Reviews'

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Blocks></Blocks>
            <Hgallery></Hgallery>
            <Hus></Hus>
            <Reviews></Reviews>
            <Services/>
        </>
    )
}

export default Home