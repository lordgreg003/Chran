"use client";
import React, { useEffect } from 'react';

type AdBannerTypes ={
  dataAdSlug : string;
  dataAdFormat : string;
  dataFullWidthResponsive : boolean;
}

const AdBanner = ({dataFullWidthResponsive,dataAdSlug,dataAdFormat} : AdBannerTypes) => {
  useEffect(() => {
    try {
      ((window as typeof window & { adsbygoogle: unknown[] }).adsbygoogle = 
        (window as typeof window & { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
    } catch (error) {
      console.log(error)
      
    }
  }, []);
  return (
    <ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-8660328606992175"
  // data-ad-slot="1399865081"
  data-ad-slot={dataAdSlug}
  data-ad-format={dataAdFormat}
  data-full-width-responsive={dataFullWidthResponsive.toString()}
></ins>
  )
}

export default AdBanner