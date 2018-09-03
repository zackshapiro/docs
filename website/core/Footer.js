/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Parse Server Guides</h5>
            <a href={this.docUrl('parse-server/getting-started')}>
              Parse Server Guide
            </a>
            <a href={this.docUrl('cloudcode/getting-started')}>
              Cloud Code Guide
            </a>
            <a href={this.docUrl('rest/getting-started')}>
              REST Guide
            </a>
            <a href={this.docUrl('js/getting-started')}>
              JavaScript Guide
            </a>
          </div>
          <div>
            <h5>Client Guides</h5>
            <a href={this.docUrl('ios/getting-started')}>
              iOS / macOS / tvOS Guide
            </a>
            <a href={this.docUrl('android/getting-started')}>
              Android Guide
            </a>
            <a href={this.docUrl('dotnet/getting-started')}>
              .Net + Xamarin Guide
            </a>
            <a href={this.docUrl('unity/getting-started')}>
              Unity Guide
            </a>
          </div>
          <div>
            <br/>
            <a href={this.docUrl('php/getting-started')}>
              PHP Guide
            </a>
            <a href={this.docUrl('arduino/getting-started')}>
              Arduino Guide
            </a>
            <a href={this.docUrl('embedded_c/getting-started')}>
              Embedded C Guide
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/prse-community">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/parse-community/parse-server/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
