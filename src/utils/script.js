const ScriptScene1 = (decisions, nameScript) => {
  const { examinoPeriodicoDigital, tieneMochila, sonarTranquilo } = decisions

  const scriptFirstDialog = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hace mucho que no llamo a mi madre. Aunque primero debería revisar un poco'
    }
  ]

  const scriptConversation1 = [
    {
      author: '<strong>Alex</strong>',
      text: '¡Hola, mamá! ¿Cómo estás?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '¡Alex, cariño! Estoy bien. Pero he estado viendo las noticias, y estoy preocupada. ¿Todo está bien allí en <strong>Nueva Éireann?</strong>'
    },
    sonarTranquilo && {
      author: '<strong>Alex</strong>',
      text: '(intentando sonar tranquilo) Sí, mamá, todo está... un poco agitado. ¿Has estado viendo las noticias otra vez?'
    },
    !sonarTranquilo && {
      author: '<strong>Alex</strong>',
      text: '(agitado) No. Esa cuestión me tiene bastante preocupado. ¿Te enteraste en las noticias?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) Sí, las he estado siguiendo. Parece que el mundo entero está al borde de algo grande. ¿Estás seguro, hijo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(suspira) No estoy tan seguro de nada en este momento. Las tensiones entre la CAN y la UEA han llegado a un punto crítico. Estamos justo en medio de todo esto.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) ¡Oh, mi Dios! ¿Y tú estás a salvo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Por ahora sí, pero... (dudando) Mamá, estoy preocupado. No sé qué hacer.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(comprensiva) Cuéntame, hijo. Siempre encuentras una solución.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(tratando de explicar) Hay algo sobre un recurso, el COV49, esencial para combatir patógenos. La competencia por su control ha desencadenado un conflicto global. La ciudad está en estado de emergencia.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(pensativa) Entiendo. ¿Y qué estás pensando hacer?'
    },
    !examinoPeriodicoDigital &&
    {
      author: '<strong>Alex</strong>',
      text: '(indeciso) No lo sé. Parece que las cosas se están poniendo feas. No tengo idea de qué va a pasar.'
    },
    examinoPeriodicoDigital &&
    {
      author: '<strong>Alex</strong>',
      text: '(decidido) Estoy considerando buscar refugio en otro lugar junto a Sofia. Hay áreas marcadas en el mapa con mayor conflicto. Necesitamos estar a salvo.'
    },
    tieneMochila &&
    {
      author: '<strong>ALex</strong>',
      text: 'Por cierto, mamá, he preparado una mochila con algunas cosas útiles. Solo quiero estar listo por si acaso.'
    },
    tieneMochila &&
    {
      author: '<strong>Madre</strong>',
      text: 'Eso está bien, cariño. Prioriza tu seguridad. Te llamaremos pronto.'
    },
    !tieneMochila &&
    {
      author: '<strong>Madre</strong>',
      text: ' Asegúrate de estar preparado, hijo. Mira a tu  alrededor y reúne algunas cosas esenciales.La familia estará rezando  por ti. ¡Llámame cuando puedas!'
    }
  ].filter(Boolean)

  const scriptNews = [
    {
      author: '<strong>Noticiero</strong>',
      text: 'La tensión entre la CAN y la UEA ha llegado a su punto álgido. Las negociaciones han fracasado, y la guerra se ha desencadenado.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Ambas partes están decididas a pelear hasta el final. Los combates recientes han dejado a Nueva Éireann en un estado de emergencia.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Los recientes combates han dejado estragos en Nueva Éireann. Los hospitales están abrumados, la economía local está colapsando. Si está escuchando esto, busque refugio y prepárese para...'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: '(Conexión interrumpida)',
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Esa multitud parece ir a un lugar seguro, parece un bunker. ¿Debería seguir con ellos y buscar refugio, o intentar ir a donde mi novia?',
      choice: true
    }
  ].filter(Boolean)

  const scriptGoToBunker = [
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, será mejor buscar refugio. No puedo arriesgarme a ir a otro lugar.'
    }
  ]

  const scriptGoToSofia = [
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, iré a buscar a Sofia. Ella es lo más importante para mí.'
    },
    {
      author: '<strong>...</strong>',
      text: '[Los edificios colapsaron enfrente tuyo, la calle se llenó de escombros y no te dejaron seguir. Aún así, encontraste una llave en el suelo que puede ser de utilidad]'
    },
    {
      author: '<strong>...</strong>',
      text: '[Aunque tu objetivo sigue siendo encontrar a Sofia, la destrucción a tu alrededor te obliga a reconsiderar. El único lugar seguro parece ser el bunker al que todos corren]'
    },
    {
      author: '<strong>Alex</strong>',
      text: '¡Maldición! No puedo llegar a Sofia. Tendré que buscar refugio en el bunker.'
    }
  ]

  const warningsSala = [
    {
      author: '<strong>Alex</strong>',
      text: 'Necesitaría algo para llevar este objeto'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo irme sin la mochila'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo irme sin llamar a mi madre'
    }
  ]

  const scripts = {
    scriptFirstDialog,
    scriptConversation1,
    scriptNews,
    scriptGoToBunker,
    scriptGoToSofia,
    warningsSala
  };

  return scripts[nameScript];
}

