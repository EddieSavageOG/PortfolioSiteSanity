import React from 'react';
import Head from 'next/head';
import  './styles.css';
// import Navbar from './Navbar';
// import HomePage from './homepage.js';
// import About from './About/index.js';
// import Contact from './Contact/index.js';
// import WebsitePortfolio from './WebsitePortfolio';
// import JavaScriptPortfolio from './JavascriptPortfolio';
// import PythonPortfolio from './PythonPortfolio';


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Charlene Slimp | Software Engineer</title>
        {/* <link rel="stylesheet" href="homepage.css" />  */}
      </Head>
      <Component {...pageProps} />
    </>
    
  );
};

export default App;