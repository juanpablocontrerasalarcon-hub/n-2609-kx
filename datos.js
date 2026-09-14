/* ==========================================================================
   CONTENIDO — este es el único archivo que se toca para agregar fotos.
   El diseño vive en index.html y no hace falta abrirlo nunca.

   Bloques disponibles:
     { t:"capitulo", id, romano, titulo, sub, bandera, cita, quien }
     { t:"mapa", cual:"europa" | "bus" }
     { t:"escena", ... }   → foto grande. Solo cuando sale Fabiana.
     { t:"lugar", ... }    → grupo de un lugar, se recorre de lado.
     { t:"cierre", frase, quien }

   En "escena":  forma: "ancha" | "duo" | "duoDer" | "duoVert" | "arco"
                 foto, meta, titulo, desc, dato, cita, firma, info
   En "lugar":   bandera:"dk"|"se", fecha, titulo, intro,
                 fotos:[ {foto, titulo, texto, autor} ]
   ========================================================================== */

const CONTENIDO = [

  { t:"mapa", cual:"europa" },

  /* ═══════════════════ I · COPENHAGEN ═══════════════════ */
  { t:"capitulo", id:"copenhagen", romano:"I", titulo:"Copenhagen", bandera:"dk",
    sub:"Desde el 25 de agosto · tu casa",
    cita:"Amor ya en copenhague", quien:"Fabiana · 25 de agosto, 08:59" },

  { t:"escena", forma:"ancha", foto:"101-aeropuerto.jpg",
    meta:"25 de agosto · 08:59",
    titulo:"El primer piso que pisaste",
    desc:"Todavía con todo encima, sin haber salido siquiera de la terminal, y ya me estabas contando que habías llegado.",
    dato:"Ese piso de madera no es casualidad: aquí cambian el suelo a propósito para que el sonido de tus pasos cambie y sientas que llegas a una casa. Alguien pensó en tu llegada antes de que llegaras.",
    cita:"Amor ya en copenhague", firma:"Fabiana",
    info:"Aeropuerto de Copenhagen. La terminal original la diseñó Vilhelm Lauritzen en 1939." },

  { t:"escena", forma:"duoVert", foto:"102-ventana.jpg",
    meta:"25 de agosto · 13:09",
    titulo:"Tu ventana",
    desc:"Cuatro horas después de aterrizar ya estabas instalada. Esta es la vista que tienes cada mañana, y desde ese escritorio me escribes cuando acá todavía es de madrugada.",
    dato:"Lo primero que quisiste mostrarme de tu vida nueva no fue un monumento. Fue tu ventana. Eso me dejó tranquilo.",
    cita:"Ya estoy en mi cuarto amor. Todo súper silencioso", firma:"Fabiana",
    info:"Rødovre, el barrio donde vive." },

  /* ---------- LA MAESTRÍA ---------- */
  { t:"escena", forma:"duo", foto:"122-universidad.jpg",
    meta:"29 de agosto",
    titulo:"A lo que fuiste",
    desc:"Esto es lo que de verdad te llevó al otro lado del mundo. No el viaje ni los castillos: la maestría. Ganaste una Erasmus y te viniste sola a estudiar a un país donde no conocías a nadie, con un idioma que no es el tuyo.",
    dato:"Y la foto no la sacaste tú. Me escribiste “mira mi papá le sacó fotos a la Universidad”. Él fotografiando el edificio donde va a estudiar su hija, guardando la prueba de que llegó. Yo habría hecho exactamente lo mismo.",
    cita:"Mira mi papá le sacó fotos a la Universidad", firma:"Fabiana",
    info:"El edificio donde estudia, fotografiado por su papá el 29 de agosto de 2026." },

  { t:"escena", forma:"duoDer", foto:"121-abrigo.jpg",
    meta:"29 de agosto · 09:35",
    titulo:"Preparándote para el invierno",
    desc:"Ese mismo día te mediste el abrigo con el que ibas a pasar tu primer invierno danés, y me lo mostraste feliz. Ahí caí en cuenta de que no ibas de visita: te ibas a quedar, a pasar un invierno entero y a salir del otro lado con un título.",
    cita:"No te imaginas lo caliente que es", firma:"Fabiana",
    info:"El abrigo para su primer invierno en Dinamarca." },

  { t:"lugar", id:"primeros", bandera:"dk", fecha:"26 al 29 de agosto",
    titulo:"Tus primeros días",
    intro:"Antes de que empezaran las clases, la ciudad entera era cosa nueva.",
    fotos:[
      { foto:"111-estacion.jpg", titulo:"La estación central", autor:"26 de agosto",
        texto:"La estación de Copenhagen, con esa techumbre de madera que parece el casco de un barco dado vuelta. Es de 1911 y la hicieron así a propósito, en madera y no en hierro, para que no se sintiera como una fábrica." },
      { foto:"112-cactus.jpg", titulo:"Las torres que giran", autor:"27 de agosto",
        texto:"Dos torres residenciales cuyos balcones van rotando piso por piso, de modo que ningún vecino le tapa el sol al de abajo. Toda la arquitectura danesa de este siglo va de eso: resolver la falta de luz." },
      { foto:"113-tivoli.jpg", titulo:"La entrada de Tivoli", autor:"28 de agosto",
        texto:"Tivoli abrió en 1843 y es el segundo parque de atracciones más antiguo del mundo que sigue funcionando. Walt Disney lo visitó en los cincuenta y salió de ahí con la idea de Disneyland." },
      { foto:"114-palads.jpg", titulo:"El cine de colores", autor:"28 de agosto",
        texto:"Un cine de 1912 que en 1989 una artista pintó entero con manchas de colores pastel. Los daneses se dividieron entre los que lo odiaban y los que lo adoraban, y al final se quedó así." },
      { foto:"115-esculturas.jpg", titulo:"Los que caminan", autor:"29 de agosto",
        texto:"Tres hombres de bronce caminando por la vereda, sin pedestal ni placa, a la misma altura que uno. Me gusta la idea de una ciudad que pone esculturas a ras de suelo, para tropezarse con ellas." }
    ]},

  { t:"lugar", id:"frederiksborg", bandera:"dk", fecha:"30 de agosto",
    titulo:"Castillo de Frederiksborg",
    intro:"Ese día me mandaste 367 fotos en una sola tarde, y encima me preguntaste si quería “una colección más selecta”. Estas son mis favoritas.",
    fotos:[
      { foto:"131-castillo.jpg", titulo:"El patio", autor:"Frederiksborg, Hillerød",
        texto:"Lo construyó Christian IV y quedó terminado hacia 1620: es el mayor edificio renacentista de toda Escandinavia. La fuente de Neptuno que ves en el patio es una copia — los suecos se llevaron la original como botín de guerra en 1659, y todavía sigue en Suecia." },
      { foto:"132-lago.jpg", titulo:"Desde el lago", autor:"30 de agosto",
        texto:"El castillo está construido sobre tres islotes de un lago, y por eso parece flotar. La palabra “borg” quiere decir fortaleza, aunque a esta alturas ya era más palacio que defensa." },
      { foto:"133-jardin.jpg", titulo:"El jardín barroco", autor:"30 de agosto",
        texto:"Cuatro terrazas unidas por rampas, diseñadas entre 1720 y 1725 para Federico IV, con una cascada de 225 metros que bajaba hasta el lago. Se desmanteló en 1771 y recién en los años noventa lo volvieron a levantar tal cual estaba." },
      { foto:"142-fauno.jpg", titulo:"El fauno de la cascada", autor:"30 de agosto",
        texto:"Una de las esculturas que acompañan el agua bajando por las terrazas, tocando su flauta desde hace tres siglos sin que nadie lo escuche." },
      { foto:"134-capilla.jpg", titulo:"La capilla", autor:"30 de agosto",
        texto:"Es una de las tres únicas partes que se salvaron del incendio de 1859, que destruyó casi todo el interior del castillo. Aquí se coronó a los reyes daneses desde 1671 hasta 1840." },
      { foto:"135-organo.jpg", titulo:"El órgano Compenius", autor:"30 de agosto",
        texto:"De 1610, y absolutamente todos sus tubos son de madera — arce, ébano, nogal, abedul — muchos con incrustaciones de marfil. Por eso suena suave, como un instrumento de cámara. Se lo regalaron a Christian IV en 1617 y sigue funcionando." },
      { foto:"136-zodiaco.jpg", titulo:"La bóveda del zodiaco", autor:"30 de agosto",
        texto:"Todas las constelaciones dibujadas en oro sobre azul, en el techo de una torre. En el siglo XVII, saber el cielo de memoria era cosa de reyes." },
      { foto:"140-globo.jpg", titulo:"El globo celeste", autor:"30 de agosto",
        texto:"Una esfera mecánica construida entre 1654 y 1667. Por dentro tiene un mecanismo de relojería donde las figuras de los planetas giran alrededor de un sol de latón a su velocidad real: Mercurio tarda 88 días y Saturno casi treinta años. También llegó a Dinamarca como botín de guerra." },
      { foto:"141-bohr.jpg", titulo:"Niels Bohr", autor:"Harald Isenstein, 1955",
        texto:"El busto del físico, hecho por un escultor judío alemán que había huido del nazismo a Dinamarca en 1933. Años después Bohr, de madre judía, tuvo que huir a Suecia. Tú me dijiste que se parece a tu papá." },
      { foto:"137-cuadro.jpg", titulo:"El vikingo que carga", autor:"30 de agosto",
        texto:"Un guerrero cargando a alguien entre las rocas, con los barcos al fondo. De todo lo que fotografiaste ese día, este fue el cuadro en el que más te detuviste." },
      { foto:"138-cama.jpg", titulo:"La cama con dosel", autor:"30 de agosto",
        texto:"Hoy el castillo es el Museo de Historia Nacional de Dinamarca: la galería de retratos del país entero. Lo fundó J.C. Jacobsen, el cervecero de Carlsberg, el mismo que encargó la Sirenita." },
      { foto:"139-oratorio.jpg", titulo:"El oratorio oscuro", autor:"30 de agosto",
        texto:"Maderas negras, pinturas religiosas y casi nada de luz. La parte del castillo que más se parece a lo que a ti te gusta." }
    ]},

  { t:"escena", forma:"ancha", foto:"143-fabi-fuente.jpg",
    meta:"30 de agosto · 12:45",
    titulo:"En la cascada",
    desc:"Ahí estás, de cuero negro, parada junto al agua en un jardín de 1720 como si fueras parte del plano original. Esta foto la sacó tu papá, y me la mandaste con un “estas las sacó mi papá” como quien no quiere la cosa.",
    dato:"Yo te contesté que eras más linda que todas esas esculturas y que todos esos castillos. Sigo pensando lo mismo.",
    info:"Jardín barroco de Frederiksborg. Foto de JAZ." },

  { t:"escena", forma:"duoDer", foto:"144-fabi-pedestal.jpg",
    meta:"30 de agosto · Frederiksborg",
    titulo:"Mi escultura favorita",
    desc:"Había un pedestal vacío con una placa que decía “eres libre de pararte aquí”, y te paraste encima. De cuero negro, con la cámara colgada y mirando al frente como si llevaras siglos ahí.",
    dato:"En un castillo lleno de reyes de bronce y de mármol, esta es mi escultura favorita del mundo mundial.",
    info:"La placa dice: DU MÅ GODT STÅ HER — eres libre de pararte aquí." },

  { t:"lugar", id:"glyptotek", bandera:"dk", fecha:"1 de septiembre",
    titulo:"El museo de esculturas",
    intro:"“Algunas fotos del lugar amorcito”, me escribiste. Y me mandaste puras esculturas, que es exactamente lo que esperaba de ti.",
    fotos:[
      { foto:"151-rodin.jpg", titulo:"Los burgueses de Calais", autor:"Auguste Rodin",
        texto:"Seis hombres caminando hacia su propia ejecución para salvar a su ciudad. Rodin los hizo sin héroes ni poses: cada uno con su miedo puesto en la cara. Los quiso al ras del suelo, sin pedestal, para que la gente caminara entre ellos." },
      { foto:"152-terracota.jpg", titulo:"El grupo de terracota", autor:"1 de septiembre",
        texto:"Cuerpos entrelazados en un solo bloque de barro cocido, bajo un techo de vidrio. La terracota era el material del boceto, el del artista pensando en voz alta." },
      { foto:"153-galeria.jpg", titulo:"La galería", autor:"1 de septiembre",
        texto:"Paredes de color y mármoles blancos, que es como se exponía la escultura en el siglo XIX: nada de museo neutro, sino salón de casa rica." },
      { foto:"154-mascara.jpg", titulo:"La musa con la máscara", autor:"1 de septiembre",
        texto:"Una figura clásica sosteniendo una máscara de teatro por el pelo. Melpómene, la musa de la tragedia, siempre se representa así — cargando la cara de otro." },
      { foto:"163-fabi-espejo.jpg", titulo:"Dentro de la obra", autor:"2 de septiembre · 08:56",
        texto:"Te paraste frente a una instalación y te fotografiaste reflejada entre las figuras, con la cámara en la mano. Terminaste siendo parte de la obra sin pedir permiso." }
    ]},

  { t:"escena", forma:"duo", foto:"161-fabi-leon.jpg",
    meta:"2 de septiembre · 01:14",
    titulo:"Besando un león",
    desc:"En el mismo museo, encontraste un león de piedra y le diste un beso en el hocico. Yo estaba durmiendo del otro lado del mundo y me desperté con esto.",
    dato:"Después te dije que tenías cara de incomodidad en las fotos que te saca tu papá. En esta no: en esta estás haciendo exactamente lo que se te da la gana.",
    info:"Llegó pasada la medianoche en Bolivia, unas horas después de las fotos del museo." },

  { t:"escena", forma:"ancha", foto:"162-fabi-selfie.jpg",
    meta:"2 de septiembre · 06:01",
    titulo:"Buenos días",
    desc:"Sin filtro, sin pose, con los árboles verdes detrás y esa media sonrisa de recién levantada. De todas las fotos del viaje, esta es la que más se parece a tenerte cerca.",
    info:"Selfie de la mañana del 2 de septiembre." },

  { t:"escena", forma:"ancha", foto:"171-fabi-negro.jpg",
    meta:"4 de septiembre · 10:05",
    titulo:"Fabiana la rula",
    desc:"Ese día te dije que te estaban saliendo los rulos y que no renegaras de tu herencia capilar. Mira esa melena. Tenía razón.",
    dato:"Dos minutos después me escribiste que estabas pensando en buscar algún lugar metalero en Copenhagen. Sola, en un país nuevo, y lo primero que buscas es dónde suena la música que te gusta. Eso eres tú.",
    cita:"Oye hoy estaba pensando en ir a algún lugar metalero", firma:"Fabiana",
    info:"4 de septiembre de 2026." },

  { t:"escena", forma:"duo", foto:"172-fabi-silla.jpg",
    meta:"5 de septiembre · 11:37",
    titulo:"En la silla roja",
    desc:"Sentada en una silla de diseño danés, de negro de pies a cabeza, con las manos juntas y esa cara de “ya sáquenme la foto”. Esta también la sacó tu papá, esa misma mañana, camino a la Sirenita.",
    dato:"Ese día me escribiste algo que no se me olvida: “pero tú sabes que no me gustan las fotos amor”, y enseguida, “pensé que te gustan mis fotos”. Me gustan todas. Sobre todo estas, donde no estás posando para nadie.",
    cita:"Mira mi papá sacó esta", firma:"Fabiana",
    info:"5 de septiembre por la mañana, en el museo. Foto de JAZ." },

  { t:"escena", forma:"duoDer", foto:"173-fabi-piano.jpg",
    meta:"5 de septiembre · 11:37",
    titulo:"Con tu polera de banda",
    desc:"Dos minutos después, en un salón de maderas y alfombras antiguas del mismo museo, con jeans, botas negras y la polera de tu banda. Tú entera en una sola foto: el lugar solemne y tú vestida como quien va a un concierto.",
    info:"5 de septiembre, minutos después de la silla roja. Foto de JAZ." },

  { t:"escena", forma:"ancha", foto:"181-fabi-sirenita.jpg",
    meta:"5 de septiembre · 11:39",
    titulo:"Frente a la Sirenita",
    desc:"De perfil, con los ojos cerrados y el viento del puerto en la cara, mirando hacia la estatua más famosa de Dinamarca. Ni siquiera estás mirando a la cámara y es la foto más bonita del día.",
    dato:"La hizo Edvard Eriksen en 1913, por encargo del dueño de Carlsberg. Quería que posara una bailarina; ella se negó y el escultor terminó modelando a su propia esposa. Lleva más de cien años ahí sentada esperando, lo cual me suena bastante conocido.",
    info:"La Sirenita, Copenhagen. 5 de septiembre de 2026." },

  { t:"escena", forma:"ancha", foto:"191-fabi-vitrales.jpg",
    meta:"6 de septiembre · 10:50",
    titulo:"Tu esposita",
    desc:"Caminando por un pasillo de vitrales dentro del castillo, de cuero negro, con la luz de colores entrando por los dos lados. Un minuto antes me habías mandado la foto del castillo desde afuera.",
    dato:"Esa mañana me escribiste “amor no te olvides de tu futura, presente de facto, esposa”. Y después, más corto: “tu esposita”. Yo te contesté que es mi sueño más grande. Sigue siéndolo.",
    cita:"Amor no te olvides de tu futura esposa", firma:"Fabiana",
    info:"6 de septiembre de 2026, dentro del castillo de la ciudad." },

  { t:"lugar", id:"rosenborg", bandera:"dk", fecha:"6 de septiembre",
    titulo:"El castillo de la ciudad",
    intro:"El mismo día, el castillo que está metido dentro de Copenhagen, rodeado de un parque donde la gente toma sol.",
    fotos:[
      { foto:"192-rosenborg.jpg", titulo:"Bajo el arco", autor:"6 de septiembre",
        texto:"Un castillo del siglo XVII con torres de cobre verde, construido como casa de verano y hoy rodeado por la ciudad. Adentro se guardan las joyas de la corona danesa, y por sus pasillos de vitrales caminaste un minuto después de tomar esta foto." }
    ]},

  { t:"lugar", id:"centro", bandera:"dk", fecha:"8 de septiembre",
    titulo:"El centro de Copenhagen",
    intro:"“Y de ahí fui al Palacio de cristianborg”, me dijiste. Todo el casco viejo en una tarde, con tu papá haciendo de guía.",
    fotos:[
      { foto:"207-parque.jpg", titulo:"Tu campo", autor:"8 de septiembre · 07:01",
        texto:"Esa mañana me mandaste esto y me escribiste que tu campo se está poniendo hermoso y que crees que vas a venir a leer por acá. Me quedé pensando en esa palabra: tu campo. Ya hablas de esa ciudad como si fuera tuya." },
      { foto:"201-kongens.jpg", titulo:"Kongens Nytorv", autor:"8 de septiembre",
        texto:"La estatua ecuestre de Christian V es de 1688. Debajo del casco del caballo hay una figura desnuda que representa la Envidia, y que además sostiene la estructura: el original era de plomo dorado y se deformaba solo de blando." },
      { foto:"202-christiansborg.jpg", titulo:"Christiansborg", autor:"8 de septiembre",
        texto:"Es el único edificio del mundo que aloja los tres poderes del Estado: parlamento, primer ministro y tribunal supremo. Su torre, de 106 metros, es la más alta de la ciudad. Se ha incendiado dos veces, así que este es el tercer Christiansborg." },
      { foto:"206-tapiz-reina.jpg", titulo:"Los telares geniales", autor:"8 de septiembre · 11:40",
        texto:"Me escribiste “vi unos telares geniales amor” y después “deben ser como 5x4 metros”. Son los tapices que le regalaron a la reina Margarita para sus cincuenta años: cuentan mil años de historia danesa y tardaron diez años en tejerse." },
      { foto:"203-amagertorv.jpg", titulo:"La típica foto de tour", autor:"8 de septiembre",
        texto:"Tu papá señalando algo en plena calle peatonal. La casa de ladrillo con los escalones en el techo es de 1616 y es una de las poquísimas del siglo XVII que sobrevivieron a los dos grandes incendios de Copenhagen." },
      { foto:"204-iglesia.jpg", titulo:"Helligåndskirken", autor:"8 de septiembre",
        texto:"La Iglesia del Espíritu Santo. Su edificio anexo es de alrededor de 1296 y es uno de los más antiguos que siguen en pie en toda la ciudad. El portal de piedra labrada es de 1612." },
      { foto:"205-nyhavn.jpg", titulo:"Nyhavn", autor:"8 de septiembre",
        texto:"El canal de las casas de colores. Hans Christian Andersen vivió aquí, en tres casas distintas de la misma orilla, y en una de ellas escribió sus primeros cuentos." }
    ]},

  { t:"escena", forma:"ancha", foto:"209-fabi-christiansborg.jpg",
    meta:"8 de septiembre · 15:25",
    titulo:"De perfil frente al palacio",
    desc:"Con la chaqueta de cuero, el pelo recogido y el palacio entero detrás. Vas caminando y alguien te dijo que mires, y miraste.",
    dato:"Cada vez que veo esta foto pienso lo mismo: que estás muy lejos, y que al mismo tiempo nunca te he visto tan en tu lugar.",
    info:"Frente a Christiansborg, 8 de septiembre." },

  { t:"escena", forma:"duo", foto:"208-fabi-salaroja.jpg",
    meta:"8 de septiembre · 14:40",
    titulo:"En la sala roja",
    desc:"Sola en medio de un salón de terciopelo rojo y lámparas doradas, parada sobre un parqué que vale más que mi departamento, con cara de estar pensando en otra cosa.",
    info:"Salón de Christiansborg, 8 de septiembre." },

  { t:"escena", forma:"duoDer", foto:"210-fabi-marmol.jpg",
    meta:"8 de septiembre · 14:40",
    titulo:"De perfil entre mármoles",
    desc:"El mismo día, en otra sala, mirando hacia la ventana. Me gusta esta porque no sabías que te estaban tomando la foto, y se nota.",
    info:"Christiansborg, 8 de septiembre." },

  /* ═══════════════════ EL BUS ═══════════════════ */
  { t:"mapa", cual:"bus" },

  /* ═══════════════════ II · STOCKHOLM ═══════════════════ */
  { t:"capitulo", id:"stockholm", romano:"II", titulo:"Stockholm", bandera:"se",
    sub:"11 y 12 de septiembre · lo más lejos",
    cita:"No estoy yendo a ver a Muse, todavía. Estoy yendo a conocer a los primos de mi papá a Estocolmo",
    quien:"Fabiana · 10 de septiembre, 15:10" },

  { t:"lugar", id:"stadshuset", bandera:"se", fecha:"11 de septiembre",
    titulo:"Donde se entregan los Nobel",
    intro:"Tu primera mañana en Stockholm, con “el restaurante jejej” como único comentario para la sala más famosa de Suecia.",
    fotos:[
      { foto:"224-stadshuset.jpg", titulo:"Junto al agua", autor:"11 de septiembre · 11:09",
        texto:"Los jardines del ayuntamiento, con la bandera de la ciudad. Me mandaste esta foto y enseguida me dijiste con quién te habría gustado estar mirándola: “quiero estar con mi parejita viendo cositas”." },
      { foto:"222-sala-azul.jpg", titulo:"La Sala Azul", autor:"11 de septiembre · 11:05",
        texto:"Aquí se sirve la cena de los Nobel cada 10 de diciembre. Se llama Sala Azul aunque el ladrillo esté a la vista: el arquitecto pensaba pintarla de azul, vio los ladrillos terminados, le gustaron tanto que los dejó, y el nombre ya se había quedado." },
      { foto:"221-sala-dorada.jpg", titulo:"La Sala Dorada", autor:"11 de septiembre · 11:05",
        texto:"Después de la cena todos suben aquí a bailar. Las paredes están cubiertas de mosaico de oro de piso a techo, montado pieza por pieza entre 1921 y 1923." },
      { foto:"223-nino.jpg", titulo:"El niño de hierro", autor:"11 de septiembre · 11:06",
        texto:"Una estatuilla de unos quince centímetros escondida en un patio del casco viejo, sentada abrazándose las rodillas. Es la escultura más pequeña de Stockholm y la gente le teje gorros en invierno, le deja monedas y le acaricia la cabeza para que le dé suerte." }
    ]},

  { t:"lugar", id:"riddarholmen", bandera:"se", fecha:"11 de septiembre",
    titulo:"La iglesia de los reyes",
    intro:"“Una iglesia famosita por tener restos de Reyes y reinas desde el 1200”, me escribiste. Es exactamente eso.",
    fotos:[
      { foto:"231-riddarholmen.jpg", titulo:"La torre calada", autor:"11 de septiembre · 11:07",
        texto:"Riddarholmskyrkan, del siglo XIII. Su torre es de hierro fundido calado: la original de ladrillo se quemó en 1835 cuando le cayó un rayo, y la reemplazaron con esta, que parece un encaje de metal." },
      { foto:"232-riddar-int.jpg", titulo:"Los escudos", autor:"11 de septiembre · 11:06",
        texto:"Adentro están enterrados casi todos los monarcas suecos desde el siglo XVII. Las paredes están cubiertas por los escudos de armas de los caballeros de la Orden de los Serafines: cuando uno muere, cuelgan su escudo aquí y hacen sonar la campana." },
      { foto:"233-tren.jpg", titulo:"Desde el tren", autor:"11 de septiembre · 13:22",
        texto:"“Algunas fotitos del tren”, me dijiste, yendo a la ciudad del primo de tu papá. La ciudad pasando borrosa por la ventana." },
      { foto:"234-jaz-primo.jpg", titulo:"JAZ y su primo", autor:"11 de septiembre · 13:03",
        texto:"En la estación central, los dos posando como si nada. Este encuentro era la razón verdadera del viaje. La estatua de bronce que está detrás es Nils Ericson, el ingeniero que construyó los ferrocarriles suecos; su hermano menor se fue a Estados Unidos y también terminó en los libros." }
    ]},

  { t:"lugar", id:"storkyrkan", bandera:"se", fecha:"12 de septiembre",
    titulo:"La catedral",
    intro:"Tu último día completo, metida en la iglesia más antigua de Stockholm.",
    fotos:[
      { foto:"241-storkyrkan.jpg", titulo:"El retablo", autor:"12 de septiembre · 12:14",
        texto:"La Storkyrkan es de 1279 y es la catedral de Stockholm: aquí se han coronado y casado los reyes suecos durante siglos, incluida la boda de la princesa heredera." },
      { foto:"242-storkyrkan-nave.jpg", titulo:"La nave", autor:"12 de septiembre · 12:14",
        texto:"Ladrillo visto, bóvedas altas y bancos de madera oscura. La reforma protestante le quitó casi toda la decoración, y lo que quedó es esta desnudez que a ti te gusta tanto." },
      { foto:"243-storkyrkan-det.jpg", titulo:"El banco real", autor:"12 de septiembre · 12:14",
        texto:"El palco donde se sienta la familia real, tallado en madera y coronado de figuras. Tú le sacaste fotos al detalle, no al conjunto — como siempre." }
    ]},

  { t:"escena", forma:"ancha", foto:"244-fabi-tapices.jpg",
    meta:"12 de septiembre · 13:11",
    titulo:"Aquí sería la boda",
    desc:"De cuero negro, con la cámara en la mano y esa media sonrisa de cuando algo te gustó mucho y no lo vas a decir. Detrás, dos tapices enormes llenos de acróbatas y pájaros.",
    dato:"Me mandaste esta foto desde el Palacio Real y me escribiste tres palabras: “aquí sería la boda”. Dos días antes ya te habías declarado mi esposa de facto. Voy tomando nota de todo, que conste.",
    cita:"Aquí sería la boda", firma:"Fabiana",
    info:"Palacio Real de Stockholm, 12 de septiembre. Tapices de estilo grotesco." },

  { t:"escena", forma:"duo", foto:"246-fabi-jaz-agua.jpg",
    meta:"12 de septiembre · 13:10",
    titulo:"Con JAZ, frente al agua",
    desc:"Tú y tu papá al sol, con el ayuntamiento y un barco de fondo, tú abrazada a él. De todas las fotos del viaje, esta es en la que se te ve más contenta sin estar haciendo nada.",
    dato:"Me la mandaste con un “más de tu novi”, que es la mejor manera que tienes de decir mírame.",
    info:"Stockholm, 12 de septiembre." },

  { t:"lugar", id:"vikingos", bandera:"se", fecha:"12 de septiembre",
    titulo:"El campo de los vikingos",
    intro:"Y de ahí, a las afueras, a ver piedras.",
    fotos:[
      { foto:"245-palacio.jpg", titulo:"El Palacio Real", autor:"12 de septiembre · 13:10",
        texto:"Más de seiscientas habitaciones: uno de los palacios más grandes de Europa que todavía se usa. Ustedes dos, del otro lado de la reja dorada." },
      { foto:"247-tumulos.jpg", titulo:"Los túmulos", autor:"12 de septiembre · 12:13",
        texto:"Colinas de tierra levantadas sobre tumbas, y piedras clavadas en el pasto formando la silueta de un barco. Así enterraban a su gente: dándoles una nave de piedra para el viaje que seguía." }
    ]},

  { t:"escena", forma:"arco", foto:"248-fabi-runas.jpg",
    meta:"12 de septiembre · 12:13",
    titulo:"La piedra de los vikingos",
    desc:"Tú de cuero negro y con la cámara en la mano, frente a algo que lleva mil años parado ahí. Esta es mi favorita de todo el viaje, y creo que ya sabes por qué.",
    dato:"Las piedras rúnicas se pintaban de rojo, y casi todas dicen lo mismo: el nombre de alguien y quién mandó tallarla. Alguien pagó por dejar un nombre en piedra para que mil años después siguiera ahí. Algo parecido estoy haciendo yo con estas fotos.",
    cita:"Vikingos", firma:"Fabiana",
    info:"12 de septiembre de 2026." },

  { t:"cierre", frase:"Ni el lugar más bonito me gusta sin ti",
    quien:"Fabiana · 11 de septiembre, 16:10" }

];

/* --------------------------------------------------------------------------
   PORTADA Y CIFRAS
   -------------------------------------------------------------------------- */
const CABECERA = {
  ojo: "Del 24 de agosto a hoy",
  nombre: "Fabi",
  subtitulo: "Eurotrip",
  beca: "Beca Erasmus · Maestría · Copenhagen 2026–2027",
  ruta: "Madrid · Copenhagen · Stockholm",
  futuro: { ciudad:"Milan", cuando:"2027–2028" },
  fotoFondo: "248-fabi-runas.jpg",

  juntosDesde: "2025-07-13",
  viajeDesde:  "2026-08-24",
  fotosRecibidas: 741,

  despedida: { texto:"Te amo", firma:"Juan Pablo C." }
};
