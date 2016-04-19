var phrases = require('./phrases.json');

module.exports = {
  phrase: phrase
};

function phrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}
