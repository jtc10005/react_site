import React, { Component } from 'react';
import './landing.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

export class Landing extends Component {
  render() {
    return (
      <ParallaxProvider>
        <main>
          <Scroll />
          {/* <Gradients />
            <ParallaxWord /> */}
            <Github />
            {/* <Fullscreen /> */}
        </main>
        {/* <div class="hero-nav">
          <div class="hero-nav__inner">
            <h1>Neat Title</h1>
            <div class="hero-nav__button">
              <a href="#" class="btn" />
            </div>
          </div>
        </div>
        <div class="page-content">
          <p>
            Laws of physics, billions upon billions, radio telescope a still
            more glorious dawn awaits inconspicuous motes of rock and gas
            hydrogen atoms, across the centuries? Permanence of the stars,
            venture courage of our questions, gathered by gravity shores of the
            cosmic ocean rich in mystery tendrils of gossamer
          </p>
        </div> */}
      </ParallaxProvider>
    );
  }
}

export default Landing;

const Scroll = () => (
  <div className="scroll">
      <p>Scroll</p>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
          <polygon className="fill-3" points="167,73 83.5,298.9 0,73 "/>
          <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 "/>
      </svg>
  </div>
);

const Github = () => (
  <a href="https://github.com/jtc10005/react_site" rel="noopener" target="_blank" className="button">GitHub</a>
);