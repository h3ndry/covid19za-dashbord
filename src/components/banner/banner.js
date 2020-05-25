import React from 'react';
import BannerStyle from './style';
import SocialDistanceIcon from '../socialDistanceIcon';
import { useSpring, useTrail, animated, config } from 'react-spring';

const text = ['South', 'Africa', 'Covid-19'];
const titleConfig = { mass: 10, tension: 2000, friction: 200 };

export default function Banner() {
  const fadeIn = useSpring({
    config: config.slow,
    opacity: 1,
    height: 20,
    from: { opacity: 0, height: 0 }
  })
  const trail = useTrail(text.length, {
    config: titleConfig,
    opacity: 1,
    x: 0,
    width: 9,
    from: { opacity: 0, x: -40, width: 0 },
  });
  return (
    <BannerStyle>
      <div className="text">
        <h1>

          {trail.map(({ x, width, ...rest }, index) => (
            <span
              style={{ width: `${width}rem` }}
              className="word-container">
              <animated.span
                key={text[index]}
                className="word"
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
                }}
              >
                {text[index]}
              </animated.span>
            </span>
          ))}
        </h1>
        <animated.p style={fadeIn}>
          For offocial news about covid-19, please visit the <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO</a> website
        </animated.p>
      </div>
      <div className="svg">
        <SocialDistanceIcon />
      </div>
    </BannerStyle>
  );
}
