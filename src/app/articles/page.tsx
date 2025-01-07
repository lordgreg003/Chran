import React from 'react'
import GetAllArticles from '../ui/components/articleComponets/GetAllArticles'
import Navbar from '../ui/components/layoutComponents/navbar'
import Footer from '../ui/components/layoutComponents/Footer'
import NewsSection from '../ui/components/homeComponents/NewsSection'

const page = () => {
  return (
    <div>
        <Navbar />
        <NewsSection />
      <GetAllArticles />
      <Footer />
    </div>
  )
}

export default page
