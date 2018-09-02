const fs = require('fs');
const path = require('path');
const CWD = process.cwd();

function docsPath() {
  return require(`${CWD}/siteConfig`).customDocsPath || 'docs';
}

module.exports = function (md) {
  md.inline.ruler.push('supportInclude', function(state) {
    var pos = state.pos;
    var marker = state.src.charCodeAt(pos);
    if (marker !== 123 /*'{'*/) {
      return false;
    }
    pos++;
    marker = state.src.charCodeAt(pos);
    if (marker !== 37 /*'%'*/) {
      return false;
    }
    var src = state.src.trim();
    var file = src.split(' ')[1];
    var token = {
      type: "supportInclude",
      level: state.level,
      content: file
    };
  
    state.push(token);
    return false;
  });
  md.renderer.rules.supportInclude = function(tokens, idx, options) {
    var renderMarkdown = require('docusaurus/lib/core/renderMarkdown');
    var contents = fs.readFileSync(path.resolve(CWD, '../', docsPath(),  tokens[0].content));
    return renderMarkdown(contents.toString('utf8'));
  }
}