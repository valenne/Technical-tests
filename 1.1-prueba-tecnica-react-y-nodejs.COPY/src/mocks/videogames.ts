import { type Video_Games_props } from '../types/general.types'

export const VIDEOGAMES_MOCK: Video_Games_props[] = [
  {
    id: crypto.randomUUID(),
    name: 'The Legend of Zelda: Breath of the Wild',
    date: '2017-03-03',
    url: 'https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/',
    descripcion:
      'Un juego de acción y aventura de mundo abierto en el que los jugadores exploran un vasto reino lleno de santuarios, secretos y desafíos. Los jugadores usan varias armas, herramientas y habilidades para derrotar a los enemigos, resolver acertijos y descubrir los misterios que rodean a la Hyrule arruinada.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Red Dead Redemption 2',
    date: '2018-10-26',
    url: 'https://www.rockstargames.com/reddeadredemption2/',
    descripcion:
      'Un juego de acción y aventura de mundo abierto ambientado en el Salvaje Oeste. Los jugadores asumen el papel de Arthur Morgan, un forajido y miembro de la banda de Van der Linde, mientras roban bancos, luchan contra bandas rivales y lidian con los tiempos cambiantes en la Frontera estadounidense.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Hades',
    date: '2020-09-17',
    url: 'https://www.supergiantgames.com/hades/',
    descripcion:
      'Un juego de acción y mazmorras roguelike en el que los jugadores controlan a Zagreus, el hijo de Hades, mientras intenta escapar del inframundo griego. Los jugadores luchan contra criaturas y dioses mitológicos, adquieren poderosos dones y habilidades, y progresan a través de una historia llena de mitología griega.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Elden Ring',
    date: '2022-02-25',
    url: 'https://www.bandainamcoent.com/elden-ring/',
    descripcion:
      'Un juego de rol de acción ambientado en un vasto mundo abierto lleno de enemigos desafiantes, secretos ocultos y épicas batallas de jefes. Los jugadores crean su propio personaje y forjan su propio camino a través de las Tierras Intermedias, desvelando los misterios del Anillo de Elden y eligiendo su destino.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Stray',
    date: '2023-07-19',
    url: 'https://www.straygame.com/',
    descripcion:
      'Un juego de aventura en tercera persona en el que los jugadores controlan a un gato callejero que explora una ciudad ciberpunk post-apocalíptica. Los jugadores pueden interactuar con el entorno, resolver acertijos y desentrañar los misterios que rodean a la ciudad y sus habitantes.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Starfield',
    date: '2023-11-11',
    url: 'https://www.bethesda.net/es/game/starfield',
    descripcion:
      'Un juego de rol de acción ambientado en un vasto universo en el que los jugadores pueden explorar planetas, completar misiones y crear su propio destino.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Hogwarts Legacy',
    date: '2023-12-06',
    url: 'https://www.hogwartslegacy.com/',
    descripcion:
      'Un juego de rol de acción ambientado en el mundo mágico de Harry Potter. Los jugadores asumen el papel de un estudiante de Hogwarts que puede elegir su propia casa, aprender hechizos y participar en batallas mágicas.'
  }
]
