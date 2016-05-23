var names   = require('./names.json');
var phrases = require('./phrases.json');

module.exports = {
  name:   name,
  phrase: phrase
};

function phrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function name() {
  return names[Math.floor(Math.random() * names.length)];
}
