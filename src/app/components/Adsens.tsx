import Script from 'next/script';
import React from 'react'

type AdsensTypes = {
    pId: string;
}

const Adsens = ({pId} : AdsensTypes) => {
  return (
     <Script async  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`} crossOrigin='anonymous'  strategy='afterInteractive' />  )
}

export default Adsens;