<template>
  <div class="business">
    <Navbar
      text-light
      fixed-top
    >
      <div
        slot="brand"
        class="logoBusiness"
        src="/img/NLCMadrid_business_logo.svg"
      />

      <ul class="navbar-nav">
        <li
          v-for="(m, index) of menus"
          :key="index"
          class="nav-item"
          :class="{
            active: m.active,
          }"
        >
          <a
            v-if="m.title !== 'CONTACTANOS'"
            class="nav-link"
          >
            {{ m.title }}
          </a>
          <a
            v-else
            class="nav-link"
            @click="openContactModal"
          >
            {{ m.title }}
          </a>
        </li>
      </ul>
    </Navbar>

    <!-- FULL PAGE IMAGE -->
    <div
      class="full-width-img"
      style="background-image: url('/img/nlc_img_5.jpg'); height: 800px;"
    >
      <div class="image-caption">
        <h4 class="no-line">
          CONOCE
        </h4>
        <h2 class="no-line font-weight-bold">
          NLC BUSINESS SCHOOL
        </h2>
        <p class="lh-1">
          <small>
            NLC Business School nace con el fin de responder a la demanda que el
            mundo empresarial exige en una sociedad en constante cambio
          </small>
        </p>

        <!-- <div class="btn btn-outline-primary btn-sm mt-4">
          CONOCE MÁS
        </div> -->
      </div>
    </div>

    <div class="container text-center py-5 my-5">
      <h3 class="mb-4 title">
        NUESTRA HISTORIA
      </h3>
      <p>
        NLC Business School nace con el fin de responder a la demanda que el
        mundo empresarial exige en una sociedad en constante cambio. NLC
        Business School no solo es una escuela de negocios, NLC fomenta y
        promueve los tres pilares fundamentales en el mundo empresarial:
      </p>

      <div class="row py-5">
        <div class="col">
          <img
            src="/img/icons/espiritu_emprendedor.svg"
            class="icon mb-4"
          >
          <h4>ESPIRITU EMPRENDEDOR</h4>
        </div>
        <div class="col">
          <img
            src="/img/icons/innovacion.svg"
            class="icon mb-4"
          >
          <h4>INNOVACIÓN</h4>
        </div>
        <div class="col">
          <img
            src="/img/icons/compromiso_social.svg"
            class="icon mb-4"
          >
          <h4>COMPROMISO SOCIAL</h4>
        </div>
      </div>

      <p>
        Nuestro modelo educativo se basa en la práctica y en aprender haciendo.
        Queremos que los alumnos se involucren en el ecosistema de la empresa.
        Por ello contamos con los docentes mas experimentados que brindan a los
        alumnos los más altos estándares de calidad aportando su trabajo diario
        como altos cargos en empresas de reconocido prestigio, garantizando una
        formación práctica y realmente útil.
      </p>
    </div>

    <GalleryRow
      img-left
      image-url="/img/nlc_nuestra_razon_de_ser_1200x800px.jpg"
      description-color-class="bg-light"
    >
      <h3 class="title">
        NUESTRA RAZÓN DE SER
      </h3>
      <p>
        <b>Misión de NLC Business School</b> es formar a los profesionales del
        futuro a través de la excelencia docente y práctica, "Enseñamos
        haciendo".
      </p>
      <p>
        <b>Visión:</b> Aspiramos a ser una de las referencias nacionales en la
        formacion de los futuros ejecutivos y altos directivos de empresas.
      </p>
      <p>
        <b>Valores:</b> Honestidad, trabajo en equipo, orientación y apoyo al
        cliente, así como responsabilidad social.
      </p>
    </GalleryRow>
    <GalleryRow
      img-left
      no-img
      description-color-class="bg-dark"
      img-cont-color-class="bg-black"
      description-container-class="align-items-start"
      img-container-class="align-items-start"
    >
      <template slot="imgContainer">
        <h3>COMPROMISO SOCIAL</h3>
        <p>
          Colaboradores y socios de Cruz Roja. En NLC Business School estamos
          comprometidos con nuestra misión, visión y valores, y desde el
          proyecto de responsabilidad social promovemos la búsqueda de un mundo
          mejor, más justo y sostenible.
        </p>
        <p>
          Por ello, desde NLC se formó la alianza con Cruz Roja para transmitir
          nuestros objetivos y ayudar a aquellos que más lo necesitan a travéz
          de la ética y la solidaridad.
        </p>
      </template>

      <div>
        <h3>RELACIONES INSTITUCIONALES</h3>
        <p>
          <b>Colaboraciones con Universidades, como:</b> <br>
          UDIMA, Universidad Autónoma, Universidad Rey Juan Carlos, Universidad de Alcalá.
        </p>
        <p>
          NLC Business School es Miembro de la Cámara de Comercio de Madrid.
        </p>
        <p>
          <b>Colaboraciones con multitud de empresas:</b> <br>
          Gracias a los acuerdos que NLC Business School tiene con
          organizaciones nacionales e internacionales. De ese modo, los alumnos
          de los programas podrán realizar sus prácticas introduciendose de una
          manera efectiva e inminente en el mundo empresarial.
        </p>
      </div>
    </GalleryRow>

    <div class="container py-5 my-5 text-center">
      <h3 class="title">
        SERVICIOS
      </h3>

      <Accordion :data="accordionItems" />
    </div>

    <div class="bg-black py-5 text-center">
      <div class="container py-5">
        <h3>FINANCIACIÓN</h3>
        <p class="mb-5 max-600">
          <b>
            Gracias a la colaboración con diferentes entidades financieras, NLC
            Business School pone al servicio de los alumnos las ventajas y
            condiciones de financiación que se muestran a continuación:
          </b>
        </p>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <a
              href="https://www.bancosantander.es/universidades/educacion/prestamos-estudios/matricula"
              target="_blank"
              class="mb-2 btn btn-outline-primary text-black btn-block"
            >
              BANCO SANTANDER
            </a>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <a
              href="http://www.european-funding-guide.eu/es"
              target="_blank"
              class="mb-2 btn btn-outline-primary text-black btn-block"
            >
              EUROPEAN FUNDING GUIDE
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-width-img mb-0 white-filter"
      style="
        background-image: url('/img/barcelona_1920x500px.jpg');
        max-height: 400px;
      "
    >
      <div class="image-caption">
        <img
          src="/img/icons/barcelona.svg"
          class="icon mb-3"
        >
        <h5 class="no-line">
          ¡PROXIMO CAMPUS!
        </h5>
        <h2 class="no-line">
          BARCELONA
        </h2>
      </div>
    </div>

    <div class="bg-light">
      <div class="container text-center py-5">
        <div class="row">
          <div class="col-sm-4 col-md">
            <img
              src="/img/icons/counter_1.svg"
              class="icon icon-sm"
            >
            <h3 class="spaced my-2">
              + de 2,500
            </h3>
            <p class="lh-1">
              <small>alumnos en 3 años</small>
            </p>
          </div>
          <div class="col-sm-4 col-md">
            <img
              src="/img/icons/counter_2.svg"
              class="icon icon-sm"
            >
            <h3 class="spaced my-2">
              + de 78
            </h3>
            <p class="lh-1">
              <small>instituciones internacionales colaboran con NLC</small>
            </p>
          </div>
          <div class="col-sm-4 col-md">
            <img
              src="/img/icons/counter_3.svg"
              class="icon icon-sm"
            >
            <h3 class="spaced my-2">
              + de 90%
            </h3>
            <p class="lh-1">
              <small>de estudiantes de Master / MBA's obtienen empleo al año siquiente</small>
            </p>
          </div>
          <div class="col-sm-4 col-md">
            <img
              src="/img/icons/counter_4.svg"
              class="icon icon-sm"
            >
            <h3 class="spaced my-2">
              + de 26
            </h3>
            <p class="lh-1">
              <small>nacionalidades</small>
            </p>
          </div>
          <div class="col-sm-4 col-md">
            <img
              src="/img/icons/counter_5.svg"
              class="icon icon-sm"
            >
            <h3>+ de 42</h3>
            <p class="lh-1">
              <small>países</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5 my-5 text-center">
      <h3 class="title">
        EL ALMA DE NLC BUSINESS SCHOOL
      </h3>

      <div class="row">
        <div class="col-md">
          <h5>EL PERSONAL</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            velit molestiae! Accusamus, pariatur. Tempora cumque hic eligendi
            voluptate alias! Nihil fuga, illo cum possimus soluta architecto
            impedit similique. Perspiciatis, voluptas!
          </p>
        </div>
        <div class="col-md">
          <h5>ESTRUCTURA</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            doloribus labore dolorum reiciendis odit, sed et repudiandae nemo?
            Facilis accusamus ad praesentium animi doloribus ex aperiam maxime
            iste illo debitis.
          </p>
        </div>
      </div>
    </div>

    <!-- Masonry Fixed height -->
    <MasonryGallery
      :responsive-options="masonryOptions"
      :images="galleryImgs"
    />

    <div class="text-center pt-5 mt-5">
      <h3 class="title">
        DEPARTAMENTO DE PROYECCIÓN PROFESIONAL (DPP)
      </h3>
      <p>
        Unidad dedicada a impulsar el desarrollo profesional de los estudiantes
      </p>
    </div>

    <carousel
      ref="carousel"
      class="dpp-carousel"
      :items="1"
      :dots="false"
      :loop="true"
      :nav-text="navTexts"
    >
      <GalleryRow
        v-for="(item, index) in dpp_items"
        :key="index"
        :image-url="item.img"
        img-left
        description-color-class="bg-light"
      >
        <div class="dpp-carousel-content">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <p>
            {{ item.content }}
          </p>
          <a
            v-if="item.link"
            :href="item.link"
            class="btn btn-outline-secondary"
          >
            PINCHA AQUÍ
          </a>
        </div>
      </GalleryRow>
    </carousel>

    <GalleryRow
      img-left
      no-img
      description-color-class="bg-white"
      img-cont-color-class="bg-light"
      description-container-class="align-items-start"
      img-container-class="align-items-start"
    >
      <template slot="imgContainer">
        <h3 class="title">
          TALENTO
        </h3>
        <p>
          En NLC formamos a los líderes del presente y a la élite del  futuro y
          les acompañamos a lo largo de toda su carrera profesional. <br>
          Además, a través de nuestro Carrer Department facilitamos a las empresas el
          acceso a nuestro bolsa de talento.
        </p>
        <p>
          <b>¿Quieres contratar talento en NLC Business School?</b> <br>
          Para que te ayudademos a encontrar los mejores profesionales para tu
          institución.
        </p>
        <button
          class="btn btn-outline-secondary"
          @click="openContactModal"
        >
          PINCHA AQUÍ
        </button>
      </template>

      <div>
        <h3 class="title">
          INSTITUCIÓN ACREDITADA POR SEPE
        </h3>
        <p>
          Formación bonificada
        </p>
        <button class="btn btn-outline-secondary">
          PINCHA AQUÍ
        </button>
      </div>
    </GalleryRow>

    <ContactModal
      v-if="showContact"
      @close="showContact=false"
    />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/FooterBusiness.vue';
