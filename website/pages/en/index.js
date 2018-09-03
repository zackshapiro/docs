/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

const logo = (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 152 60" style="enable-background:new 0 0 152 60;" xmlSpace="preserve">
<g>
<path class="line one" d="M23.072,39.678c-0.011,3.348-2.395,4.615-4.909,4.615c-2.851,0-4.541-1.701-4.541-4.357
 c0-2.964,2.031-4.667,5.35-4.725h13.611c6.428,0.079,10.137-5.391,10.137-9.953c0-4.598-3.485-9.598-9.622-9.842
 c-6.083-0.242-9.99,5.281-9.99,11.167v3.863"/>
<path class="line two" d="M23.072,39.678c-0.011,3.348-2.395,4.615-4.909,4.615c-2.851,0-4.541-1.701-4.541-4.357
 c0-2.964,2.031-4.667,5.35-4.725h13.611c6.428,0.079,10.137-5.391,10.137-9.953c0-4.598-3.485-9.598-9.622-9.842
 c-6.083-0.242-9.99,5.281-9.99,11.167v3.863"/>
<path class="line three" d="M23.072,39.678c-0.011,3.348-2.395,4.615-4.909,4.615c-2.851,0-4.541-1.701-4.541-4.357
 c0-2.964,2.031-4.667,5.35-4.725h13.611c6.428,0.079,10.137-5.391,10.137-9.953c0-4.598-3.485-9.598-9.622-9.842
 c-6.083-0.242-9.99,5.281-9.99,11.167v3.863"/>
<path class="st1" d="M151.88,31.106c0-4.561-2.575-7.835-7.173-7.872c-5.665-0.037-9.197,4.12-9.197,10.484v0.11
 c0,6.033,3.863,9.601,9.601,9.601c1.839,0,4.083-0.405,5.739-1.177v-3.568c-1.839,0.956-3.752,1.398-5.408,1.398
 c-3.568,0-6.07-1.803-6.18-5.959h12.36C151.807,33.056,151.88,32.026,151.88,31.106z M148.312,31.07h-8.829
 c0.625-3.053,2.354-4.745,4.966-4.745c2.575,0,3.863,1.729,3.863,4.561V31.07z"/>
<path class="st1" d="M125.725,34.712l0.405,0.147c2.869,1.03,3.531,1.655,3.531,2.906c0,1.471-0.993,2.428-3.458,2.428
 c-1.986,0-4.12-0.662-6.364-1.692v3.752c1.803,0.699,4.12,1.177,6.364,1.177c4.819,0,7.21-2.428,7.21-5.812
 c0-2.943-1.471-4.525-5.408-5.959l-0.405-0.147c-3.127-1.14-3.752-1.655-3.752-2.869c0-1.361,0.956-2.281,3.237-2.281
 c1.839,0,3.642,0.589,5.408,1.435v-3.531c-1.582-0.625-3.348-1.03-5.26-1.03c-4.598,0-7.1,2.575-7.1,5.886
 C120.134,31.695,121.679,33.24,125.725,34.712"/>
<path class="st1" d="M110.863,29.892c1.288-2.023,3.09-3.016,5.26-3.016c0.773,0,1.508,0.11,2.17,0.331v-3.384
 c-0.625-0.258-1.361-0.405-2.134-0.405c-2.281,0-4.01,1.03-5.518,3.09l-0.258-2.869h-3.164v19.386h3.642V29.892z"/>
<path class="st1" d="M96.481,23.197c-2.281,0-4.672,0.699-6.474,1.692v3.605c2.023-1.251,4.378-2.023,6.254-2.023
 c2.612,0,3.679,1.14,3.679,3.274v1.619c-5.334,0.147-8.461,1.03-10.116,2.685c-1.177,1.14-1.692,2.685-1.692,4.267
 c0,3.274,2.354,5.15,5.702,5.15c2.244,0,4.378-0.92,6.327-2.796l0.221,2.354h3.164V30.003
 C103.544,25.405,101.263,23.197,96.481,23.197z M99.938,37.728c-1.471,1.619-3.2,2.722-5.297,2.722
 c-1.729,0-2.833-0.883-2.833-2.428c0-2.281,1.876-3.642,8.13-3.826V37.728z"/>
<path class="st1" d="M77.609,17.643h-8.571v25.383h3.826v-8.314h4.745c5.923,0,9.491-3.164,9.491-8.498V26.14
 C87.1,20.806,83.532,17.643,77.609,17.643z M83.311,26.214c0,3.421-1.986,5.04-5.444,5.04h-5.003V21.101h5.04
 c3.421,0,5.408,1.619,5.408,5.04V26.214z"/>
<path class="st1" d="M27.838,2.192C12.204,2.192-0.12,14.589-0.12,30.15c0,15.597,12.323,27.958,27.958,27.958
 c15.634,0,27.958-12.36,27.958-27.958C55.795,14.589,43.472,2.192,27.838,2.192z M32.473,36.955H18.752
 c-1.986,0-3.164,1.214-3.164,3.017c0,1.582,1.067,2.722,2.612,2.722c1.766,0,2.796-1.214,2.906-3.016h4.01
 c-0.184,4.341-2.906,6.658-6.953,6.658c-3.789,0-6.585-2.575-6.585-6.401c0-3.973,2.98-6.769,7.394-6.769h13.611
 c4.598,0,8.093-3.348,8.093-7.909c0-4.598-3.127-7.799-7.578-7.799c-4.414,0-7.946,3.237-7.946,9.123v3.863h-4.046v-3.863
 c0-7.872,5.076-12.986,12.066-12.986c6.695,0,11.551,4.782,11.551,11.588C44.723,32.026,39.499,36.955,32.473,36.955z"/>
</g>
</svg>)

