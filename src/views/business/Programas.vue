<template>
  <div class="business programas">
    <!-- FULL PAGE IMAGE -->
    <div
      class="full-width-img mb-0"
      style="background-image: url('/img/slide.jpg'); height: 800px;"
    >
      <div class="image-caption">
        <h5 class="no-line">
          CURSOS DE EXPERTO
        </h5>
        <h3 class="no-line font-weight-bold">
          Alrededor de 2,000.00€ - 3,500.00€
        </h3>
      </div>
    </div>

    <div class="container text-center pt-5 my-5">
      <h3 class="mb-4 title">
        CURSO DE EXPERTO EN GESTIÓN DE EMPRESAS Y RELACIONES INTERNACIONALES
      </h3>
      <div class="d-flex flex-column my-4">
        <p class="m-0">
          Precio
        </p>
        <h3>€2,164.00 | Duración 8 meses</h3>
      </div>
      <p>
        Creado para estudiantes interesados en aprender sobre el mundo
        empresarial y que desean desarrollar las habilidades y competencias
        necesarias para avanzar en su carrera.
      </p>
    </div>

    <GalleryRow
      img-left
      no-img
      description-color-class="bg-grey"
      img-cont-color-class="bg-light"
      description-container-class="align-items-start"
      img-container-class="align-items-start"
    >
      <template slot="imgContainer">
        <h3>BENEFICIOS</h3>

        <ul>
          <li>Contenido enriquecido con clases prácticas.</li>
          <li>Desarrollo de redes con contactos personales y profesionales.</li>
          <li>Fortalecer las habilidades de liderazgo y la visión global.</li>
          <li>Revisar y actualizar habilidades y conocimientos.</li>
          <li>
            Desarrolla tu propio proyecto profesional capaz de transformar el
            entorno laboral.
          </li>
        </ul>
      </template>

      <div>
        <h3>CONTENIDO ACADÉMICO</h3>
        <ul>
          <li>Fundamentos de la empresa y la organización empresarial.</li>
          <li>Mercadotecnia empresarial.</li>
          <li>Marketing digital y redes sociales.</li>
          <li>Vetas.</li>
          <li>Recursos humanos y búsqueda de empleo.</li>
          <li>Habilidades de desarrollo personal.</li>
          <li>Entorno económico y financiero.</li>
          <li>Relaciones internacionales e institucionales.</li>
        </ul>
      </div>
    </GalleryRow>
    <GalleryRow
      img-left
      image-url="/img/licenciatura.jpg"
      description-color-class="bg-light"
      image-caption="<h3>LICENCIATURA</h3><h5>Certificado emitido por NLC</h5>"
    >
      <h3 class="title">
        DETALLES DEL PROGRAMA
      </h3>
      <p>
        <b>Fecha de inicio de la segunda edición:</b> 27 de julio de 2020 <br>
        Llamada abierta
      </p>
      <p>
        <b>Duración:</b> 8 meses
      </p>
      <p>
        <b>Nivel requerido:</b> Entre A2 - B1 Español
      </p>
      <p>
        <b>Formato:</b> Presencial. Lunes a Viernes 13:00 a 16:00 HS + 5 horas
        de actividades prácticas
      </p>
      <p>
        <b>Edad mínima:</b> 18 años
      </p>
      <i class="mt-5 d-block mb-0">*El curso está sujeto a cambios en el horario.</i>
    </GalleryRow>

    <div class="container text-center pt-5 my-5">
      <h3 class="mb-4 title">
        CURSO DE EXPERTO EN HABILIDADES DIRECTIVAS
      </h3>
      <div class="d-flex flex-column my-4">
        <p class="m-0">
          Precio
        </p>
        <h3>€2,215.00 | Duración 4 meses</h3>
      </div>
      <p>
        Convocatoria abierta.
      </p>
    </div>

    <GalleryRow
      img-left
      no-img
      description-color-class="bg-grey"
      img-cont-color-class="bg-light"
      description-container-class="align-items-start"
      img-container-class="align-items-start"
    >
      <template slot="imgContainer">
        <p>
          Las habilidades directivas son un conjunto de capacidades que tiene
          una persona y junto a los conocimientos son las herramientas para
          poder administrar una organización y demostrar las dotes de liderazgo
          para conseguir los objetivos marcados.
        </p>
        <p>
          No sólo las personas que ocupan puestos directivos son las únicas que
          tienen esas cualidades, sino que cualquier persona puede estar
          desarrollando las cualidades directivas aunque por diversos motivos
          todavía no las ha podido aplicar.
        </p>
      </template>

      <div>
        <p>
          En este curso ayudaremos al desarrollo de todas las habilidades
          directivas para pdoer desarrollar las labores de liderazgo de una
          forma exitosa.
        </p>
        <h3>CONTENIDOS</h3>
        <ul>
          <li>Liderázgo</li>
          <li>Motivación</li>
          <li>Negociación</li>
          <li>Gestión de conflictos</li>
          <li>Trabajo en equipo</li>
          <li>Comunicación</li>
        </ul>
      </div>
    </GalleryRow>

    <div class="bg-black py-5 text-center">
      <div class="container py-5">
        <h3 class="mb-4 title text-white">
          CURSO DE EXPERTO EN CORPORATE
        </h3>
        <div class="d-flex flex-column my-4">
          <p class="m-0">
            Precio
          </p>
          <h3>€2,995.00 | Duración 4 meses</h3>
        </div>
        <p>
          Convocatoria abierta.
        </p>
      </div>
    </div>

    <div
      class="full-width-img mb-0 white-filter"
      style="
        background-image: url('/img/parallax.jpg');
        max-height: 400px;
      "
    />

    <div class="container text-center pt-5 my-5">
      <h3 class="mb-4 title">
        CURSO DE EXPERTO EN DIRECCIÓN FINANCIERA
      </h3>
      <div class="d-flex flex-column my-4">
        <p class="m-0">
          Precio
        </p>
        <h3>€2,995.00 | Duración 4 meses</h3>
      </div>
      <p>
        Convocatoria abierta.
      </p>
      <p>
        <b>
          Los especialistas en el mundo de Corporate son de los más demandados
          en el mundo de la empresa y por ello deben contar con una preparación
          muy intensa sobre el mundo empresarial.
        </b>
      </p>
    </div>

    <GalleryRow
      img-left
      no-img
      description-color-class="bg-grey"
      img-cont-color-class="bg-light"
      description-container-class="align-items-start"
      img-container-class="align-items-start"
    >
      <template slot="imgContainer">
        <p>
          Para responder a las necesidades del mundo empresarial, este curso de
          experto formará a los futuros profesionales en lo relativo a las
          operaciones de compraventa de empresas, fusiones y adquisiciones, así
          como las operaciones de inversión y desinversión y cualquier operación
          corporativa, sin olvidar los aspectos financieros y los relacionados
          con la legalidad vigente y la fiscalidad corporativa.
        </p>
      </template>

      <div>
        <p>
          Al finalizar el programa, el alumno será capaz de prestar
          asesoramiento corporativo y planificar operaciones en todo tipo de
          empresas, desde las grandes empresas hasta la empresas familiares.
        </p>
      </div>
    </GalleryRow>

    <div class="container text-center pt-5 my-5">
      <h3 class="mb-4 title">
        PROGRAMAS MASTER
      </h3>
      <div class="d-flex flex-column my-4">
        <p class="m-0">
          Precio
        </p>
        <h3>Alrededor de €9,500.00</h3>
      </div>
    </div>

    <carousel
      ref="carousel"
      class="masters-carousel"
      :items="1"
      :dots="false"
      :loop="true"
      :nav-text="navTexts"
      :auto-height="true"
    >
      <GalleryRow
        v-for="(item, index) in masters_items"
        :key="index"
        :image-url="item.img"
        img-left
        description-color-class="bg-light"
      >
        <div class="masters-carousel-content">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <b class="text-grey">
            Precio
          </b>
          <h3 class="text-grey price">
            {{ item.price }}
          </h3>
          <b class="text-grey mb-4 subtitle">
            {{ item.subtitle }}
          </b>
          <p
            class="content"
            v-html="item.content"
          />
          <a
            v-if="item.link"
            :href="item.link"
            class="btn btn-outline-secondary"
          >
            PINCHA AQUI
          </a>
        </div>
      </GalleryRow>
    </carousel>
  </div>
