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

const Backer = props => (
  <a href={`https://opencollective.com/${props.collective}/backer/${props.index}/website`} target="_blank">
    <img src={`https://opencollective.com/${props.collective}/backer/${props.index}/avatar.svg`}></img>
  </a>
)

const Sponsor = props => (
  <a href={`https://opencollective.com/${props.collective}/sponsor/${props.index}/website`} target="_blank">
    <img src={`https://opencollective.com/${props.collective}/sponsor/${props.index}/avatar.svg`}></img>
  </a>
)

const Repeat = props => {
  const list = [];
  for (let i=0; i<props.quantity; i++) {
    list.push(i);
  }
  const Component = props.Component;
  // delete props.Component;
  return (
    <div>
      {list.map((idx) => (<Component {...props} index={idx}/>))}
    </div>
  )
}

const Backers = props => (<Repeat Component={Backer} quantity={20} {...props} />)
const Sponsors = props => (<Repeat Component={Sponsor} quantity={20} {...props} />)

const PlatformDocs = props => {
  // Return empty element if no props
  // This helps keeping the alignment
  if (Object.keys(props).length == 0) {
    return (<div className="blockElement imageAlignTop threeByGridBlock"/>)
  }

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
  return (
  <div className="blockElement imageAlignTop threeByGridBlock">
  <div className="docs-platform">
  <header className="docs-platform__header">
      <span className="docs-platform__name">{props.name}</span>
      <svg className={symbolClassName}><use xlinkHref={symbol}></use></svg>
  </header>
  <ul className="docs-platform__links">
      {props.links.map((link, i) => {
        return (<li className="docs-platform__links" key={i}><a href={link.href} target="_blank">{link.title || ""}</a></li>)
      })}
  </ul>
  <footer className="docs-platform__footer">
     {footer}
  </footer>
</div></div>);
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
  [{
    name: 'Parse Server',
    symbol: 'infinity',
    links: [
      {title: 'Guide', href: '/docs/parse-server'},
      {title: 'API Reference', href: siteConfig.apis['parse-server'] },
      {title: 'Repository', href: 'https://github.com/parse-community/parse-server'},
    ],
    download: 'https://npmjs.com/package/parse-server'
  },
  {
    name: 'iOS / macOS / tvOS',
    symbol: 'apple',
    links: [
      {title: 'Guide', href: '/docs/ios'},
      {title: 'API Reference', href: siteConfig.apis.ios },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-iOS-OSX'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-iOS-OSX/releases/latest'
  },
  {
    name: 'Android',
    symbol: 'android',
    links: [
      {title: 'Guide', href: '/docs/android'},
      {title: 'API Reference', href: siteConfig.apis.android },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-Android'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-Android/releases/latest'
  }],
  [ {
    name: 'JavaScript',
    symbol: 'javascript',
    links: [
      {title: 'Guide', href: '/docs/js'},
      {title: 'API Reference', href: siteConfig.apis.js },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-JS'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-JS/releases/latest'
  },
  {
    name: '.Net + Xamarin',
    symbol: 'dotnet',
    links: [
      {title: 'Guide', href: '/docs/dotnet'},
      {title: 'API Reference', href: siteConfig.apis.dotnet },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-dotNet'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-dotNET/releases/latest'
  },
  {
    name: 'Unity',
    symbol: 'unity',
    links: [
      {title: 'Guide', href: '/docs/unity'},
      {title: 'API Reference', href: siteConfig.apis.dotnet },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-dotNet'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-dotNET/releases/latest'
  }],
  [{
    name: 'PHP',
    symbol: 'php',
    links: [
      {title: 'Guide', href: '/docs/php'},
      {title: 'API Reference', href: siteConfig.apis.php },
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-PHP'},
    ],
    download: 'https://github.com/parse-community/parse-php-sdk/releases/latest'
  },
  {
    name: 'Arduino',
    symbol: 'arduino',
    links: [
      {title: 'Guide', href: '/docs/arduino'},
      {title: 'Repository', href: 'https://github.com/parse-community/Parse-SDK-Arduino'},
    ],
    download: 'https://github.com/parse-community/Parse-SDK-Arduino/releases/latest'
  },
  {
    name: 'Embedded C',
    symbol: 'embedded_c',
    links: [
      {title: 'Guide', href: '/docs/embedded_c'},
      {title: 'Repository', href: 'https://github.com/parse-community/parse-embedded-sdks'},
    ],
    download: 'https://github.com/parse-community/parse-embedded-sdks/releases/latest'
  }],
  [{
    name: 'Cloud Code',
    symbol: 'cloudcode',
    links: [
      {title: 'Guide', href: '/docs/cloudcode'},
    ]
  },
  {
    name: 'REST API',
    symbol: 'rest',
    links: [
      {title: 'Guide', href: '/docs/rest'},
    ],
  },{
    name: 'Parse Dashboard',
    symbol: 'atom',
    links: [
      {title: 'Repository', href: 'https://github.com/parse-community/parse-dashboard'},
    ],
  }]
]

class Index extends React.Component {
  render() {
    const language = this.props.language || '';
    const links = [];
    return (
      <div>
        <div className="copy-block">
          <h3>The more you know.</h3>
          <p className="margin-top-10">We’ve got comprehensive guides for each platform that should help out with anything you need. You can also take a look at the detailed API references and tutorials for a better idea of how it all comes together.</p>
          <p className="margin-top-10">You can set up your own <a href="https://github.com/parse-community/parse-server">Parse server</a> and <a href="https://github.com/parse-community/parse-dashboard">dashboard</a> or use a service that hosts Parse for you.</p>
        </div>
        <div className="docs-platforms">
          {platformDocs.map((row, i) =>
            (<div className="gridBlock" key={i}>
              {row.map((doc, j) => (<PlatformDocs {...doc} key={`doc_platform_${i}-${j}`} />))}
            </div>))}
        </div>
        <div className="docs-platforms">
          <h3>Backers</h3>
          <p>Support us with a monthly donation and help us continue our activities. <a href="https://opencollective.com/parse-server#backer">Become a backer</a></p>
          <div className="gridBlock">
            <Backers collective="parse-server" />
          </div>
          <h3>Sponsors</h3>
          <p>Become a sponsor and get your logo on our README on Github with a link to your site. <a href="https://opencollective.com/parse-server#sponsor">Become a sponsor</a></p>
          <div className="gridBlock">
            <Sponsors collective="parse-server" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