const PlatformDocs = props => {
  const footer = !!props.download ? 
    ( <a href={props.download} className="btn btn--outline button">Latest Downloads</a>) : '';
  const symbol = `/img/symbols.svg#${props.symbol}`;
  let name = props.symbol;
  if (name === 'javascript') {
    name = 'js';
  } else if (name === 'apple') {
    name = 'osx';
  }
  const symbolClassName = `icon icon-${name}`;
  return (<div className="docs-platform">
  <header className="docs-platform__header">
      <span className="docs-platform__name">{props.name}</span>
      <svg className={symbolClassName}><use xlinkHref={symbol}></use></svg>
  </header>
  <ul className="docs-platform__links">
      {props.links.map((link, i) => {
        return (<li className="docs-platform__links" key={i}><a href={link.href}>{link.title}</a></li>)
      })}
  </ul>
  <footer className="docs-platform__footer">
     {footer}
  </footer>
</div>);
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const platformDocs = [
  {
    name: 'Parse Server',
    symbol: 'infinity',
    links: [
      {title: 'Guide', href: '/docs/parse-server/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/parse-server/api/master'}
    ],
    download: 'https://npmjs.com/package/parse-server'
  },
  {
    name: 'iOS / macOS / tvOS',
    symbol: 'apple',
    links: [
      {title: 'Guide', href: '/docs/ios/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/Parse-SDK-iOS-OSX/api'}
    ],
    download: 'https://github.com/parse-community/Parse-SDK-iOS-OSX/releases/latest'
  },
  {
    name: 'Android',
    symbol: 'android',
    links: [
      {title: 'Guide', href: '/docs/android/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/Parse-SDK-Android/api'}
    ],
    download: 'https://github.com/parse-community/Parse-SDK-Android/releases/latest'
  },
  {
    name: 'JavaScript',
    symbol: 'javascript',
    links: [
      {title: 'Guide', href: '/docs/js/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/Parse-SDK-JS/api/'}
    ],
    download: 'https://github.com/parse-community/Parse-SDK-JS/releases/latest'
  },
  {
    name: '.Net + Xamarin',
    symbol: 'dotnet',
    links: [
      {title: 'Guide', href: '/docs/dotnet/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/Parse-SDK-dotNET/api'}
    ],
    download: 'https://github.com/parse-community/Parse-SDK-dotNET/releases/latest'
  },
  {
    name: 'Unity',
    symbol: 'unity',
    links: [
      {title: 'Guide', href: '/docs/unity/index'},
      {title: 'API Reference', href: 'https://parseplatform.org/Parse-SDK-dotNET/api'}
    ],
    download: 'https://github.com/parse-community/Parse-SDK-dotNET/releases/latest'
  },
  {
    name: 'PHP',
    symbol: 'php',
    links: [
      {title: 'Guide', href: '/docs/php/index'},
    ],
    download: 'https://github.com/parse-community/parse-php-sdk/releases/latest'
  },
  {
    name: 'Arduino',
    symbol: 'arduino',
    links: [
      {title: 'Guide', href: '/docs/arduino/index'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-Arduino/releases/latest'
  },
  {
    name: 'Embedded C',
    symbol: 'embedded_c',
    links: [
      {title: 'Guide', href: '/docs/embedded_c/index'},
    ],
    download: 'https://github.com/parse-community/parse-embedded-sdks/releases/latest'
  },
  {
    name: 'Cloud Code',
    symbol: 'cloudcode',
    links: [
      {title: 'Guide', href: '/docs/cloudcode/index'},
    ]
  },
  {
    name: 'REST API',
    symbol: 'rest',
    links: [
      {title: 'Guide', href: '/docs/embedded_c/index'},
    ],
  }
]

class Index extends React.Component {
  render() {
    const language = this.props.language || '';
    const links = [];
    return (
      <div>
        <div className="container padding-top-40 padding-bottom-50">
          <div className="copy-block">
            <h3 className="h3 h3--blue margin-bottom-10">The more you know.</h3>
            <p className="margin-top-10">We’ve got comprehensive guides for each platform that should help out with anything you need. You can also take a look at the detailed API references and tutorials for a better idea of how it all comes together.</p>
            <p className="margin-top-10">You can set up your own <a href="https://github.com/parse-community/parse-server">Parse server</a> and <a href="https://github.com/parse-community/parse-dashboard">dashboard</a> or use a service that hosts Parse for you.</p>
          </div>
          <div className="docs-platforms">
            {platformDocs.map((doc, i) => (<PlatformDocs {...doc} key={`doc_platform_${i}`} />))}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
