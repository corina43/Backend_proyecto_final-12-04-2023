'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Productos', [
	{
  titulo: 'En los zapatos de Valeria',
  autor: 'Elísabet Benavent',
  descripcion: 'Una novela que narra la vida de Valeria y sus amigas, explorando sus relaciones amorosas y la amistad.',
  fecha_publicacion: '2013-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  poster_path: "https://pictures.abebooks.com/isbn/9788490628973-es.jpg",
},
{
  titulo: 'Valeria en el espejo',
  autor: 'Elísabet Benavent',
  descripcion: '"Valeria enfrenta una encrucijada en su vida y debe decidir si seguir con su matrimonio o explorar nuevas oportunidades de amor.',
  fecha_publicacion: '2013-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  poster_path:"https://pictures.abebooks.com/isbn/9788483655382-us.jpg"
},
{
  titulo: "Valeria en blanco y negro",
  autor: "Elísabet Benavent",
  descripcion:
    "La historia de Valeria continúa mientras enfrenta desafíos en su matrimonio, sus amigas y su vida laboral.",
  fecha_publicacion: "2013-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Romance",
  poster_path: "https://pictures.abebooks.com/isbn/9788490628980-es-300.jpg",
},
{
  titulo: "Valeria al desnudo",
  autor: "Elísabet Benavent",
  descripcion:
    "Valeria lucha con la verdad sobre su relación y encuentra un nuevo amor que pone a prueba sus valores y su amistad con sus amigas.",
  fecha_publicacion: "2013-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Romance",
  poster_path: "https://m.media-amazon.com/images/I/41d7wWekHkL._AC_.jpg",
},

{
  titulo: "Persiguiendo a Silvia",
  autor: "Elísabet Benavent",
  descripcion:
    "Silvia trabaja en una importante multinacional y está perdida. Silvia necesita encontrar a alguien para olvidar a Álvaro.",
  fecha_publicacion: "2014-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Romance",
  poster_path: "https://pictures.abebooks.com/inventory/md/md17129703443.jpg",
},
{
  titulo: "Encontrando a Silvia",
  autor: "Elísabet Benavent",
  descripcion:
    "Silvia se encuentra ante la difícil decisión de elegir entre el amor de su vida y el amor de su presente.",
  fecha_publicacion: "2014-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Romance",
  poster_path: "https://pictures.abebooks.com/isbn/9788483656785-es.jpg",
},
{
  titulo: "Mi isla",
  autor: "Elísabet Benavent",
  descripcion:
    "Maggie vive en una isla y regenta una casa de huéspedes... Además, esconde un secreto que la atormenta.",
  fecha_publicacion: "2016-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Romance",
  poster_path: "https://pictures.abebooks.com/isbn/9788491290148-es.jpg",
},


{
titulo: "Lo que escondían tus ojos",
autor: "Nieves Herrero",
descripcion:
  "La novela narra la apasionada historia de amor entre la marquesa de Llanzol y el general Franco en la posguerra española.",
fecha_publicacion: "2013-01-01",
tipo: "Novela",
categoria: "libro",
genero: "Romance",
poster_path: "https://pictures.abebooks.com/isbn/9788499708898-es-300.jpg",
},

{
titulo: "Esperando a Robert Capa",
autor: "Susana Fortes ",
descripcion:
  "Una historia de amor y guerra en medio del peligro y la incertidumbre, basada en la vida de Gerda Taro y Robert Capa, fotógrafos de guerra.",
fecha_publicacion: "2011-01-01",
tipo: "Novela",
categoria: "libro",
genero: "Histórica",
poster_path: "https://pictures.abebooks.com/isbn/9788408094968-es-300.jpg",
},

{
titulo: "Esos dias azules",
autor: "Nieves Herrero",
descripcion:
  "El relato de una pasión imposible y secreta que permanecerá para siempre en el alma de los lectores.",
fecha_publicacion: "2000-01-01",
tipo: "Novela",
categoria: "libro",
genero: "Ficción",
poster_path: "https://imagessl0.casadellibro.com/a/l/t7/10/9788466665810.jpg",
},

{
  titulo: 'The Sandman',
  autor: 'Neil Gaiman',
  descripcion: 'Una serie de cómics que relata las aventuras de Morfeo, el señor de los sueños, y otros personajes de la mitología y el folclore.',
  fecha_publicacion: '1989-01-01',
  tipo: 'Cómic',
  categoria: 'libro',
  genero: 'Fantasía',
  poster_path: "https://kbimages1-a.akamaihd.net/ada9fde9-d6ad-49ce-bce2-e47da56b844c/1200/1200/False/the-sandman-book-of-dreams.jpg",
},
{
  titulo: 'El amor en los tiempos del cólera (Audiolibro)',
  autor: 'Gabriel García Márquez',
  descripcion: 'Una novela que narra la historia de amor entre Florentino Ariza y Fermina Daza a lo largo de más de cincuenta años.',
  fecha_publicacion: '1985-01-01',
  tipo: 'Novela',
  categoria: 'audiolibro',
  genero: 'Romance',
  duracion: '09:30:00',
  formato: 'mp3',
  poster_path: "https://pictures.abebooks.com/inventory/md/md31480016475.jpg"
}, 
{
  titulo: "El tiempo entre costuras",
  autor: "María Dueñas",
  descripcion:
    "La historia de Sira Quiroga, una joven modista que abandona Madrid antes de la Guerra Civil para establecerse en Tánger y Tetuán.",
  fecha_publicacion: "2009-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Historia",
  poster_path: "https://pictures.abebooks.com/inventory/md/md30121299199._FMwebp_.jpg",
},


{
  titulo: "Fahrenheit 451",
  autor: "Ray Bradbury",
  descripcion:
    "En un futuro distópico donde los libros están prohibidos, un bombero llamado Guy Montag lucha por la libertad de expresión y el conocimiento.",
  fecha_publicacion: "1953-01-01",
  tipo: "Novela",
  categoria: "libro",
  genero: "Ciencia ficción",
  poster_path: "https://pictures.abebooks.com/inventory/md/md31398413074.jpg",
},




{
  titulo: 'Un mundo feliz',
  autor: 'Aldous Huxley',
  descripcion: 'Una novela distópica que presenta una sociedad futurista basada en la ingeniería genética y la tecnología.',
  fecha_publicacion: '1932-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Ciencia ficción',
  poster_path: "https://forolibro.files.wordpress.com/2017/12/unmundofeliz_by_masg72.jpg",
},
{
  titulo: 'Orgullo y prejuicio',
  autor: 'Jane Austen',
  descripcion: 'Una novela romántica que retrata las costumbres de la sociedad inglesa del siglo XIX.',
  fecha_publicacion: '1813-01-28',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  poster_path: "https://pictures.abebooks.com/inventory/md/md22259252092.jpg"
},
{
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  descripcion: 'Un cuento filosófico que narra las aventuras de un niño que viaja por diferentes planetas.',
  fecha_publicacion: '1943-04-06',
  tipo: 'Cuento',
  categoria: 'audiolibro',
  genero: 'Filosófico',
  duracion: '03:10:00',
  formato: 'mp3',
  poster_path: "https://pictures.abebooks.com/inventory/md/md31477694323.jpg"
},
{
  titulo: 'La sombra del viento',
  autor: 'Carlos Ruiz Zafón',
  descripcion: 'Una novela que combina el misterio, el romance y la historia en una trama ambientada en la Barcelona de mediados del siglo XX.',
  fecha_publicacion: '2001-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Misterio',
  poster_path: "https://pictures.abebooks.com/inventory/md/md31481040422.jpg"
},


      {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        descripcion: 'Una de las obras más representativas del realismo mágico latinoamericano.',
        fecha_publicacion: '1967-05-30',
        tipo: 'Novela',
        categoria: 'libro',
        genero: 'Realismo mágico',
        poster_path: "https://pictures.abebooks.com/isbn/9788422620259-es-300.jpg"
      },
      {
        titulo: '1984',
        autor: 'George Orwell',
        descripcion: 'Una distopía que explora la vida bajo un régimen totalitario.',
        fecha_publicacion: '1949-06-08',
        tipo: 'Novela',
        categoria: 'libro',
        genero: 'Ciencia ficción',
        poster_path: "https://pictures.abebooks.com/isbn/9788474541601-us.jpg"
      },
  
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Productos', null, {});
  },
};




