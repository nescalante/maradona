var phrases = [
  'Mis sueños son dos. Mi primer sueño es jugar en el Mundial. Y el segundo es salir campeón de octava y lo que siga en el campeonato este',
  'Me había propuesto hacerle dos goles a Gatti, pero ahora que me dijo gordito le voy a meter cuatro',
  'Fue la mano de Dios',
  'Si me muero, quiero volver a nacer y quiero ser futbolista. Y quiero volver a ser Diego Armando Maradona. Soy un jugador que le ha dado alegría a la gente y con eso me basta y me sobra',
  'No quiero dramatizar, pero creeme que me cortaron las piernas',
  'La bronca es mi combustible',
  'Me teñí un pedacito de rubio, en repudio a los pelicortis',
  'A Toresani le dije en la cancha que vivo en Segurola y Habana 4310 séptimo piso. Y vamos a ver si me dura treinta segundos',
  'Passarella tiene que entender que la historia del fútbol argentino se escribió con pelo largo',
  'Pase lo que pase y dirija quien dirija, la camiseta número 10 será siempre mía',
  'Pensé que venía Berlusconi y me encontré con el cartonero Báez',
  'Yo quería ir a Estados Unidos, pero el cabeza de termo de Clinton no me deja entrar',
  'El otro día jugué un rato al fútbol y me di cuenta que tengo menos piernas que una foto carnet',
  'Si entreno todos los días, me desgarro hasta el hombro',
  'A Grondona se le escapó la tortuga',
  'El doping de Maradona es como el PRODE: positivo, negativo, positivo, positivo. Hasta creo que hay empate.',
  'Hoy no hablo muchachos. Tengo menos palabras que un telegrama',
  'Te voy a contar un secreto Shilton: fue con la mano',
  'En Cuba estoy más solo que Kung Fú',
  'Hasta ahora he vivido cuarenta años pero que valen por setenta. Realmente me sucedió de todo. De un golpe salí de Fiorito y fui a parar a la cima del universo y allí me las tuve que arreglar yo solo',
  'Verón en la selección tiene más faltas que Gianinna en el colegio',
  'Pelé debutó con un pibe',
  'Coppola es vivísimo. Fuma debajo del agua',
  'Pelé no puede digerir que yo le haya ganado por 52.000 votos la elección de la FIFA al mejor jugador del siglo veinte',
  'A veces me agarran bajones, pero pongo El Chavo y se me pasa todo',
  'Yo me equivoqué y pagué, pero la pelota no se mancha',
  'Llegar al área y no poder patear al arco es como bailar con tu hermana',
  'Cuando vuelvo a ver el segundo gol a los ingleses me parece mentira',
  'En mi puta vida pensé que iba a estar en Cuba jugando al golf',
  'Yo crecí en un barrio privado de Buenos Aires. Privado de luz, de agua, de teléfono.',
  'Si para ser técnico de la selección hay que hacer lobby y hablar con periodistas como Niembro, yo abandono. Renuncio al cargo',
  '¿Qué pasa? ¿Nos está cambiando el paladar que ahora festejamos haber llegado a los cuartos de final?',
  'A los que no creían en este equipo, con el perdón de las damas, que la chupen. Que la sigan chupando',
  'Vos también la tenés adentro'
]

module.exports = {
  phrase: getRandomPhrase
};

function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}
