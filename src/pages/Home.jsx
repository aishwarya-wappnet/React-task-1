import React from 'react'
import Layout from '../components/layout/Layout'
import Banner from '../../public/assets/Banner/banner1.jpg'
import '../styles/HomeStyles.css'
import FoodRange from '../components/component/FoodRange'
import Search from '../components/component/Search'

const Home = () => {
  return (
    <Layout> 
      <div className="banner">
      <div className="home" style={{backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat'}}></div>
      <Search />
      </div>
      <FoodRange/>
    </Layout>
  )
}

export default Home