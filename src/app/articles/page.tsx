import React from 'react'
import Marquee from '../components/layoutComponents/Marquee'
import NewsSection from '../components/homeComponents/NewsSection'
import GetAllArticles from '../components/articleComponets/GetAllArticles'
 

const page = () => {
  return (
    <div>
        <Marquee />
        <NewsSection />
      <GetAllArticles />
      
    </div>
  )
}

export default page