const ScriptScene2 = (decisions, nameScript, auxiliary) => {
  const { hasFlashlight, hasKey, wantsToShare, hasCommunicator, hasMedkit, wantsToShareKey, wantsToShareFlashlight, openSafeAlone } = decisions

  const stringSharingResources = wantsToShareFlashlight && wantsToShareKey ? 'linterna y una llave' : wantsToShareFlashlight ? 'linterna' : 'llave'

  const scripMeetingSurvivors = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hola, soy Alex. ¿Cómo están todos aquí? ¿Cómo han estado lidiando con toda esta situación?'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: '(sonriendo) ¡Hola, Alex! Bienvenido al búnker. Estamos todos pasando por lo mismo, ¿verdad chicos?'
    },
    {
      author: '<strong>Superviviente B</strong>',
      text: '(asiente) Sí, es un desastre afuera. Pero al menos aquí abajo, tenemos una oportunidad.'
    },
    {
      author: '<strong>Superviviente C</strong>',
      text: 'Perdí contacto con mi familia en los primeros días. No sé si están bien.'
    },
    {
      author: '<strong>Superviviente D</strong>',
      text: '(serio) Todos hemos perdido algo. Pero ahora estamos aquí, y tenemos que cuidarnos mutuamente.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Eso es cierto, lo mejor que podemos hacer ahora es reunir las cosas que tenemos y mantener una gestión equitativa de todo.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Veo que tienes una mochila, ¿hay algo útil que nos pueda servir a todos?'
    },
    {
      author: '<strong> ... </strong>',
      text: '¿Debería compartir mis cosas con ellos? Parecen amigables, pero estas son situaciones difíciles.',
      choice: true
    }
  ]

  const scriptAnsweringSurvivorsResources = [
    // No tiene nada
    !wantsToShareKey && !wantsToShareFlashlight &&
    {
      author: '<strong>Alex</strong>',
      text: 'No, no tengo nada en mi mochila'
    },
    (!wantsToShareKey && !wantsToShareFlashlight) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: '(desconfiado) Mmm, ya veo'
    },
    //Quiso compartir algo
    (wantsToShareKey || wantsToShareFlashlight) &&
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, tengo una ' + stringSharingResources
    },
    // Quiso compartir la llave
    (wantsToShareKey) && {
      author: '<strong>Superviviente B</strong>',
      text: '¿Dónde encontraste esa llave?'
    },
    (wantsToShareKey) && {
      author: '<strong>Alex</strong>',
      text: 'Mientras, corría hacía aquí la encontré en el piso'
    },
    (wantsToShareKey) && {
      author: '<strong>Superviviente B</strong>',
      text: 'Parece ser la llave de la caja fuerte del Bunker. El responsable de ella la dejo caer.'
    },
    // Quiso compartir cualquier cosa
    ((wantsToShareKey || wantsToShareFlashlight)) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Bien, nos será de ayuda'
    },
  ].filter(Boolean)


  const scriptTraitorFound = [
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Hemos estado perdiendo suministros últimamente. ¿Alguien tiene alguna idea de lo que está sucediendo?'
    },
    {
      author: '<strong>Superviviente E</strong>',
      text: '¡No puedo creer que alguien de nosotros estaría haciendo esto! ¡Estamos juntos en esto!'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Tranquilos muchachos, lo resolveremos y buscaremos al culpable.'
    }
  ]


  const scriptAfterTraitorFound = [
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) No puede ser. Ahora, con menos recursos la convivencia y supervivencia en el bunker serán más complicada'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: '¿Qué deberíamos hacer ahora?'
    },
    !hasKey && {
      author: '<strong>Superviviente B</strong>',
      text: 'Creo que deberíamos abrir la caja fuerte que esta arriba, lo hemos intentado pero no hemos podido abrirla'
    },
    !hasKey && {
      author: '<strong>Superviviente A</strong>',
      text: 'Alex, crees que podrías ayudarnos a abrir la caja fuerte?'
    },
    !hasKey && {
      author: '<strong>Alex</strong>',
      text: 'Si claro, vamos a intentarlo'
    },
    hasKey && {
      author: '<strong>Superviviente B</strong>',
      text: 'Deberiamos encontrar la llave que abre la caja fuerte del segundo piso, es nuestra mejor opcion'
    },
    hasKey && {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) ¿ Y si la llave que tengo abré esa tal caja fuerte?'
    },
    hasKey && {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) ¿Debería decirles que tengo la llave y abrirla juntos, o debería intentar abrirla por mi cuenta?',
      choice: true
    }
  ].filter(Boolean)

  const scriptOpenSafeAlone = [
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Intentaré abrirla por mi cuenta, ire ahora mismo al segundo piso'
    }
  ]

  const scriptOpenSafeGroup = [
    {
      author: '<strong>Alex</strong>',
      text: 'Muchachos, yo tengo una llave, podemos intentar abrilar juntos y ver que hay dentro'
    },
  ]

  const scriptLostSafeMinigameAlone = [
    {
      author: '<strong>Alex</strong>',
      text: 'No puede ser. No logro abrirla.'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Tendré que dejarlo o los demás comenzarán a sospechar. Al menos consegui esta especie de recurso medico.'
    }
  ]

  const scriptWinSafeMinigameAlone = [
    {
      author: '<strong>Alex</strong>',
      text: 'Genial. ¡La caja fuerte está desbloqueada!'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Hay muchas cosas aquí. ¿Qué debería llevarme?'
    },
  ]

  const scriptToSleep = [
    {
      author: '<strong>Superviviente B</strong>',
      text: 'Creo que deberíamos descansar un poco. Alex, arriba puedes encontrar una cama para dormir'
    }
  ]

  const scriptPickedItemsSafeAlone = [
    {
      author: '<strong> ... </strong>',
      text: '[Alex toma los elementos escogidos]'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Creo saber cómo usar este comunicador...'
    },
    {
      author: '<strong>Comunicador</strong>',
      text: '...ubicado en las coordenadas 34.567, -78.901.'
    },
    {
      author: '<strong>Comunicador</strong>',
      text: 'Alex, si estás ahí, espero que  escuches esto.'
    },
    {
      author: '<strong>Comunicador</strong>',
      text: 'Necesitamos refuerzos y recursos.'
    },
    {
      author: '<strong>Comunicador</strong>',
      text: 'Si hay alguien escuchando, respondan.'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Esa es la voz de Sofía...'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Debo ir a buscarla; me iré de este lugar'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Será mejor que me retiré antes de que alguien me descubra'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex se retirá del bunker con esperanzas de hallar mejores oportunidades fuera de él, aunque antes de irse le roban algunas cosas]'
    }
  ]

  const scriptLostSafeMinigameGroup = [
    {
      author: '<strong>Superviviente A</strong>',
      text: '¿Qué pasa Alex, está atorada la puerta de la caja fuerte?'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No... es que no la logro abrir...'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Mmm, dejame intentarlo'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Supervivienta A intenta abrir la caja fuerte con la llave. Después de 5 segundos logra abrirla]'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Ya está abierta.'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Bien. Ahora podemos tomar cada uno de los recursos y repartirlos equita...'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Los demás supervivientes comienzan a tomar los recursos de la caja fuerte de forma descontrolada]'
    },
    {
      author: '<strong>Alex</strong>',
      text: '¿?'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) No voy a poder tomar nada de la caja fuerte en este desorden'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Supongo que así son las cosas...'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Mejor me retiraré de aquí. Este lugar no tiene futuro...'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) ...por lo menos, para mí'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex se retirá del bunker con esperanzas de hallar mejores oportunidades fuera de él]'
    }

  ]

  const scriptWinSafeMinigameGroup = [
    {
      author: '<strong>Alex</strong>',
      text: 'Bien, parece que la he logrado abrir'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Ahora podemos tomar cada uno de los recursos y repartirlos equita...'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Los demás supervivientes comienzan a tomar los recursos de la caja fuerte de forma descontrolada]'
    },
    {
      author: '<strong>Alex</strong>',
      text: '¿?'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex con un movimiento rápido alcanza un suministro médico antes de ser apartado de la caja fuerte]'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo creerlo. Se supone que deberíamos repartirnos los recursos equitactivamente.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) No voy a poder tomar nada más de la caja fuerte en este desorden'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Supongo que así son las cosas...'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Mejor me retiraré de aquí antes de que las cosas empeoren'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Por lo menos, logré tomar este suministro médico'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex se retirá del bunker con esperanzas de hallar mejores oportunidades fuera de él]'
    }
  ]


  // Esto sucede inmediamente despues de que Alex se presente a los demás supervivientes
  // Despues de los 15 dias sucede el evento con el traidor
  const scriptDays = [
    {
      author: '<strong> ... </strong>',
      text: '15 días después'
    }
  ]

  const scriptCircleGameInit = [
    {
      author: '<strong>Alex</strong>',
      text: 'Vale, vamos a ver.... Necesito abrir la caja fuerte. Pero, ¿como funciona este minijuego?'
    },
    {
      author: '<strong>...</strong>',
      text: 'El juego es simple, tienes que dar a la tecla <strong>ENTER</strong> cuando la flecha este apuntando a un circulo remarcado'
    },
    {
      author: '<strong>...</strong>',
      text: 'Pero recuerda, tienes solamente 3 vidas... ¡No las pierdas!'
    }
  ]

  const scriptCircleGameLives = [
    {
      author: '<strong>...</strong>',
      text: '¡Oh no! ¡Perdiste una vida!. Te quedan ' + auxiliary.lives + ' vidas'
    }
  ]

  const scriptCircleGameWin = [
    {
      author: '<strong>...</strong>',
      text: '¡Felicidades! ¡Ganaste! Veamos que pasara con tu destino...'
    }
  ]

  const scriptCircleGameLose = [
    {
      author: '<strong>...</strong>',
      text: '¡Oh no! ¡Perdiste! Veamos que pasara con tu destino...'
    }
  ]

  const scriptNotGoToBed = [
    {
      author: '<strong>Alex</strong>',
      text: 'Ya dormí lo suficiente, debería ir a charlar con los demás'
    }
  ]

  const scriptNotGoToBed2 = [
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo dormir, debería ir a charlar con los demás'
    }
  ]

  const scriptNotSafe = [
    {
      author: '<strong>Alex</strong>',
      text: 'No se muy bien que hacer con esto, debería ir a charlar con los demás'
    }
  ]

  const scriptGoToSafe = [
    {
      author: '<strong>Superviviente A</strong>',
      text: 'La caja fuerte esta en el segundo piso Alex, ayudanos a abrirla'
    }
  ]

  const scripts = {
    scripMeetingSurvivors,
    scriptAnsweringSurvivorsResources,
    scriptTraitorFound,
    scriptAfterTraitorFound,
    scriptOpenSafeAlone,
    scriptOpenSafeGroup,
    scriptLostSafeMinigameAlone,
    scriptWinSafeMinigameAlone,
    scriptPickedItemsSafeAlone,
    scriptLostSafeMinigameGroup,
    scriptWinSafeMinigameGroup,
    scriptDays,
    scriptCircleGameInit,
    scriptCircleGameLives,
    scriptCircleGameWin,
    scriptCircleGameLose,
    scriptToSleep,
    scriptNotGoToBed,
    scriptNotGoToBed2,
    scriptGoToSafe,
    scriptNotSafe
  };

  return scripts[nameScript];
}


