var phrases = [
  'Mis sueños son dos. Mi primer sueño es jugar en el Mundial. Y el segundo es salir campeón de octava y lo que siga en el campeonato este',
  'Me había propuesto hacerle dos goles a Gatti, pero ahora que me dijo gordito le voy a meter cuatro',
]

module.exports = {
  phrase: getRandomPhrase
};

function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}
