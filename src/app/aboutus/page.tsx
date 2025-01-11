 import React from 'react';
 import CHRNAboutSection from '../ui/components/aboutComponents/CHRNAboutSection';
 import Mission from '../ui/components/aboutComponents/Mission';
import Marquee from '../ui/components/layoutComponents/Marquee';
 
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
 