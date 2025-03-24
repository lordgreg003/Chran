"use client";
import React, { useEffect } from 'react';

type AdBannerTypes = {
  dataAdSlug: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({ dataFullWidthResponsive, dataAdSlug, dataAdFormat }: AdBannerTypes) => {
  useEffect(() => {
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [dataAdSlug]); // Re-run if dataAdSlug changes

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8660328606992175"
      data-ad-slot={dataAdSlug}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    />
  );
};

export default AdBanner;