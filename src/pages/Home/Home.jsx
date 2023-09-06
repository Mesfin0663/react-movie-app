import React from 'react'
import Header from '../../components/header/Header'
import TrendingVideos from '../../components/trending/TrendingVideos'
import Movies from '../movies/Movies'

function Home() {
  return (
    <>
            <Header/>
            <TrendingVideos/>
            <Movies/>
    </>
  )
}

export default Home
