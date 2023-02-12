// index.js

import React from 'react';

function Index() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href = "index.js">Home</a></li>
            <li><a href = "blogdex.js">Blog</a></li>
            <li><a href = "webport.js">Website Portoflio</a></li>
            <li><a href = "jspport.js">JavaScript and Python Portfolio</a></li>
            <li><a href = "about.js">About</a></li>
            <li><a href = "contact.js">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 class="name"><span class="hilight">Charlene Slimp</span></h1>
        <h1 class="name">Software Engineer</h1>
        <div id="hero">
        </div>
        <h2 class="leftie">Ultricies mi quis hendrerit dolor magna eget est lorem. Malesuada fames ac turpis egestas.</h2>
        <section id="orderedList">
          <ol>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
          </ol>
          <ol>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
          </ol>
        </section>
        <section class="carousel">
          <h2>Website Portfolio</h2>
          <div class="slides">
            <div class="slides-item slide-1" id="slide-1"><span class="goButton"><a href = "https://angry-sinoussi-7ea391.netlify.app/" target="blank">GO</a></span></div>
            <div class="slides-item slide-2" id="slide-2"><span class="goButton"><a href = "https://www.thecaregiversheart.com/" target="blank">GO</a></span></div>
            <div class="slides-item slide-3" id="slide-3"><span class="goButton"><a href = "https://brave-hawking-735dda.netlify.app/" target="blank">GO</a></span></div>
            <div class="slides-item slide-4" id="slide-4"><span class="goButton"><a href = "http://www.myappstat.com//" target="blank">GO</a></span></div>
            <div class="slides-item slide-5" id="slide-5"><span class="goButton"><a href = "https://www.richardpadgett.co.uk/" target="blank">GO</a></span></div>
          </div>
          <div class="carousel__nav">
            <a class="slider-nav" href="#slide-1">1</a>
            <a class="slider-nav" href="#slide-2">2</a>
            <a class="slider-nav" href="#slide-3">3</a>
            <a class="slider-nav" href="#slide-4">4</a>
            <a class="slider-nav" href="#slide-5">5</a>
          </div>
        </section>
        <section class="carousel">
          <h2>JavaScript and Python Portfolio</h2>
          <div class="slides">
            <div class="slides-item slide-6" id="slide-6"><span class="goButton"><a href = "https://htmlpreview.github.io/?https://github.com/EddieSavageOG/workTrafficCalculator/blob/main/calc2.html" target="blank">GO</a></span></div>
            <div class="slides-item slide-7" id="slide-7"><span class="goButton"><a href = "https://htmlpreview.github.io/?https://github.com/EddieSavageOG/NASAPictures/blob/main/index.html" target="blank">GO</a></span></div>
            <div class="slides-item slide-8" id="slide-8"><span class="goButton"><a href = "https://www.charleneslimp.com/Halloween/CountDownTimer.html" target="blank">GO</a></span></div>
            {/* <div class="slides-item slide-9" id="slide-9"></div>
            <div class="slides-item slide-10" id="slide-10"></div> */}
          </div>
          <div class="carousel__nav">
            <a class="slider-nav" href="#slide-6">1</a>
            <a class="slider-nav" href="#slide-7">2</a>
            <a class="slider-nav" href="#slide-8">3</a>
            {/* <a class="slider-nav" href="#slide-9">4</a>
            <a class="slider-nav" href="#slide-10">5</a> */}
          </div>
        </section>
        <h2 class="leftie">Ultricies mi quis hendrerit dolor magna eget est lorem. Malesuada fames ac turpis egestas.</h2>
        <section id="orderedList">
          <ol>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
            <li>Vulputate mi sit amet mauris commodo. Purus faucibus ornare suspendisse sed nisi lacus.</li>
          </ol>
        </section>




      </main>
      <footer>
        <p>2023 - Copyright by Charlene Slimp</p>
      </footer>
    </>
  );
}

export default Index
