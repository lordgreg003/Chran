 import React from 'react'

type AdsensTypes = {
    pId: string;
}

const Adsens = ({pId} : AdsensTypes) => {
  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
        crossOrigin="anonymous"
      />
    </>
  );
}

export default Adsens;