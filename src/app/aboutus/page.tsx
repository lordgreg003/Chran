 import React from 'react';
import Marquee from '../components/layoutComponents/Marquee';
import Mission from '../components/aboutComponents/Mission';
import CHRNAboutSection from '../components/aboutComponents/CHRNAboutSection';
 
 
 const page = () => {
   return (
     <div>
     <Marquee />
      <Mission />
      <CHRNAboutSection />
      
     </div>
   )
 }
 
 export default page
 