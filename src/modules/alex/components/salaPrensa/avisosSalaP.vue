<template>
    <v-sheet>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section class="mt-15 mb-15">
                    <v-row class="justify-center">
                        <CardAvisos v-for="aviso in avisos" :key="aviso.id" :aviso="aviso"></CardAvisos>
                    </v-row>
                </section>
            </v-responsive>
        </v-theme-provider>         
    </v-sheet>
</template>
<script>
import CardAvisos from './child/cardAvisos.vue';

export default {
    name: "avisosSalaP",
    data() {
        return {
            show: false,
            avisos: [
                {
                    id: 1,
                    categoria: "Política",
                    fecha: "02-11-2022",
                    autor: "Pedro Pony",
                    title: "Si no me hubiesen hecho fraude en 2006, México estaría muchísimo mejor, dice AMLO",
                    image: "https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/313968940_3492924144325503_6803119406021092838_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEoQ8daOMpdQIRQKB2olIRH-sdHLZf3SGX6x0ctl_dIZb-wMeLdXIaA1qfKpQaSoRRoDUC_y2FDYXdhKcBze49d&_nc_ohc=onCsXXcCQjsAX-p4s1a&_nc_ht=scontent.fcjs3-2.fna&oh=00_AfB4w0X1cYKEkP8dNzk21S5kMZOlAiUyplyGDIWftYraDw&oe=6368778F",
                    content: "El presidente Andrés Manuel López Obrador acusó que en 2006 le cometieron fraude electoral y expresó que si hubiese ganado esa elección presidencial, México estaría muchísimo, muchísimo mejor. En su conferencia mañanera de este martes en Palacio Nacional, López Obrador también acusó que en el “fraude para imponer a Calderón”, a la maestra Elba Esther Gordillo, el expresidente de México le entregó “en pago” dependencias como el ISSSTE. “¿No considera usted que llegó tarde a la Presidencia de la República”, se le preguntó. “No llegué antes por el fraude electoral, y sí hubiésemos evitado muchas tragedias y no estaría así el país, estaría muchísimo, muchísimo mejor”, respondió López Obrador al mencionar “la guerra de Calderón”. “Imagínense el daño que causó la guerra de Calderón, que le pegó un garrotazo a lo tonto al avispero, nada más para buscar legitimidad, para quedar bien con nuestros vecinos. “Porque eso también lo hizo Salinas después del fraude, cuando no encuentran legitimidad aquí, se van a buscar legitimidad al extranjero y ahora está hasta de moda que se vana vivir al extranjero”, expresó. ", 
                    
                },
                {
                    id: 2,
                    categoria: "Desastre",
                    fecha: "2-11-2022",
                    autor: "Pedro Pony",
                    title: "Alertan a Felipe Carrillo Puerto y Tulum por tormentas intensas tras la entrada del huracán Lisa categoría 1",
                    image: "https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/313969489_3492907687660482_3680359679608796539_n.jpg?stp=dst-jpg_p480x480&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEaRfAnI8XPnS63hnLMhs-heI-eRZbgnhd4j55FluCeF0_OEkBc8enC0S5YOiYPlrY3n-HDJUsCyyFN_KbaDR7Z&_nc_ohc=AZxLid9c0KQAX9iEzmU&_nc_ht=scontent.fcjs3-2.fna&oh=00_AfCkPl_NxEt3OMZJl5A_qTtlnlXMQAC_WZCKwivC7YotjA&oe=6367FE26",
                    content: "Su centro se localiza a 100 km al norte de la Isla Roatán, Honduras y a 200 km al sureste de Puerto Costa Maya, Q. Roo. Presenta vientos máximos sostenidos de 120 km/h, rachas de 140 km/h y desplazamiento hacia el oeste a 24 km/h. Esperamos fuertes lluvias, rachas de viento de 50 a 70 km/h y oleaje de 2 a 3 metros de altura en nuestras costas. Se extiende zona de prevención desde Chetumal hasta Punta Allen."
                },
                {
                    id: 3,
                    categoria: "Cultural",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Quintana Roo celebra Hanal Pixán lleno de historia, tradición y espiritualidad",
                    image: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/312357812_3492573487693902_8978718309398293906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFYQkkExWLx09tCvhpQ21euuRSwVAZ4cPC5FLBUBnhw8C9q9DoVixc9XJkt42wcm1hUGoBFjsG2N3T-YcnD2EU9&_nc_ohc=YNPM9B_4tTgAX9TiplC&_nc_oc=AQl_WmZXrrU3q7M0ZZPySHj3VlK2Gajllz8OgrjB2UQDh5z4OUdT7mJEwDQnWXMifq4&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfAWe0k9QleKSEKMCoSf0ossLcmYGqGcpsqO1iBx7ZlC3w&oe=63685EDA",
                    content: "La gobernadora Mara Lezama acompañada de las y los ciudadanos destacó que las tradiciones marcan la esencia del pueblo y la comunidad En este gobierno trabajamos para rescatar nuestras tradiciones y costumbres, y que sean un atractivo adicional que hagan que más gente nos visite y se quede más tiempo en Quintana Roo, expresó la gobernadora Mara Lezama Espinosa al participar hoy en el Paseo de las Ánimas y en el programa de Hanal Pixán, en la explanada frente al Palacio de Gobierno. “Que más gente conozca el sur, que venga a Chetumal, y descubra todo el misticismo que hay en nuestros vestigios arqueológicos que muy pronto recibirán una inversión histórica, mil millones de pesos, que gestionamos hace apenas un par de semanas” citó Mara Lezama vestida con el tradicional huipil y frente a la bahía que es toda una maravilla y atractivo natural del sur. Al dirigirse a las miles de personas que se reunieron para participar en este evento tradicional, la Gobernadora del Estado afirmó que su gobierno trabaja para que nuestras raíces no sean sólo un souvenir, un recuerdo, un elemento decorativo en casa para el turismo, sino que marquen la esencia de nuestro pueblo y de nuestra comunidad. “Y es por eso estamos construyendo un Nuevo Acuerdo por el Bienestar y Desarrollo en Quintana Roo, con el que vamos a rescatar nuestras tradiciones, a enaltecer nuestra cultura y a mostrarle al mundo que en Quintana Roo, tenemos mucho más que ofrecer además de playas y vida nocturna” puntualizó la primera mujer Gobernadora de Quintana Roo. Acompañada de familias de esta capital, Mara Lezama participó en el Paseo de las Ánimas que partió desde el Museo de la Cultura Maya hasta la plaza cívica de Palacio de Gobierno en donde se instalaron altares, obras de arte de mujeres emprendedoras y que muestran la magia que hay en nuestra tierra y la calidez de un pueblo que alimenta y preserva las más bellas tradicionales. Antes de recorrer los stands y las muestras culturales, la gobernadora Mara Lezama expresó que hoy es una fecha importante, el día en que nuestros difuntos regresan a casa, en que las ánimas regresan a abrazar a sus hijas, hijos, nietas, nietos, viudas y viudos, hermanas y hermanos.  Este homenaje para celebrar la vida de los difuntos es una pequeña ofrenda y un gran tesoro cultural. Es historia viva, memoria colectiva, espiritualidad que se funde en la diversidad de nuestra tierra y nuestra gente. La bienvenida estuvo a cargo de la presidenta municipal Yensunni Martínez Hernández; la explicación del evento a cargo de la directora general del Sistema DIF Quintana Roo, Abril Cristina Sabido Alcérreca, y los motivos por la Presidenta del Sistema DIF Quintana Roo, Verónica Lezama Espinosa. La muestra de Hanal Pixán incluyó el corte del pan de muerto, recorrido por siete altares de escuelas participantes mismas que fueron premiadas. El tercer lugar correspondió al Centro de Estudios Tecnológicos del Mar (CETMAR); segundo lugar el Instituto de Estudios Superiores para la Competitividad y el Desarrollo de América, y el primer lugar la Universidad Autónoma de Quintana Roo (UAQROO). Mara Lezama recorrió la muestra de mujeres emprendedoras, la exposición artesanal. Se tuvo la participación del Ballet Folclórico del Instituto de la Cultura y las Artes, así como de grupos culturales de diversas agrupaciones."                 },
                {
                    id: 4,
                    categoria: "Accidente",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Tránsito detiene a un hombre que ponía en peligro a la ciudadanía Carrilloportense",
                    image: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/313114380_3492415821043002_7050738716458922437_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFNBeKIo2JyFnFqf-xJ_ExBoH0W0XZOygegfRbRdk7KBz2_dUERRfaN0C_eQ3n12oEOziyQ6ea59pq5qzlznaNo&_nc_ohc=zQB7aMOcxWkAX91v3_Q&tn=UNc3UiCZEcauS979&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfDh5jbHLfUX4C7qwDCIPHKaUarlniEB7nRDCM0P1t_rgg&oe=6367A026",
                    content: "Un hombre que conducía en completo estado de ebriedad cómo alma que lleva el diablo,  fue detenido por elementos de la policía de tránsito por poner en peligro a la ciudadanía, varios reportes se realizaron al 911 de un vehículo tipo Jetta color gris que estuvo apunto de causar un accidente en la calle 62 x calle 51 x 53. El sujeto alcoholizado se montó en la banqueta a toda velocidad a punto de llevarse a unos Ciudadanos de corbata, afortunadamente un elemento Policíaco que estaba en la zona presenció el hecho dándole  parte inmediata a sus compañeros por lo que fue perseguido y asegurado en la calle 66 x 45 y 47. Por fortuna no sucedió alguna desgracia y se evito asegurando al hombre con todo y vehículo." 
                },
                {
                    id: 5,
                    categoria: "Accidente",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Presuntos normalistas prendieron fuego a varios vehículos en carretera de Michoacán",
                    image: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/313890756_3491885017762749_4018664829914795481_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHpH5E9UsP1HWRpRaGa8H-4UMM3DshhrqhQwzcOyGGuqHvslV3vzKenDX58Y3lLMHzZiPK2Oe0-VAheyAEejoZr&_nc_ohc=2hm85aIsNLQAX8CTEZa&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfCqfzdkk1wDtlskWWHMQjdJufNJMLjXIkfvlAw35VSY4A&oe=6366FC9C",
                    content: "Supuestos normalistas se apoderaron de varios vehículos y posteriormente les prendieron fuego en una carretera de Michoacán. A través de las grabaciones que circularon en redes sociales se pudo ver la quema de las unidades y algunas de las consignas que escribieron encima de ellas. De acuerdo con medios locales fueron por lo menos 10 vehículos los que fueron incendiados con el objetivo de que liberaran a sus compañeros. Según los reportes los hechos sucedieron sobre la carretera Uruapan - Carapan durante el lunes 31 de octubre. “Liberación a nuestros compañeros presos políticos, ¡Libertad!”, fueron algunas de las consignas que rayaron sobre las unidades. Cabe resaltar que algunos de los automóviles afectados pertenecían a empresas privadas de comida o frituras. Las unidades robadas fueron reunidas en un tramo carretero para bloquear las vías de comunicación y les prendieron fuego. De acuerdo con los reportes locales los normalistas exigieron que sus compañeros, que se encuentran en prisión preventiva en el Cereso de Uruapan, fueran liberados. Además algunos reportes señalaron que los agresores también exigieron plazas. El gobernador de la entidad Alfredro Ramírez Bonilla ha declarado que no habrá venta de plazas. Cabe recordar que el pasado jueves 27 de octubre fueron detenidos tres normalistas, quienes fueron identificados como Cecilia, Miguel y José Luis. Varios usuarios de redes sociales pudieron captar el momento en que las llamas consumían las unidades en el ramo carretero. Hace algunos días, en el marco de las manifestaciones tras 8 años de la desaparición forzada de 43 estudiantes de la escuela normal rural Isidro Burgos en Iguala, Guerrero, padres, madres y familiares de las víctimas se conglomeraron el domingo 25 de septiembre en el Hemiciclo a Juárez, Ciudad de México. La Avenida Juárez fue completamente bloqueada y resguardada por elementos de la Secretaría de Seguridad Ciudadana de capital (SSC). Cabe recordar que apenas el pasado domingo 29 de octubre se informó de la detención de Leonardo Octavio “V” “P”, quien fungió como secretario de Seguridad en el estado de Guerrero, cuando se dio la desaparición de 43 estudiantes de la escuela normal rural Isidro Burgos. El exfuncionario, militar ya retirado, fue detenido el pasado 28 de octubre en Tepic, Nayarit, en donde se ocultaba luego de que hace algunas semanas fue girada una orden de aprehensión en su contra, acusado de delincuencia organizada. Asimismo el pasado mes de julio, los estudiantes de la Escuela Normal Rural ‘Vasco de Quiroga’ (E.N.R.V.Q.), ubicada en la localidad de Tiripetío, Michoacán, denunciaron diversos incumplimientos por parte de las autoridades educativas de la entidad. Según sus pronunciamientos, las instituciones no atendieron los acuerdos celebrados previamente con la comunidad estudiantil, lo que ha impedido que sus necesidades puedan ser solventadas. A través de un comunicado difundido vía redes sociales, la Federación de Estudiantes Campesinos Socialistas de México (FECSM), de la cual forma parte la Escuela Normal Rural ‘Vasco de Quiroga’, dio a conocer que desde hace tres meses los estudiantes de dicha institución no han recibido los recursos correspondientes para la manutención de su comedor. Debido a lo anterior los estudiantes se vieron orillados a realizar volanteo y boteo en vía pública. El pasado domingo 24 de julio, un grupo de estudiantes se encontraba realizando dichas actividades en un tramo de la carretera Morelia-Pátzcuaro, a la altura del poblado de Tiripetío, en Morelia."
                },
                {
                    id: 6,
                    cat6egoria: "Cultural",
                    fecha: "31-10-2022",
                    autor: "Pedro Pony",
                    title: "Concluyen actividades culturales del Jaanal PIxan 2022 en Felipe Carrillo Puerto",
                    image: "https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/312783562_3491187534499164_3806142010514524509_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHTYWb5fG_Ymlz10lysxsvgknuNVZcYbd2Se41Vlxht3Zqh0QKyHHCoud6EHuhPFus39VV9ubwZe2COjGHda36w&_nc_ohc=XIWYOELBFA0AX_lfPrh&_nc_ht=scontent.fcjs3-2.fna&oh=00_AfBblMjoAS3xcPM5sMKk9Ky2CLQ4UzoIdympopVCTQfEEg&oe=636788BD",
                    content: "Con el Parque central Ignacio Zaragoza lleno, continuaron las actividades de clausura del Jaanal Pixan 2022, en Felipe Carrillo Puerto. La Orquesta Polifacética Municipal abrió la noche interpretando melodías de su repertorio que animaron a los asistentes a ritmo de cumbias, danzones y jaranas. Vestidos de negro y maquillados de calaveras, integrantes del Ballet Folclórico del Cbtis 72 presentaron una estampa con melodías alusivas a las ausencias, al amor y la muerte. En su participación incluyeron melodías de diferentes estados de la República, en un colorido despliegue de colores y coreografías. El público se entregó con intensidad aplaudiendo al concluir cada pieza interpretada, incluidos turistas extranjeros que presenciaban el espectáculo. La velada transcurrió con las dos enormes figuras de catrinas colocadas en el centro de la plaza: dos simbólicos testigos de esta celebración de Jaanal Pixan. También el Ballet Folclórico Independiente “Uh Yuumilo’ob K’iin”  presentó una estampa del estado de Guerrero en la que interpretaron piezas como la Calaca, el Toro rabón y las Amarillas. El cierre de la velada estuvo a cargo del Ballet Folclórico del  Instituto Tecnológico, con una rítmica y colorida estampa sinaloense. Bajo el estilo musical de Sinaloa,  ejecutaron La Bruja, el Sauce y la Palma, El Toro Mambo y el sinaloense." 
                }
            ]
        };
    },
    created() {
    },
    components: { CardAvisos }
}
</script>
<style scoped>

</style>