import React from 'react'
import GetAllArticles from '../ui/components/articleComponets/GetAllArticles'
import Navbar from '../ui/components/layoutComponents/navbar'
import Footer from '../ui/components/layoutComponents/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
      <GetAllArticles />
      <Footer />
    </div>
  )
}

export default page