</template>

<script>
import GalleryRow from '@/components/GalleryRow.vue';
import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
    GalleryRow,
  },
  data() {
    return {

      masters_items: [
        {
          img: '/img/global_master_management.jpg',
          title: 'GLOBAL MASTER IN MANAGEMENT',
          subtitle: 'Convocatoria abierta',
          price: '€7,495.00 | Duración 11 meses',
          content: `
            El Global Master in Management es un Programa de formación superior para 
            alumnos con estudios universitarios, mayoritariamente extranjeros, a los 
            que ademas de darles una formación integral sobre el mundo de la empresa 
            impartido mayoritariamente por profesionales que están en activo; se les 
            proporciona un período de integración al mundo profesional facilitándoles 
            unas prácticas en empresas nacionales e internacionales.
          `,
          link: null,
        },
        {
          img: '/img/master_marketing_digital.jpg',
          title: 'MASTER PROPIO EN MARKETING DIGITAL',
          subtitle: 'Convocatoria abierta',
          price: '€5,490.00 | Duración 8 meses',
          content: `
            El Programa de Master en Marketing Digital está permanentemente actualizado, 
            atendiendo a las últimas novedades y a las tendencias actuales del mercado, ya 
            que los profesores son profesionales de esta área en activo. <br> 
            La metodología utilizada es la del método del Caso en la mayor parte del 
            programa ya que es eminentemente práctico, apoyado por breves nociones 
            teóricas que complementan dicho programa. Al finalizar el programa, el alumno 
            estará totalmente preparado para encabezar el departamento de marketing digital 
            de cualquier empresa ya que habrá adquirido los conocimientos necesarios 
            para desarrollar el trabajo que se le encomiende.
            <br><br>
            <b>EL PROGRAMA CONSTA DE 6 - 7 MÓDULOS Y UN TRABAJO DE FIN DE MÁSTER:</b> <br>
            <ol>
              <li>Estudio del ecosistema digital</li>
              <li>El Marketing Digital. Conceptos Básicos</li>
              <li>Las Plataformas digitales</li>
              <li>Herramientas básicas del Marketing Digital</li>
              <li>La Transformación Digital</li>
              <li>Técnicas del Marketing Digital</li>
              <li>Aspectos Legales</li>
              <li>Trabajo Fin de Máster</li>
            </ol>
          `,
          link: null,
        },
        {
          img: '/img/master_direccion_gestion_de_personas.jpg',
          title: 'MASTER EN DIRECCIÓN Y GESTIÓN DE PERSONAS',
          subtitle: 'El Master en Dirección y Gestión de Personas, te capacita para liderar equipos y te especializa para la gestión de las personas.',
          price: '€5,490.00 | Duración 8 meses',
          content: `
            Este Master está dirigido a aquellas personas que desean trabajar y desarrollar su carrera profesional en el sector de los recursos humanos o en la dirección del departamente de organización y desarrollo de capital humano. <br>
            Al finalizar el Master en Dirección y Gestión de Personas, el alumno habrá obtenido las capacidades de: <br><br>

            <ul>
              <li>Alinear los objetivos del departamente de recursos humanos con los valores estratégicos de la empresa</li>
              <li>Planificar la transformación de los recursos humanos</li>
              <li>Establecer una estrategia de captación de talento, desarrollo y Fidelización del equipo</li>
              <li>Trabajar en la cohesión del equipo de la empresa orientándolo a la consecución de los objetivos estratégicos facilitando así el total aprovechamiento del rendimiento laboral</li>
              <li>Potenciar las habilidades de liderazgo, comunicación, mentorización, negociación, resolución del conflicto y trabajo en equipo</li>
            </ul>
          `,
          link: null,
        },
        {
          img: '/img/mba.jpg',
          title: 'MBA',
          subtitle: 'Convocatoria pendiente de apertura',
          price: 'Consulta más información',
          content: `
            El MBA está concebido como un programa de alto nivel para formar futuros directivos, partiendo de la base que los alumnos tienen muy poca experiencia en el mercado laboral. <br>
            Se trata de formar desde la base a los futuros líderes empresariales. Para ello se contará con profesores que son empresarios y directivos de empresas que, a través del método del caso, explicarán las materias más adecuadas para el perfil de los alumnos y de los objetivos que se pretenden conseguir.
          `,
          link: null,
        },
      ],
      navTexts: [
        '<i class="fa fa-chevron-left">',
        '<i class="fa fa-chevron-right">',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
