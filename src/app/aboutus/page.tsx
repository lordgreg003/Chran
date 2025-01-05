 import React from 'react';
import Navbar from '../ui/components/layoutComponents/navbar';
import CHRNAboutSection from '../ui/components/aboutComponents/CHRNAboutSection';
import Footer from '../ui/components/layoutComponents/Footer';
import Mission from '../ui/components/aboutComponents/Mission';
 
 const page = () => {
   return (
     <div>
       <Navbar />
       
      <Mission />
      <CHRNAboutSection />
      <Footer />
     </div>
   )
 }
 
 export default page
 