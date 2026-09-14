/* ==========================================================================
   CONTENIDO DE LA PÁGINA
   --------------------------------------------------------------------------
   Este es el único archivo que se toca para agregar o cambiar fotos.
   El diseño vive en index.html y no hace falta abrirlo nunca.

   Para agregar una foto:
     1. Sube la imagen a la carpeta  fotos/
     2. Agrega su bloque aquí, en el lugar del recorrido que le toca.

   Tipos de bloque disponibles:

     { t:"capitulo", id, romano, titulo, sub, cita, quien }
     { t:"mapa", cual:"europa" }  o  { t:"mapa", cual:"bus" }
     { t:"escena", ... }   → foto grande. Se usa cuando sale Fabiana.
     { t:"grupo", ... }    → tira de fotos chicas de lugares.
     { t:"cierre", frase, quien }

   En "escena":
     forma: "ancha" (horizontal), "duo" (foto izquierda), "duoDer" (foto derecha),
            "arco" (vertical en arco de catedral)
     foto, meta, titulo, desc, dato, cita, firma     ← cita y dato son opcionales

   En "grupo":
     fecha, titulo, intro, fotos:[ {foto, titulo, pie, info} ]
     info es el texto largo que aparece al tocar la foto.
   ========================================================================== */

const CONTENIDO = [

  { t:"mapa", cual:"europa" },

  /* ===================== I · COPENHAGEN ===================== */
  { t:"capitulo", id:"copenhagen", romano:"I", titulo:"Copenhagen",
    sub:"Desde el 25 de agosto · tu casa",
    cita:"Amor ya en copenhague", quien:"Fabiana · 25 de agosto, 08:59" },

  { t:"escena", forma:"ancha", foto:"01-aeropuerto.jpg",
    meta:"25 de agosto · 08:59",
    titulo:"El primer piso que pisaste",
    desc:"Todavía con todo encima, sin haber salido siquiera de la terminal, y ya me estabas contando que habías llegado.",
    dato:"Ese piso de madera no es casualidad: aquí cambian el suelo a propósito para que el sonido de tus pasos cambie y sientas que llegas a una casa. Alguien pensó en tu llegada antes de que llegaras.",
    cita:"Amor ya en copenhague", firma:"Fabiana",
    info:"El aeropuerto de Copenhagen cambia el tipo de suelo a propósito para que el sonido de los pasos cambie. La terminal original la diseñó Vilhelm Lauritzen en 1939." },

  { t:"escena", forma:"duoVert", foto:"02-ventana.jpg",
    meta:"25 de agosto · 13:09",
    titulo:"Tu ventana",
    desc:"Cuatro horas después de aterrizar ya estabas instalada. Esta es la vista que tienes cada mañana, y desde ese escritorio me escribes cuando acá todavía es de madrugada.",
    dato:"Lo primero que quisiste mostrarme de tu vida nueva no fue un monumento. Fue tu ventana. Eso me dejó tranquilo.",
    cita:"Ya estoy en mi cuarto amor. Todo súper silencioso", firma:"Fabiana",
    info:"Rødovre, el barrio donde vive." },

  { t:"grupo", fecha:"29 de agosto", titulo:"Tu universidad",
    intro:"Me escribiste “mira mi papá le sacó fotos a la Universidad”. Él fotografiando el edificio donde vas a estudiar, como quien guarda una prueba de que su hija llegó.",
    fotos:[
      { foto:"03-universidad.jpg", titulo:"Donde estudias", pie:"29 de agosto",
        info:"El edificio donde estudia, fotografiado por su papá el 29 de agosto." }
    ]},

  { t:"grupo", id:"frederiksborg", fecha:"30 de agosto", titulo:"Castillo de Frederiksborg",
    intro:"Ese día me mandaste 367 fotos en una sola tarde, y encima me preguntaste si quería “una colección más selecta”. Estas son mis favoritas. Toca cualquiera para verla en grande.",
    fotos:[
      { foto:"10-frederiksborg.jpg", titulo:"El castillo", pie:"Mayor renacentista del norte",
        info:"Lo construyó Christian IV y quedó terminado hacia 1620: es el mayor edificio renacentista de Escandinavia. La fuente de Neptuno del patio es una copia — los suecos se llevaron la original como botín de guerra en 1659 y todavía sigue en Suecia." },
      { foto:"11-jardin.jpg", titulo:"El jardín", pie:"Cuatro terrazas de 1720",
        info:"Jardín barroco diseñado entre 1720 y 1725 para Federico IV: cuatro terrazas unidas por rampas y una cascada de 225 metros que bajaba hasta el lago. Se desmanteló en 1771 y lo volvieron a levantar en los años noventa." },
      { foto:"12-fauno.jpg", titulo:"El fauno de la fuente", pie:"Jardín del castillo",
        info:"Una de las esculturas del jardín barroco, en la cascada de agua." },
      { foto:"13-organo.jpg", titulo:"La capilla", pie:"Órgano de 1610, todo de madera",
        info:"La capilla es una de las tres partes que se salvaron del incendio de 1859, y ahí se coronó a los reyes daneses de 1671 a 1840. El órgano es de 1610: todos sus tubos son de madera, muchos con incrustaciones de marfil, y se lo regalaron a Christian IV en 1617." },
      { foto:"14-chimenea.jpg", titulo:"La chimenea negra", pie:"Salón del castillo",
        info:"Salón del castillo, con tapices y una chimenea monumental de piedra negra." },
      { foto:"15-salarosa.jpg", titulo:"La sala rosada", pie:"Galería de retratos",
        info:"El castillo es hoy el Museo de Historia Nacional de Dinamarca, la galería de retratos del país. Lo fundó el cervecero J.C. Jacobsen, el mismo de Carlsberg que encargó la Sirenita." },
      { foto:"16-globo.jpg", titulo:"El globo celeste", pie:"Los planetas giran de verdad",
        info:"Esfera celeste mecánica construida entre 1654 y 1667. Por dentro tiene un mecanismo de relojería en el que las figuras de los planetas giran alrededor de un sol de latón a su velocidad real: Mercurio tarda 88 días y Saturno casi treinta años. Llegó a Dinamarca como botín de guerra." },
      { foto:"17-bohr.jpg", titulo:"Niels Bohr", pie:"“Se parece a tu papá”",
        info:"Busto de Niels Bohr por Harald Isenstein, 1955. Isenstein era un escultor judío alemán que huyó del nazismo a Dinamarca en 1933; también retrató a Einstein. Años después Bohr, de madre judía, tuvo que huir a Suecia." },
      { foto:"18-ventanacastillo.jpg", titulo:"Desde la ventana", pie:"Hacia el lago",
        info:"Vista desde una de las ventanas del castillo hacia el ala de la puerta y el lago." }
    ]},

  { t:"escena", forma:"duoDer", foto:"19-fabi-pedestal.jpg",
    meta:"30 de agosto · Frederiksborg",
    titulo:"Mi escultura favorita",
    desc:"Había un pedestal vacío con una placa que decía “eres libre de pararte aquí”, y te paraste encima. De cuero negro, con la cámara colgada y mirando a la cámara como si llevaras siglos ahí.",
    dato:"En un castillo lleno de reyes de bronce y de mármol, esta es mi escultura favorita del mundo mundial.",
    info:"La placa del pedestal dice: DU MÅ GODT STÅ HER — eres libre de pararte aquí." },

  { t:"grupo", id:"centro", fecha:"8 de septiembre", titulo:"El centro de Copenhagen",
    intro:"“Y de ahí fui al Palacio de cristianborg”, me dijiste. Todo el casco viejo en una tarde, con tu papá haciendo de guía.",
    fotos:[
      { foto:"20-kongensnytorv.jpg", titulo:"Kongens Nytorv", pie:"La estatua es de 1688",
        info:"La estatua ecuestre es de Christian V y se inauguró en 1688. Debajo del casco del caballo hay una figura desnuda que representa la Envidia — y que además sostiene la estructura, porque la estatua original era de plomo dorado y se deformaba sola." },
      { foto:"21-christiansborg.jpg", titulo:"Christiansborg", pie:"Los tres poderes en un edificio",
        info:"Es el único edificio del mundo que aloja los tres poderes del Estado: parlamento, primer ministro y tribunal supremo. Su torre, de 106 metros, es la más alta de la ciudad. Se ha incendiado dos veces, así que este es el tercer Christiansborg." },
      { foto:"22-amagertorv.jpg", titulo:"La típica foto de tour", pie:"JAZ explicando Dinamarca",
        info:"Amagertorv, en Strøget. La casa de ladrillo con los hastiales escalonados es de 1616 y es una de las poquísimas del siglo XVII que sobrevivieron a los dos grandes incendios de Copenhagen, el de 1728 y el de 1795." },
      { foto:"23-helligaands.jpg", titulo:"Helligåndskirken", pie:"El anexo es de 1296",
        info:"La Iglesia del Espíritu Santo. Su edificio anexo es de alrededor de 1296 y es uno de los más antiguos que quedan en pie en Copenhagen. El portal de piedra labrada es de 1612." },
      { foto:"24-nyhavn.jpg", titulo:"Nyhavn", pie:"El canal de colores",
        info:"El canal de las casas de colores. Hans Christian Andersen vivió aquí, en tres casas distintas de la misma orilla." }
    ]},

  { t:"escena", forma:"ancha", foto:"25-sirenita.jpg",
    meta:"Copenhagen",
    titulo:"La Sirenita",
    desc:"El viento del puerto, el barco de turistas pasando atrás, y tú con los ojos cerrados disfrutándolo. Te tomaste tu tiempo con ella.",
    dato:"La hizo Edvard Eriksen en 1913, por encargo del dueño de Carlsberg. Quería que posara una bailarina; ella se negó y el escultor terminó modelando a su propia esposa.",
    cita:"La famosa sirena", firma:"Yo, ese día",
    info:"Se descubrió el 23 de agosto de 1913. Bronce, 1,25 metros." },

  /* ===================== EL BUS ===================== */
  { t:"mapa", cual:"bus" },

  /* ===================== II · STOCKHOLM ===================== */
  { t:"capitulo", id:"stockholm", romano:"II", titulo:"Stockholm",
    sub:"11 y 12 de septiembre · lo más lejos",
    cita:"No estoy yendo a ver a Muse, todavía. Estoy yendo a conocer a los primos de mi papá a Estocolmo",
    quien:"Fabiana · 10 de septiembre, 15:10" },

  { t:"escena", forma:"ancha", foto:"30-stadshuset.jpg",
    meta:"11 de septiembre · 11:09",
    titulo:"Viendo cositas",
    desc:"Tu primera mañana en Stockholm, caminando frente al agua. Me mandaste la foto y enseguida me dijiste con quién te habría gustado estar mirándola.",
    cita:"Quiero estar con mi parejita viendo cositas", firma:"Fabiana",
    info:"La bandera azul con la corona dorada es la de Stockholm. Del otro lado del agua se ve la orilla de Södermalm." },

  { t:"escena", forma:"ancha", foto:"31-riksdag.jpg",
    meta:"11 de septiembre",
    titulo:"Los dos, con lentes de sol",
    desc:"Tú abrazada a él, los dos de negro, los dos con la misma cara de estar contentos sin decirlo. La Canon colgada del cuello, como siempre.",
    dato:"Atrás está el parlamento sueco, de 1905. Debajo del edificio hay un museo medieval que apareció por accidente cuando excavaban para hacer un estacionamiento.",
    info:"El Riksdagshuset se construyó entre 1897 y 1905 en la isla de Helgeandsholmen. El museo medieval de abajo abrió en 1986." },

  { t:"escena", forma:"duo", foto:"32-puente.jpg",
    meta:"11 de septiembre",
    titulo:"En el puente",
    desc:"Otra vez los dos, ahora sobre el agua, con los barcos y toda la ciudad de fondo. Tú mirando a la cámara y él mirando a otro lado, como si no posara.",
    dato:"El edificio del fondo es el Nationalmuseum, de 1866: un alemán lo diseñó imitando un palacio renacentista italiano y lo plantó en medio de Estocolmo.",
    info:"El Nationalmuseum guarda la mayor colección de retratos en miniatura del mundo." },

  { t:"escena", forma:"duoDer", foto:"33-jaz-primo.jpg",
    meta:"11 de septiembre · 13:03",
    titulo:"JAZ y su primo",
    desc:"Los dos posando como si nada en la estación central. Este encuentro era la razón verdadera del viaje: que tu papá volviera a ver a su primo. Me gusta pensar que te llevó para que vieras de dónde vienes.",
    dato:"El de bronce es Nils Ericson, que construyó los ferrocarriles suecos. Su hermano menor se fue a Estados Unidos y también terminó en los libros. Dos hermanos con un océano en medio, y aun así los dos llegaron.",
    cita:"Ya estoy en un tren, para ir a la ciudad de ese primo de mi papá", firma:"Fabiana",
    info:"La estatua frente a la estación central de Stockholm es de Nils Ericson (1802-1870)." },

  { t:"escena", forma:"ancha", foto:"34-tapices.jpg",
    meta:"Stockholm",
    titulo:"Mirando a la cámara",
    desc:"De cuero negro, con la cámara en la mano y esa media sonrisa tuya de cuando algo te gustó mucho y no lo vas a decir. Detrás, dos tapices enormes llenos de acróbatas y pájaros.",
    dato:"Son tapices de estilo grotesco: escenas de comediantes colgadas de arquitecturas imposibles. Toda una pared tejida a mano para contar una función.",
    info:"Tapices de estilo grotesco, con escenas de comediantes y arquitecturas fantásticas." },

  { t:"escena", forma:"arco", foto:"35-runas.jpg",
    meta:"12 de septiembre · 12:13",
    titulo:"La piedra de los vikingos",
    desc:"Tú de cuero negro y con la cámara en la mano, frente a algo que lleva mil años parado ahí. Esta es mi favorita de todo el viaje, y creo que ya sabes por qué.",
    dato:"Las piedras rúnicas se pintaban de rojo, y casi todas dicen lo mismo: el nombre de alguien y quién mandó tallarla. Alguien pagó por dejar un nombre en piedra para que mil años después siguiera ahí. Algo parecido estoy haciendo yo con estas fotos.",
    cita:"Vikingos", firma:"Fabiana",
    info:"Casi todas las piedras rúnicas suecas son de entre los siglos diez y doce." },

  { t:"cierre", frase:"Ni el lugar más bonito me gusta sin ti",
    quien:"Fabiana · 11 de septiembre, 16:10" }

];

/* --------------------------------------------------------------------------
   DATOS DE LA PORTADA Y LAS CIFRAS
   -------------------------------------------------------------------------- */
const CABECERA = {
  ojo: "Del 24 de agosto a hoy",
  nombre: "Fabi",
  subtitulo: "Eurotrip",
  beca: "Beca Erasmus · Copenhagen 2026–2027",
  ruta: "Madrid · Copenhagen · Stockholm",
  futuro: { ciudad:"Milan", cuando:"2027–2028" },
  fotoFondo: "35-runas.jpg",

  // fechas para los contadores  (año-mes-día)
  juntosDesde: "2025-07-13",
  viajeDesde:  "2026-08-24",
  fotosRecibidas: 741,

  despedida: { texto:"Te amo", firma:"JP" }
};
