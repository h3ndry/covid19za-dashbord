import React from 'react';
import BannerStyle from '../styles/bannerStyle';
import SocialDistanceIcon from './socialDistanceIcon';

export default function Banner() {
  return (
    <BannerStyle>
      <div className="text">
        <h1>
          South Africa <span>Covid-19</span>
        </h1>
        <p>
          For offocial news about covid-19 <br /> please visit the WHO website
        </p>
      </div>
      <div className="svg">
        <SocialDistanceIcon />
      </div>
    </BannerStyle>
  );
}
