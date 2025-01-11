import React from 'react'
import GetAllArticles from '../ui/components/articleComponets/GetAllArticles'
import NewsSection from '../ui/components/homeComponents/NewsSection'
import Marquee from '../ui/components/layoutComponents/Marquee'

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