import GalleryRow from '@/components/GalleryRow.vue';
import MasonryGallery from '@/components/masonry/MasonryGallery.vue';
import Accordion from '@/components/accordion/accordion.vue';
import carousel from 'vue-owl-carousel';
import ContactModal from './contactModal.vue';

export default {
  components: {
    carousel,
    Footer,
    Navbar,
    GalleryRow,
    MasonryGallery,
    Accordion,
    ContactModal,
  },
  data() {
    return {
      menus: [
        {
          title: 'HOME',
          open: false,
          active: true,
        },
        // {
        //   title: 'CURSOS',
        //   open: false,
        //   active: false,
        // },
        // {
        //   title: 'PROGRAMAS MASTER',
        //   open: false,
        //   active: false,
        // },
        // {
        //   title: 'SOBRE NOSOTROS',
        //   open: false,
        //   active: false,
        // },
        {
          title: 'CONTACTANOS',
          open: false,
          active: false,
        },
      ],
      galleryImgs: [
        {
          img: '/img/nlc_img_1.jpg',
          height: 50,
        },
        {
          img: '/img/nlc_img_2.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_3.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_4.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_5.jpg',
          height: 50,
        },
        {
          img: '/img/nlc_img_6.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_7.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_8.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_9.jpg',
          height: 50,
        },
        {
          img: '/img/nlc_img_10.jpg',
          height: 50,
        },
        {
          img: '/img/nlc_img_11.jpg',
          height: 25,
        },
        {
          img: '/img/nlc_img_12.jpg',
          height: 25,
        },
      ],
      masonryOptions: {
        769: {
          columns: 2,
          height: '1500px',
        },
        default: {
          columns: 4,
          height: '1000px',
        },
      },
      navTexts: [
        '<i class="fa fa-chevron-left">',
        '<i class="fa fa-chevron-right">',
      ],
      accordionItems: [
        {
          title: 'Gestión y Aplicación de Visados',
          content: `
          <p>
          NLC Business School ofrece un servicio nuevo y exclusivo que no encontrarás en
          ninguna otra escuela.  
          </p> 

          <p>
          Nuestro equipo te ofrece la posibilidad de gestionar y conseguir tu visado de
          estudiante para que no tengas que preocuparte por nada. Solo necesitas recopilar
          la documentación que te solicitarán nuestros abogados especialistas en
          inmigración y visados. Manejaremos y procesaremos la visa desde allí.
          </p>

          <p>
          ¿Tienes miedo de solicitar un visado de estudiante para poder residir en España?
          <br>
          ¿No sabes cómo manejar la documentación o concertar una cita en la embajada?
          <br>
          ¿Dudas que tu documentación sea correcta? <br>
          ¿Crees que la prueba de medios económicos no será suficiente? <br>
          ¿Estarás cubierto por el sistema sanitario público español a través del seguro
          médico requerido para el visado de estudiante?
          </p>

          <p>

          No se preocupe más por estas preguntas o cualquier otra duda que pueda tener. El
          equipo de abogados de NLC Business School estudiará personalmente tu caso y te
          acompañará durante todo el proceso. De esa manera, se le garantiza la mayor
          probabilidad de que su solicitud de visa sea exitosa.
          </p>
        `,
        },
        {
          title: 'Research',
          content: 'Investigación, Documentación, Revistas de investigación.',
        },
        {
          title: 'Biblioteca',
          content: '',
        },
        {
          title: 'Apoyo estudiantil y asesoramiento personalizado',
          content: `
          <p>
            Una parte muy importante de nuestra misión es considerar al estudiante
            como familia en el momento en que el estudiante entra en contacto con la
            escuela. Queremos apoyar a nuestros estudiantes de todas las formas
            posibles en cada paso de su viaje. Desde el momento en que el estudiante
            se pone en contacto con nosotros, NLC se compromete a proporcionar al
            estudiante TODO lo que pueda necesitar y que sea accesible para nosotros. <br>
            Otro punto a destacar de nuestro servicio de Student Advisor es que lo
            llevan a cabo multitud de nacionalidades (brasileña, china, japonesa,
            francesa, argelina, americana, etc). <br>
            Además, se puede facilitar en el idioma nativo del alumno para que toda la
            información se entienda perfectamente para que el alumno se sienta más
            cómodo y más cerca de la escuela.Los idiomas que se hablan en NLC van
            desde inglés, portugués y chino, hasta japonés, francés, árabe, bereber.
          </p>
          <p>
            <b>¿Qué incluye este servicio?</b> <br>
            Gestión del proceso de matrícula para el curso deseado. <br>
            Asesoramiento personalizado en trámites de visado. <br>
            Gestión de trámites de alojamiento si opta por estudiar con nosotros. En caso contrario, se le informará de otras opciones de alojamiento. <br>
            Gestión de trámites de seguro médico. <br>
            Información sobre los procedimientos a seguir en la escuela. Información sobre <br>
            permisos de trabajo <br>
            Información sobre NIE. <br>
            Información sobre registro. <br>
            Información sobre renovaciones. <br>
            Y mucho más… <br>
          </p>
          <p>
            En general, nuestro objetivo es convertir a nuestro asesor en la persona
            de contacto de confianza del estudiante para cualquier cosa que
            necesite. A través del asesor los estudiantes pueden recibir un
            asesoramiento relevante y global para que puedan desenvolverse de la mejor
            manera posible durante su estancia en NLC y en Madrid.
          </p>
          <p>
            <b>Precio:</b> Gratis.
          </p>
        `,
        },
        {
          title: 'Coaching/Mentoring',
          content: '',
        },
        {
          title: 'Becas',
          content: '',
        },
        {
          title: 'Alojamientos/Housing',
          content: `
          <p>
            Nuestro objetivo es permitirle tener una de las experiencias de
            aprendizaje más agradables de Madrid. En NLC Madrid disponemos de una
            oferta de alojamiento que se adapta a tu presupuesto. Todas nuestras
            opciones están cerca de transporte público, supermercados, tiendas y
            bancos. Estas opciones de alojamiento incluyen: familias anfitrionas,
            hostales, apartamentos compartidos y residencias de estudiantes.
          </p>
          <p>
            <b>Hostel (habitación compartida): desde 150 € / semana</b> <br>
            Esta opción te ofrece la oportunidad de vivir en un entorno internacional,
            donde siempre tendrás alguien con quien estudiar y salir a explorar la
            ciudad. <br>
            Las habitaciones son modernas, luminosas y de bajo coste que compartirás
            con personas de diferentes nacionalidades para enriquecer tus experiencias
            culturales en Madrid. <br>
            * Recomendamos esta opción por periodos cortos.
          </p>
          <p>
            <b>Piso compartido: desde 350 € / mes por habitación individual</b> <br>
            En este piso compartido donde te sentirás como en casa. Habitaciones
            individuales y compartidas. <br>
            Completo con refrigerador, lavadora, microondas y utensilios de cocina. El
            precio incluye gas, agua, luz, wifi y limpieza diaria de zonas comunes.
            <br>
            Las instalaciones se encuentran en Cuatro Caminos, a 4 km del centro de
            Madrid. En el barrio encontrará cafeterías, bares, restaurantes, tiendas y
            todo lo que necesita para su experiencia de inmersión lingüística.
          </p>
          <p>
            <b>Casa de familia (Precio por noche / media pensión: 35 € / día)</b> <br>
            Esta es la opción perfecta para aquellos que quieran tener una experiencia
            más familiar y que quieran seguir practicando su español en casa. Aquí
            podrás incorporar el español a tu rutina diaria en casa.
          </p>
          <p>
            Todas las familias han sido cuidadosamente seleccionadas por nuestro
            equipo y están muy cerca de la escuela asegurando la mejor estancia
            posible.
          </p>
          <p>
            Te alojarás en la cómoda casa de una familia española. Las acogedoras
            habitaciones están completamente amuebladas con vistas y algunas de ellas
            incluso tienen balcones. Tu familia anfitriona está acostumbrada a recibir
            estudiantes internacionales y sabe cómo hacerlos sentir como en casa.
          </p>
          <p>
            En la mayoría de los casos, la vivienda estará ubicada en el centro de la
            ciudad, cerca de los principales atractivos turísticos. Podrá disfrutar de
            deliciosas comidas españolas en la casa de su familia anfitriona y en los
            restaurantes cercanos. <br>
            Todos los días se le concederá media pensión. <br>
            Uso gratuito de las áreas comunes de la casa: sala, comedor, TV, etc. <br>
            Ropa de cama y toallas limpias. <br>
            Una vez a la semana se limpia la habitación y se lava la ropa. <br>
            Uso gratuito de la nevera y el microondas. <br>
            Internet las 24 horas del día. <br>
            Todos los gastos generales de la casa incluidos: agua, luz y gas. <br>
            Tu anfitrión te ayudará a instalarte en la ciudad. Integración total en el
            entorno local. <br>
            Precio por noche / media pensión: 35 €.
          </p>
        `,
        },
        {
          title: 'Tramitación de seguromédico para estudiantes extranjeros',
          content: `
          <p>
            <b>INCLUYE:</b> <br>
            Alojamiento con familias españolas en el centro de Madrid. <br>
            Media pensión con desayuno continental y cena.
          </p>
          <p>
            <b>EL PRECIO NO INCLUYE:</b>

            Billete de ida y vuelta a España. <br>
            Transporte en sitio. <br>
            Seguro médico y repatriación. <br>
            Visitas y actividades guiadas.
          </p>
          <p>
            Si el alumno no se siente cómodo en este tipo de alojamiento, la escuela
            intentará cambiarlo lo antes posible.
          </p>
        `,
        },
      ],
      dpp_items: [
        {
          img: '/img/dpp_1_950x400px.jpg',
          title: 'Prácticas en empresas',
          content: `
          Proporcionamos a las empresas un servicio exclusivo de búsqueda de perfiles en
          prácticas de estudiantes actuales de nuestros diferentes programas.
        `,
          link: null,
        },
        {
          img: '/img/dpp_2_950x400px.jpg',
          title: 'Carreras profesionales',
          content: `
          Ofrecemos un servicio integral de reclutamiento y búsqueda de candidaturas NLC 
          para procesos de selección de cualquier área, y en cualquier ubicación.
        `,
          link: null,
        },
        {
          img: '/img/dpp_3_950x400px.jpg',
          title: 'Emprendimiento',
          content: `
          Contamos con la experiencia acumulada en muchos proyectos empresariales, ayudando 
          a estudiantes de NLC a construir su propio negocio.
        `,
          link: null,
        },
        {
          img: '/img/dpp_4_950x400px.jpg',
          title: 'Consultoria laboral / Headhunting',
          content: `
          
        `,
          link: null,
        },
      ],
      showContact: false,
    };
  },
  methods: {
    openContactModal() {
      this.showContact = true;
    },
    closeContactModal() {
      this.showContact = false;
    },
  },
};
</script>

<style lang="scss">
  p.max-600 {
    max-width: 900px;
    margin: auto;
    display: block;
  }
  .dpp-carousel {
    .owl-item {
      height: 100%;
    }
    .owl-nav {
      position: absolute;
      top: 50%;
      width: 100%;
      cursor: pointer;
      transform: translate(0, -50%);
      display: flex;
      justify-content: space-between;
      pointer-events: none;

      .fa {
        color: white;
        font-size: 2em !important;
      }

      .owl-prev, .owl-next {
        background: black !important;
        content: '';
        color: white !important;
        border-radius: 50%;
        height: 30px;
        width:  30px;
        display: grid;
        align-items: center;
        font-size: 5px;
        pointer-events: all;
      }
    }
    .dpp-carousel-content {
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

</style>
