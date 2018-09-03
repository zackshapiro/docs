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
            <a href={this.docUrl('parse-server/index')}>
              Parse Server Guide
            </a>
            <a href={this.docUrl('cloudcode/index')}>
              Cloud Code Guide
            </a>
            <a href={this.docUrl('rest/index')}>
              REST Guide
            </a>
            <a href={this.docUrl('js/index')}>
              JavaScript Guide
            </a>
          </div>
          <div>
            <h5>Client Guides</h5>
            <a href={this.docUrl('ios/index')}>
              iOS / macOS / tvOS Guide
            </a>
            <a href={this.docUrl('android/index')}>
              Android Guide
            </a>
            <a href={this.docUrl('dotnet/index')}>
              .Net + Xamarin Guide
            </a>
            <a href={this.docUrl('unity/index')}>
              Unity Guide
            </a>
          </div>
          <div>
            <br/>
            <a href={this.docUrl('php/index')}>
              PHP Guide
            </a>
            <a href={this.docUrl('arduino/index')}>
              Arduino Guide
            </a>
            <a href={this.docUrl('embedded_c/index')}>
              Embedded C Guide
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/parse-community">GitHub</a>
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
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
