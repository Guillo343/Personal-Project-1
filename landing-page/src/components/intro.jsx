import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../assets/Intro.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Intro = () => {
  const arrowRef = useRef(null); // Ref for arrow button
  const scrollDistRef = useRef(null); // Ref for scroll distance trigger

  useEffect(() => {
    // GSAP ScrollTrigger Timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollDistRef.current, // Use ref instead of selector
          start: '0 0',
          end: '100% 100%',
          scrub: 1,
        },
      })
      .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
      .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
      .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
      .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
      .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
      .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
      .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

    // Arrow Button Animations
    const arrowBtn = arrowRef.current; // Use ref instead of querySelector

    const mouseEnterHandler = () => {
      gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
    };

    const mouseLeaveHandler = () => {
      gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    };

    const clickHandler = () => {
      gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
    };

    // Add event listeners
    arrowBtn.addEventListener('mouseenter', mouseEnterHandler);
    arrowBtn.addEventListener('mouseleave', mouseLeaveHandler);
    arrowBtn.addEventListener('click', clickHandler);

    // Cleanup event listeners on component unmount
    return () => {
      arrowBtn.removeEventListener('mouseenter', mouseEnterHandler);
      arrowBtn.removeEventListener('mouseleave', mouseLeaveHandler);
      arrowBtn.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <>
      <div ref={scrollDistRef} className="scrollDist"></div>
      <main>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>

          <image
            className="sky"
            xlinkHref="https://assets.codepen.io/721952/sky.jpg"
            width="1200"
            height="590"
          />
          <image
            className="mountBg"
            xlinkHref="https://assets.codepen.io/721952/mountBg.png"
            width="1200"
            height="800"
          />
          <image
            className="mountMg"
            xlinkHref="https://assets.codepen.io/721952/mountMg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud2"
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            className="mountFg"
            xlinkHref="https://assets.codepen.io/721952/mountFg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud1"
            xlinkHref="https://assets.codepen.io/721952/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud3"
            xlinkHref="https://assets.codepen.io/721952/cloud3.png"
            width="1200"
            height="800"
          />
          <text fill="#fff" x="350" y="200">
            EXPLORE
          </text>
          <polyline
            className="arrow"
            fill="#fff"
            points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
          />

          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text x="350" y="200" fill="#162a43">
              FURTHER
            </text>
          </g>

          <rect
            ref={arrowRef} // Attach ref to the arrow button
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: 'pointer' }}
          />
        </svg>
      </main>
    </>
  );
};
