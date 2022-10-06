import React, { useContext } from 'react'
import { useGlobalContext } from './context';
import Movies from './Movies';
import Search from './Search';


const Home = () => {

  return (
    <>
    <Search/>
    <Movies/>
    </>
  )
}

export default Home;