import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import "./Home.css"
import PropertyList from '../../components/propertyList/propertyList'
import FeaturedProperties from '../../components/featuredProperty/FeaturedProperties'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header /> 
      <div className='homeContainer'>
       <Featured/> 
       <h1 className="homeTitle">Browse Properties</h1> 
       <PropertyList/>

       <FeaturedProperties/>
      </div>  
    </div>
  )
}

export default Home
