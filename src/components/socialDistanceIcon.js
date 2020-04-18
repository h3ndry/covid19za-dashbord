import React from 'react';
import SVGstyle from '../styles/socialDsvg';

import Defs from './svg-jsx/defs';
import BgCloud from './svg-jsx/bgCloud';
import MiddleText from './svg-jsx/middleText';
import MiddleArrow from './svg-jsx/middleArrow';
import RightPerson from './svg-jsx/personRight';
import PersonLeft from './svg-jsx/personLeft';

export default function SocialDistanceIcon() {
  return (
    <SVGstyle className="banner-img" viewBox="0 0 710.8 383.18">
      {Defs}
      <g id="Layer_2" data-name="Layer 2">
        <g id="social-distance-svg">
          {BgCloud}
          {MiddleText}
          {MiddleArrow}
          {RightPerson}
          {PersonLeft}
        </g>
      </g>
    </SVGstyle>
  );
}
