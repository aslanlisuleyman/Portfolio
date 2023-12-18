import React from 'react'
import './Home.css'
import HomeHeader from '../../../components/Site/HomeHeader/HomeHeader'
import Slider from '../../../components/Site/Sliders/Slider'
import Static from '../../../components/Site/Static/Static'
import Cards from '../../../components/Site/Cards/Cards'
import Cards2 from '../../../components/Site/Cards2/Cards2'
import ChildrenBook from '../../../components/ChildrenBook/ChildrenBook'
import ArtsBook from '../../../components/ArtsBook/ArtsBook'
import Card4 from '../../../components/Site/Card4/Card4'
import Section from '../../../components/Site/Section/Section'
import Carousel from '../../../components/Site/Carousell/Carousel'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <HomeHeader />
      <Slider />
      <Static />
      <Cards />
      <Cards2 />
      <Section />
      <ChildrenBook />
      <ArtsBook />
      <Card4 />
      <Carousel />
    </div>

  )
}

export default Home