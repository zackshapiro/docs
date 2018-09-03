const fs = require('fs');
const path = require('path');
const CWD = process.cwd();

function docsPath() {
  return require(`${CWD}/siteConfig`).customDocsPath || 'docs';
}

function advanceTill(element) {

}

function getNextTemplateRange(state, startPos) {
  var pos = startPos || state.pos;
  var src = state.src.trim();
  var start;
  var end;
  while (src.charCodeAt(pos) !== 123 
    && src.charCodeAt(pos+1) !== 37
    && pos != state.posMax) {
    pos++
  }

  if (pos + 2 > state.posMax) {
    return false;
  }
  start = pos;
  pos += 2;

  while (src.charCodeAt(pos) !== 37 
    && src.charCodeAt(pos+1) !== 125
    && pos != state.posMax) {
    pos++
  }

  if (pos+2 > state.posMax) {
    return false;
  }
  end = pos+2;
  return { start, end };
}

function getTemplateString(state, advance = true, startPos) {
  const positions = getNextTemplateRange(state, startPos);
  if (!positions) {
    return;
  }
  const {
    start, end
  } = positions
  if (advance) {
    state.pos = end;
  }
  return { block: state.src.slice(start, end), start, end };
}

module.exports = function (md) {
  const variables = {};
  md.inline.ruler.push('template', function(state) {
    const template = getTemplateString(state);
    if (!template) {
      return;
    }
    const { block, start, end } = template;
    var components = block.split(' ');
    if (components[1] === 'declare') {
      const assignment = components[2].split('=');
      const key = assignment[0];
      const value =  (function() {
        'use strict';
        return eval(assignment[1]);
      }());
      variables[key] = value;
      state.push({
        type: 'template',
        level: state.level,
        content: { declare: components[2] }
      });
    } else if (components[1] === 'if') {
      const stmt = components.slice(2, components.length - 1).join(' ');
      const res = (function() {
        'use strict';
        let evaledString = '';
        Object.keys(variables).forEach((key) => {
          let value = variables[key];
          if (typeof value === 'string') {
            value = `'${value}'`;
          }
          evaledString += `var ${key} = ${value};\n`;
        });
        evaledString += stmt;
        return eval(evaledString);
      }());
      state.push({
        type: 'template',
        level: state.level,
        content: { ifstatement: true, shouldShow: res }
      });
    } else if (components[1] === 'endif') {
      state.push({
        type: 'template',
        level: state.level,
        content: { endif: true }
      });
    } /* else if (components[1] === 'include') {
      const file = components[2];
      let variables;
      if (components.length == 5) {
        variables = components[3];
      }
      const token = {
        type: "template",
        level: state.level,
        content: { import: file, variables }
      };
      state.pos = end;
      state.push(token);
    } */ else {
      return false;
    }
    return true;
  });
  var allVariables = [];
  md.renderer.rules.template = function(tokens, idx, options) {
    const result = tokens.map((token) => {
      if (token.type !== 'template') {
        return;
      }
      var variables = token.content.variables;
      if (token.content.ifstatement) {
        if (!token.content.shouldShow) {
          return '<div style="display: none;">';
        } else {
          return '<div>';
        }
      }
      if (token.content.endif) {
        return '</div>';
      }
      /* if (token.content.import) {
        try {
          var contentData = fs.readFileSync(path.resolve(CWD, '../', docsPath(),  token.content.import));
        } catch (e) {
          return '';
        }
        var contents = contentData.toString('utf8');
        if (variables) {
          allVariables.push(variables);
          // contents = '{% declare '+variables+' %}\n'+contents;
        }
        return renderMarkdown(contents);
      } */
    }).join('');
    return result;
  }
}