const ScriptIntroduction = () => {
  const script = [
    {
      text: 'Bienvenido a Nueva Éireann, año 2045. La tecnología ha catapultado la civilización a nuevas alturas, pero no todo es lo que parece.'
    },
    {
      text: 'El mundo está al borde. Dos gigantes, la Coalición de América del Norte y la Unión Euroasiática, se enfrentan en un juego peligroso de poder. Las ganas de poseer algo que se encontro en el Artico'
    },
    {
      text: 'Un recurso vital, el COV49, esencial para combatir patógenos mortales. La competencia por su control ha desencadenado un conflicto global.'
    },
    {
      text: 'Lo que inició como una disputa territorial ha evolucionado hacia una inminente guerra a gran escala. La tensión es palpable, y cada decisión puede llevar al mundo al abismo.'
    }
  ]

  return script
}

const ScriptScene3 = (decisions, nameScript, backlog) => {

  /* ------------------- Dialogo de introducción a la escena ------------------ */

  //showD1S3 
  const introduction = [
    decisions.knowsAboutSofia && {
      author: '<strong>Alex</strong>',
      text: '(pensando) Que bien que logre salir del bunker, ya han pasado algunos días y aún no he encontrado las coordenadas que dijó Sofía '
    },
    !decisions.knowsAboutSofia && {
      author: '<strong>Alex</strong>',
      text: '(pensando) Que bien que logre salir del bunker, ya han pasado algunos días y aún no he encontrado nada bueno por aquí'
    },
    {
      author: '<strong>Alex</strong>',
      text: '...'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) ¿Qué son esos gritos? Alguien parece pedir ayuda'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensando) Iré a investigar'
    }
    
    //
    // {
    //   author: '<strong>Alex</strong>',
    //   text: '...'
    // },
    // {
    //   author: '<strong>Alex</strong>',
    //   text: '¿Qué es eso que esta a lo lejos?'
    // },
    // decisions.knowsAboutSofia && {
    //   author: '<strong>Alex</strong>',
    //   text: 'Para ser un anciano que necesita ayuda'
    // },
    // !decisions.knowsAboutSofia && {
    //   author: '<strong>Alex</strong>',
    //   text: 'Para ser un anciano que necesita ayuda, pero tambien hay una niña al otro lado'
    // },
    // {
    //   author: '<strong>Anciano</strong>',
    //   text: '(Sufriendo) Por favor, necesito ayuda. Estoy herido!'
    // },
    // !decisions.knowsAboutSofia && {
    //   author: '<strong>Niña</strong>',
    //   text: '(Llorando) Estoy perdido y no encuentro a mi madre, alguien por favor ayudeme!'
    // },
    // {
    //   author: '<strong>Alex</strong>',
    //   text: '¿Debería intentar ayudar?',
    //   choice: true
    // },
  ].filter(Boolean)

  /* ---------------------- Dialogo para ayudar a alguien --------------------- */

  // decision: helpToOldMen
  // choiceHelpToSomeone
  //decision: helpToChild => Solo aparece si decisions.knowsAboutSofia es false
  //decision: helpToNoBody => Solo aparece si decisions.knowsAboutSofia es true
  // El choice va a ser ayudar a alguien o no ayudar a nadie, la ultima aparece solo si decisions.knowsAboutSofia es true
  const helpToSomeone = [
    decisions.knowsAboutSofia && {
        author: '<strong>Alex</strong>',
        text: 'Es un anciano que necesita ayuda'
      },
      !decisions.knowsAboutSofia && {
        author: '<strong>Alex</strong>',
        text: 'ES un anciano que necesita ayuda, pero tambien hay una niña al otro lado'
      },
      {
        author: '<strong>Anciano</strong>',
        text: '(Sufriendo) Por favor, necesito ayuda. Estoy herido!'
      },
      !decisions.knowsAboutSofia && {
        author: '<strong>Niña</strong>',
        text: '(Llorando) Estoy perdido y no encuentro a mi madre, alguien por favor ayudeme!'
      },
      {
        author: '<strong>Alex</strong>',
        text: '¿A quién debería ayudar?',
        choice: true
      }
   
  ].filter(Boolean)




  // showD2S3
  // decision: helpToOldMen
  // decision: isOldMenDead
  // removeFromBacklog('medical')
  const helpToOldMen = [
    {
      author: '<strong>Alex</strong>',
      text: 'Tranquilo, haré lo que pueda para ayudarte'
    },
    // Tiene el suministro medico
    backlog.includes('medical') && {
      author: '<strong>Alex</strong>',
      text: 'Vale, creo que esto podra ayudarte, voy a sanarte la herida, mientras tanto toma estas pastas'
    },
    backlog.includes('medical') && {
      author: '<strong>Alex</strong>',
      text: 'Creo que ya está, con esto deberías estar bien señor'
    },
    backlog.includes('medical') && {
      author: '<strong>Anciano</strong>',
      text: 'Muchas gracias muchacho, que Dios lo bendiga'
    },
    // No tiene el suministro medico
    !backlog.includes('medical') && {
      author: '<strong>Alex</strong>',
      text: 'Voy a intentar curarte señor, hare todo lo que pueda'
    },
    !backlog.includes('medical') && {
      author: '<strong>Alex</strong>',
      text: '(pensando) No tengo nada para ayudarlo, creo que va a morir'
    },
    !backlog.includes('medical') && {
      author: '<strong>Anciano</strong>',
      text: 'Tranquilo muchacho, tampoco hay mucho por hacer, mi hora a llegado, gracias por intentarlo'
    },
    !backlog.includes('medical') && {
      author: '<strong>...</strong>',
      text: 'El anciano muere....'
    },
    !backlog.includes('medical') && {
      author: '<strong>Alex</strong>',
      text: 'Juró que lo intente, pero me faltó tener algo para poder cerrar la herida, que mierda es esta!'
    },
  ].filter(Boolean)

  /* ------------------ Dialogo despues de ayudar al anciano ------------------ */
  // Solo pasa si Alex no sabe donde esta su novia. Si SABE DONDE esta, no pasara este dialogo y seguira directamente a la escena de los maleantes

  // showD3S3
  // actions: showFinishStory
  // actions: finishStory
  const effectHelpToOldMen = [
    // El anciano no esta muerto
    !decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'La decisión de ayudar al anciano y salvarlo generó respeto entre los sobrevivientes que estaban llegando a la zona, los cuales se acercan'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Sobreviviente A</strong>',
      text: '(aplaudiendo la acción de Alex) Bien hecho. No todos están dispuestos a ayudar en estos tiempos'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Sobreviviente B</strong>',
      text: '(mirando a Alex) Oye, gracias por hacer esto. Necesitamos más personas solidarias como tú'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Sobreviviente A</strong>',
      text: 'Hemos estado buscando a más personas dispuestas a ayudar. Con tu acto de generosidad, creemos que podrías ser una adición valiosa a nuestro grupo.'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Alex</strong>',
      text: '(sorprendido) ¿Unirme a su grupo? No estoy seguro...'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Alex</strong>',
      text: '(sonriendo) En un mundo así, es bueno tener aliados confiables. Si estás dispuesto, nos gustaría que te unieras a nosotros.'
    },
    !decisions.isOldMenDead && {
      author: '<strong>Alex</strong>',
      text: 'Está bien, me uniré..'
    },
    !decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'FIN'
    },

    // El anciano murio
    decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'Un grupo de sobrevivientes se acercan hasta llegar a donde Alex y ven al anciano muerto'
    },
    decisions.isOldMenDead && {
      author: '<strong>Superviviente A</strong>',
      text: '(frunciendo el ceño) ¿Qué está pasando? ¿Por qué no se mueve?'
    },
    decisions.isOldMenDead && {
      author: '<strong>Superviviente B</strong>',
      text: '(mirando a Alex con desconfianza) ¡Tú! ¿Qué le hiciste'
    },
    decisions.isOldMenDead && {
      author: '<strong>Superviviente C</strong>',
      text: '(señalando acusadoramente a Alex) ¡Miren, el anciano estaba bien antes de que este tipo llegara!'
    },
    decisions.isOldMenDead && {
      author: '<strong>....</strong>',
      text: 'La tensión aumenta y los demás supervivientes comienzan a rodear a Alex, visiblemente enfadados'
    },
    decisions.isOldMenDead && {
      author: '<strong>Superviviente A</strong>',
      text: ' (agresivo) En estos tiempos, no podemos permitirnos cargar con personas peligrosas. Debemos protegernos'
    },
    decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'Sin darle a Alex la oportunidad de explicarse, el grupo, lleno de ira y miedo, ataca a Alex. La situación se vuelve caótica mientras intentan tomar justicia por sus propias manos'
    },
    decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'La violencia aumenta, y el grupo, convencido de la culpabilidad de Alex, lo somete. La decisión de ayudar al anciano se convierte en un trágico giro del destino para , un giro que desata su muerte'
    },
    decisions.isOldMenDead && {
      author: '<strong>...</strong>',
      text: 'FIN'
    },
  ].filter(Boolean)

  /* ----------------------------- Ayudar al Niña ----------------------------- */

  // showD3S3
  // Seguir con la escena de los maleantes
  // decision: helpToChild
  const helpToChild = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hola niña,¿como estás?, ¿cual es tu nombre?'
    },
    {
      author: '<strong>Niña</strong>',
      text: 'Hola, me llamo Veronica'
    },
    {
      author: '<strong>Alex</strong>',
      text: '¿Por que estas llorando Veronica? ¿Te encuentras bien?'
    },
    {
      author: '<strong>Veronica</strong>',
      text: 'Me he perdido, salí a explorar pero unos perros me persiguieron, corrí muy lejos y ya no se como volver'
    },
    {
      author: '<strong>Veronica</strong>',
      text: 'Antes de irme tomé un mapa con la ubicación del bunker, pero no se como llegar, ¿Podrías ayudarme? '
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Si claro, tampoco es que tenga mucho que hacer, con gusto te ayudare'
    },
    {
      author: '<strong>...</strong>',
      text: 'Veronica le da el mapa a Alex y siguen su busqueda al nuevo bunker'
    },
  ]

  /* ---------------------------- No ayudar a nadie --------------------------- */
  // showD5S3
  // Seguir con la escena de los maleantes
  const helpToNoBody = [
    {
      author: '<strong>...</strong>',
      text: 'Alex decide no detenerse y seguir hacia su objetivo. Aunque se siente mal por no ayudar, la urgencia de reunirse con Sofía lo impulsa a seguir adelante.'
    },
  ]

  /* ----------------------------- El grupo hostil ---------------------------- */

  // choiceFaceGroup
  // Este dialogo inicia el minijuego
  //Recordar cuando finalice minijuego hacer playedMiniGame2 a true, es un actionsGame
  const IntroHostilGroup = [
    {
      author: '<strong>...</strong>',
      text: 'Avanzando hacia el nuevo bunker, Alex se topa con un grupo de supervivientes hostiles, hay miradas desconfiadas y armas a la vista'
    },
    {
      author: '<strong>Lider del grupo</strong>',
      text: '(amenazante) ¿Quién eres y qué estás haciendo aquí?'
    },
    decisions.helpToChild && {
      author: '<strong>...</strong>',
      text: 'La niña muy asustada sale corriendo, aunque Alex se quedá quieto diciendole al grupo que la deje ir'
    },
    {
      author: '<strong> Alex </strong>',
      text: '¡Solo estoy buscando a alguien! Dejenme ir, no les dare ningún problema'
    },
    {
      author: '<strong>Lider del grupo</strong>',
      text: '(con risa malvada) ja-ja-ja-ja eso núnca pasara amigo mío. Veo que tienes una mochila, y la quiero. A demás, no hemos comido en un buen tiempo, ¿o no chicos...?'
    },
  ].filter(Boolean)

  // Con el juego cambia el winMiniGame2
  const introMinigame = [
    {
      author: '<strong>...</strong>',
      text: 'Alex viendo que su vida estaba en peligro, corre lejos del grupo hostil esquivando los disparos y escondiendose en un lugar aparentemente seguro'
    },
  ]

  // showD5S3
  const winMiniGame = [
    decisions.knowsAboutSofia && {
      author: '<strong>Alex</strong>',
      text: 'Creo que ya es seguro. Seguire con la busqueda de Sofía'
    },
    !decisions.knowsAboutSofia && {
      author: '<strong>Alex</strong>',
      text: 'Creo que ya es seguro. Seguire con la busqueda de ese nuevo bunker que menciono la niña'
    },
  ].filter(Boolean)

  //showD5S3
  // actions: showFinishStory => Si no tiene botiquin => ES DECIR VA A EL PLACE DE FINISH STORY
  // actions: finishStory => Si no tiene botiquin
  // removeFromBacklog('medical') => Si tiene el botiquin
  //Solo pasa si playedMiniGame2 es true y si no tiene el botiquin en backlog
  const lostMiniGame = [
    {
      author: '<strong>...</strong>',
      text: 'Alex lográ huir nuevamente a un lugar seguro, pero desgraciadamente le dieron un tiro en su pierna'
    },
    backlog.includes('medical') && {
      author: '<strong>...</strong>',
      text: ' Afortunadamente, cuenta con su botiquín, por lo que trata sus herdias y sigue adelante'
    },
    !backlog.includes('medical') && {
      author: '<strong>...</strong>',
      text: ' Sin un botiquín, no puede detener la hemorragia de sus heridas.'
    },
    !backlog.includes('medical') && {
      author: '<strong>...</strong>',
      text: 'Alex camina, pero la pérdida de sangre es demasiado. Su fuerza se desvanece, y lamentablemente, no puede continuar'
    },
    !backlog.includes('medical') && {
      author: '<strong>...</strong>',
      text: 'FIN.'
    },
  ].filter(Boolean)

  //showD6S3
  // actions: showFinishStory
  // actions: finishStory
  const comeToNewBunker = [
    {
      author: '<strong>...</strong>',
      text: 'Después de superar innumerables desafíos, Alex llega al nuevo bunker. Se encuentra con Sofía, y la emoción de la reunión marca el inicio de una nueva etapa para ambos en ese refugio'
    },
    {
      author: '<strong>Sofia</strong>',
      text: 'Alex! Pense que no te volveria a ver'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Siempre estuve pensando en ti, sabia que te encontraria'
    },
    {
      author: '<strong>...</strong>',
      text: 'Ambos se abrazan fuertemente, como si el simple contacto pudiera confirmar que están juntos y a salvo. Después del abrazo, se miran el uno al otro con complicidad'
    },
    {
      author: '<strong>Sofia</strong>',
      text: 'Pasamos por tanto. Pensé que...'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(interrumpiendo) Estamos aquí ahora. Eso es lo que importa.'
    }, 
    {
      author: '<strong>...</strong>',
      text: 'FIN'
    },
  ]

  const script = {
    introduction,
    helpToSomeone,
    helpToOldMen,
    effectHelpToOldMen,
    helpToChild,
    helpToNoBody,
    IntroHostilGroup,
    introMinigame,
    winMiniGame,
    lostMiniGame,
    comeToNewBunker
  }

  return script[nameScript]
}

export const getSceneScript = (scene, decisions, nameScript, auxiliary) => {
  switch (scene) {
    case 0:
      return ScriptIntroduction()
    case 1:
      return ScriptScene1(decisions, nameScript)
    case 2:
      return ScriptScene2(decisions, nameScript, auxiliary)
    case 3:
      return ScriptScene3(decisions, nameScript, auxiliary)
    default:
      return {}
  }
}

// const decisions = {
//   examinoPeriodicoDigital: true,
//   tieneMochila: false
// }
//
// const guion = getSceneScript(1, decisions)
// console.log(guion)
