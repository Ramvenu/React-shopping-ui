import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collection from '../Components/Collection'
import Footer from '../Components/Footer'
import {Gents,Ladies} from '../data'
import Womensfashion from '../Components/Womensfashion'

const Mainpage = () => {

const [gentsfashion,setGentsfashion] = useState(Gents)
const [ladiesfashion, setLadiesfashion] = useState(Ladies)


  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsfashion={gentsfashion}/>
      <Womensfashion ladiesfashion = {ladiesfashion}/>
      <Footer/>
    </div>
  )
}

export default Mainpage
