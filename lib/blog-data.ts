export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'el-arte-del-scrum',
    title: 'El arte del scrum',
    category: 'Técnica',
    excerpt:
      'La formación más icónica del rugby: cómo funciona, qué exige y por qué define el resultado de un partido.',
    image: '/images/blog-1.png',
    body: [
      'El scrum es probablemente la imagen más reconocible del rugby. Ocho jugadores de cada equipo se agrupan en tres líneas y empujan con toda su masa muscular para ganar el balón. Pero detrás de ese choque aparentemente caótico hay una mecánica precisa, regida por principios físicos y tácticos que los equipos tardan años en perfeccionar.',
      'La primera línea, compuesta por los dos pilares y el hooker, es el corazón del scrum. Los pilares proveen estabilidad lateral; el hooker, con el pie de apoyo, intenta ganar el balón cuando su equipo introduce. La segunda línea, los dos locks, empuja con los hombros contra los glúteos de la primera línea y es la fuente principal de propulsión hacia adelante.',
      'Los flankers y el número ocho completan el scrum desde los costados y la parte trasera. Su función es doble: transmitir la fuerza del empuje y estar listos para desplegar el balón una vez que el scrum concluya. El número ocho en particular es el que controla cuándo y hacia dónde sale el balón, por lo que debe combinar fuerza y visión de juego.',
      'El proceso del scrum comienza con el árbitro pronunciando las palabras "crouch, bind, set". En la fase "bind", los jugadores se agarran firmemente a los rivales. En "set", el empuje arranca. La posición corporal es fundamental: espalda recta, caderas altas, rodillas flexionadas y pies bien plantados. Inclinarse demasiado hacia adelante o levantar las caderas puede costar una penalización al instante.',
      'Tácticamente, el scrum no es solo un reinicio de juego. Un equipo que domina los scrums puede desgastar a la defensa rival, ganar posición en el campo y crear malas situaciones para el oponente bajo los propios postes. Los equipos que no trabajan el scrum quedan en desventaja desde la primera fase del partido.',
      'Para mejorar el scrum, los equipos entrenan con máquinas de empuje, trabajan la fuerza funcional en el gimnasio y dedican horas a la sincronización entre los ocho integrantes. Un scrum mal timed, aunque tenga fuerza bruta, cederá ante uno más coordinado. Coordinación y fuerza van de la mano; ninguna basta por sí sola.',
    ],
  },
  {
    slug: 'lineout-perfecto',
    title: 'El lineout perfecto',
    category: 'Táctica',
    excerpt:
      'Precisión, coordinación y señales en código: el lineout es teatro en movimiento sobre el campo verde.',
    image: '/images/blog-2.png',
    body: [
      'Cuando el balón sale por las bandas, el juego se detiene brevemente y ambos equipos forman dos filas paralelas de al menos dos jugadores cada una. El lanzador, de pie más allá de la línea de banda, envía el balón por el aire hacia su propia fila. Comienza el lineout, una fase de juego que combina atletismo, coordinación y comunicación cifrada.',
      'El lanzamiento es el primer factor de éxito. Un lanzamiento preciso y de velocidad correcta es la mitad del trabajo. El lanzador lleva semanas practicando los tres o cuatro tipos de trayectorias que su equipo utiliza: corta, media, larga y a la cola. La variedad es clave para que el rival no anticipe dónde irá el balón.',
      'El salto es la imagen más vistosa del lineout. Dos jumpmen, flanqueados por sus lifters, despegan del suelo con una coordinación milimétrica. Los lifters sostienen al saltador por los muslos y las caderas, elevándolo por encima de los rivales. En el momento cumbre, el jumpman extiende los brazos hacia el balón y lo captura con seguridad antes de descender controlado.',
      'Cada lineout se llama mediante señales: un sistema de códigos verbales o gestuales que el capitán o el hooker comunica antes del lanzamiento. El código indica la posición del lineout (corto, medio, largo), el tipo de salida (directo, bajado, maul) y quién salta. El equipo rival intenta descifrar ese código para robar el balón o al menos preparar su defensa.',
      'El maul de lineout es un recurso devastador. Después de capturar el balón, los forwards se agrupan alrededor del saltador y empujan colectivamente hacia la zona de ensayo. Si el equipo está cerca del in-goal rival, este movimiento puede valer cinco puntos con sorprendente regularidad.',
      'Entrenando el lineout, los equipos dedican al menos una sesión semanal específica a esta fase. Se trabaja la sincronía de salto y carga, los tipos de lanzamiento, los llamados de código y la variación de secuencias. Un buen lineout no se improvisa: es el resultado de cientos de repeticiones bajo presión simulada.',
    ],
  },
  {
    slug: 'kick-maestro',
    title: 'El golpe maestro',
    category: 'Habilidades',
    excerpt:
      'Desde el drop-goal hasta la conversión, dominar el pie es tan vital como dominar el contacto físico.',
    image: '/images/blog-3.png',
    body: [
      'En un deporte donde el contacto físico es constante y el balón pasa de mano en mano a gran velocidad, el pie tiene una importancia que muchos espectadores nuevos subestiman. El pateo estratégico puede ganar metros, sumar puntos y cambiar completamente la dinámica de un partido en cuestión de segundos.',
      'El punt es el pateo más común. Se utiliza para ganar terreno cuando el equipo atacante no ve opciones claras de avanzar con el balón en mano. El jugador deja caer el balón frente a su pie de pateo y lo golpea con el empeine en el momento del bote. Un buen punt puede enviar el balón 50 metros hacia adelante, dejando al rival con un reinicio lejano a sus postes.',
      'El kick de 22 metros se produce cuando el equipo defensor toca el balón detrás de su propia línea de 22 y lo devuelve a juego. El kicker tiene derecho a un placekick desde cualquier punto de esa línea. El objetivo es ganar la mayor distancia posible o buscar una touche directa para conseguir un lineout en campo rival.',
      'El drop-goal es el pateo más espectacular. En plena jugada dinámica, el jugador deja caer el balón al suelo y lo golpea en el preciso momento del primer bote. Si pasa entre los postes y por encima del travesaño, suma 3 puntos. El timing es todo: un split segundo de diferencia separa el gol del fallo estrepitoso.',
      'Las conversiones y los penaltis se ejecutan con un placekick. Para la conversión, el kicker coloca el balón verticalmente con un tee de goma a cierta distancia de los postes. Para el penalti, puede hacerlo desde el lugar de la infracción. La técnica implica carrera de aproximación en ángulo, cabeza baja en el impacto y seguimiento del swing de pierna hacia arriba.',
      'Entrenar el pie requiere repetición y calma mental. Los kickers trabajan centenares de tiros por semana, variando ángulos, distancias y condiciones. También practican bajo presión simulada: fallar un penalti en el último minuto de un partido cerrado es algo para lo que el entrenamiento mental es tan esencial como el técnico.',
    ],
  },
  {
    slug: 'defensa-organizada',
    title: 'La defensa organizada',
    category: 'Táctica',
    excerpt:
      'Ganar sin atacar: cómo un sistema defensivo sólido puede decidir campeonatos y destruir ilusiones rivales.',
    image: '/images/blog-4.png',
    body: [
      'El rugby se gana atacando, dicen algunos. El rugby se gana defendiendo, responden los entrenadores más pragmáticos. Ambas afirmaciones tienen razón: sin ataque no hay puntos, pero sin defensa los puntos del rival se multiplican. Un equipo que defiende bien bajo presión puede ganar partidos en los que nunca tuvo la pelota.',
      'La defensa en línea es el sistema más extendido. Los quince jugadores forman una línea horizontal a cierta distancia del ruck, avanzando coordinadamente cuando el rival lanza el juego. La clave es la comunicación: cada defensor anuncia a quién marca, avisa de los movimientos rivales y ajusta su posición constantemente.',
      'El tackle es la herramienta defensiva por excelencia. Un buen tackle no solo detiene al portador; lo derriba de forma que complica la recepción del apoyo rival. El placador ideal es rápido, bajo, potente y capaz de mantener sus brazos alrededor del rival hasta que el árbitro certifica el suelo.',
      'La presión sobre el apertura rival es uno de los objetivos tácticos más buscados. Si el número 10 recibe el balón bajo presión constante, su juego se acelera, comete errores y el equipo atacante pierde su brújula. Los equipos dedican tiempo específico a diseñar sistemas de presión sobre el pie del apertura.',
      'Defender el maul de lineout es otro desafío. El reglamento permite robar el balón en el maul atacante si el equipo defensor llega organizado. Los equipos trabajan la lectura del salto rival para anticipar el tipo de maul que se viene y colocar los jugadores correctos para frenar el avance o incluso robar.',
      'La mentalidad defensiva requiere un tipo particular de compromiso colectivo. Un jugador que no corre hacia el ruck crea un hueco en la defensa; uno que no habla deja a un compañero sin información vital. La defensa perfecta no existe, pero equipos que defienden con disciplina, energía y comunicación se acercan mucho a ella.',
    ],
  },
  {
    slug: 'rugby-7s-velocidad',
    title: 'Rugby 7s: la velocidad pura',
    category: 'Disciplinas',
    excerpt:
      'Siete jugadores, campo completo y catorce minutos para decidirlo todo. El sevens es rugby en estado bruto.',
    image: '/images/blog-5.png',
    body: [
      'El rugby sevens es, en muchos sentidos, un deporte diferente dentro del mismo deporte. Con solo siete jugadores por equipo en un campo de medidas idénticas al del rugby de 15, el espacio disponible por jugador se multiplica exponencialmente. El resultado es un juego de una velocidad, un dinamismo y una espectacularidad que han conquistado audiencias en todo el mundo.',
      'Los partidos de sevens duran 14 minutos: dos tiempos de 7. En finales y ciertos encuentros de alto nivel pueden alargarse hasta 20. Esta brevedad exige un nivel físico extraordinario: no hay descanso, no hay rotaciones constantes, y cada sprint, tackle o salto se ejecuta al límite de la capacidad individual.',
      'Las posiciones en sevens se diluyen. Los forwards se convierten en jugadores capaces de correr, pasar y eludir como los backs. Los backs deben taclear y comprometerse en el contacto como si fueran pilares. Los mejores jugadores de sevens son atletas completos, versátiles y de una condición física fuera de lo común.',
      'La táctica en sevens se simplifica en concepto pero se intensifica en ejecución. Con menos jugadores, el espacio es el recurso más valioso. Los equipos buscan constantemente crear situaciones de superioridad numérica, explotar los huecos en defensa y reciclar el balón rápidamente para no dar tiempo a los rivales a reorganizarse.',
      'El circuito mundial de Rugby Sevens, conocido como World Series, lleva décadas siendo uno de los espectáculos deportivos más apasionantes del calendario internacional. Latinoamérica ha producido jugadores de sevens de altísimo nivel, y México ha comenzado a desarrollar un programa específico para esta disciplina que genera cada vez más talento.',
      'Para entrenadores y federaciones, el sevens es también una herramienta de captación. Muchos jóvenes que descubren el rugby a través del sevens terminan integrándose a equipos de rugby de 15. La accesibilidad, la emoción y el ritmo del sevens son el mejor anzuelo para sumar nuevos practicantes al deporte ovalado.',
    ],
  },
  {
    slug: 'mentalidad-campeon',
    title: 'La mentalidad del campeón',
    category: 'Cultura',
    excerpt:
      'Lo que separa a los equipos buenos de los grandes no siempre se mide en quilómetros recorridos ni en kilos levantados.',
    image: '/images/blog-6.png',
    body: [
      'El rugby es un deporte que te pone a prueba físicamente de formas que pocas disciplinas igualan. Pero los entrenadores de los mejores equipos del mundo coinciden en algo: el factor diferenciador entre ganar y perder cuando las capacidades físicas están empatadas siempre es mental. La resiliencia, el liderazgo bajo presión y la identidad colectiva son atributos que se entrenan, no se regalan.',
      'Los equipos que ganan campeonatos lo hacen porque saben qué hacer cuando las cosas van mal. Un ensayo encajado a diez minutos del final, una expulsión en el primer tiempo, una racha de errores: esos momentos revelan si un equipo tiene carácter real o solo ilusión de él. Los campeones no evitan esas situaciones; están preparados para gestionarlas.',
      'El liderazgo distribuido es uno de los conceptos más potentes del rugby moderno. No basta con tener un gran capitán; los mejores equipos tienen líderes en cada posición. El hooker que organiza el lineout, el apertura que calma a los backs bajo presión, el fullback que comunica la disposición defensiva desde atrás. Cuando todos lideran en su área, el equipo se vuelve casi indestructible.',
      'La preparación mental incluye visualización, rutinas precompetitivas y trabajo con psicólogos deportivos. Antes de un partido importante, los jugadores ensayan mentalmente sus movimientos, sus respuestas a situaciones adversas y sus emociones en los momentos decisivos. Esta preparación silenciosa es tan real como el entrenamiento físico.',
      'La cultura del equipo es el contenedor de todo lo anterior. Equipos con valores claros, normas de conducta respetadas y un sentido genuino de pertenencia sobrepasan a los conjuntos con más talento pero menos cohesión. El rugby, con su exigencia de esfuerzo colectivo en cada melé, cada ruck y cada línea defensiva, no perdona la falta de compromiso grupal.',
      'La mentalidad de campeón no es arrogancia ni individualismo. Es humildad para trabajar lo básico todos los días, confianza para ejecutar bajo presión y la certeza de que el esfuerzo colectivo, sostenido en el tiempo, tarde o temprano se convierte en resultado. Ese es el espíritu del rugby, y México lo está aprendiendo partido a partido.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
