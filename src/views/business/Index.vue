<template>
  <div class="business">
    <!-- FULL PAGE IMAGE -->
    <div
      class="full-width-img"
      style="background-image: url('http://placehold.it/1200x600?text=full width image')"
    >
      <Navbar text-light>
        <img
          slot="brand"
          src="http://placehold.it/100x40?text=Logo NLC"
        >

        <ul class="navbar-nav">
          <li
            v-for="(m, index) of menus"
            :key="m.title"
            class="nav-item"
            :class="{
              active: m.active,
            }"
          >
            <a
              href="#"
              class="nav-link"
              @click="openMenu(index)"
            >
              {{ m.title }}
            </a>
            <transition name="fadeLeft">
              <ul
                v-if="m.children && m.children.length && m.open"
                style="animation-duration: 0.3s"
                class="dropdown-menu"
              >
                <li
                  v-for="(s, si) of m.children"
                  :key="si"
                  class="dropdown-item"
                  :class="{
                    disabled: !s.to
                  }"
                >
                  <router-link
                    :to="{name:s.to || null}"
                    class="nav-link"
                    active-class="actve"
                  >
                    {{ s.title }}
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </Navbar>

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

        <div class="btn btn-outline-primary btn-sm mt-4">
          CONOCE MÁS
        </div>
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
            src="http://placehold.it/100"
            class="icon mb-4"
          >
          <h4>ESPIRITU EMPRENDEDOR</h4>
        </div>
        <div class="col">
          <img
            src="http://placehold.it/100"
            class="icon mb-4"
          >
          <h4>INNOVACIÓN</h4>
        </div>
        <div class="col">
          <img
            src="http://placehold.it/100"
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
            <button class="mb-2 btn btn-outline-primary text-black btn-block">
              BANCO SANTANDER
            </button>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <button class="mb-2 btn btn-outline-primary text-black btn-block">
              EUROPEAN FUNDING GUIDE
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-width-img mb-0"
      style="
        background-image: url('http://placehold.it/1200x600?text=full width image');
        max-height: 400px;
      "
    >
      <div class="image-caption">
        <img
          src="http://placehold.it/100"
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
              src="http://placehold.it/100"
              class="icon"
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
              src="http://placehold.it/100"
              class="icon"
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
              src="http://placehold.it/100"
              class="icon"
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
              src="http://placehold.it/100"
              class="icon"
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
              src="http://placehold.it/100"
              class="icon"
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
        image-url="http://placehold.it/200"
        img-left
        description-color-class="bg-light"
      >
        <div class="dpp-carousel-content">
          <h3 class="title">
            EMPRENDIMIENTO
          </h3>
          <p>
            Contamos con la experiencia acumulada en muchos proyectos
            empresariales, ayudando a estudiantes de NLC a construir su propio
            negocio.
          </p>
          <div class="btn btn-outline-secondary">
            PINCHA AQUI
          </div>
        </div>
      </GalleryRow>
      <GalleryRow
        image-url="http://placehold.it/200"
        img-left
        description-color-class="bg-light"
      >
        <div class="dpp-carousel-content">
          <h3 class="title">
            EMPRENDIMIENTO 2
          </h3>
          <p>
            Contamos con la experiencia acumulada en muchos proyectos
            empresariales, ayudando a estudiantes de NLC a construir su propio
            negocio.
          </p>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          itaque quibusdam nostrum impedit expedita quam? Odio praesentium
          accusamus labore blanditiis eius voluptatem animi voluptatum nesciunt.
          Repellat maxime alias fugiat aspernatur
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          itaque quibusdam nostrum impedit expedita quam? Odio praesentium
          accusamus labore blanditiis eius voluptatem animi voluptatum nesciunt.
          Repellat maxime alias fugiat aspernatur
        </p>
        <button class="btn btn-outline-secondary">
          PINCHA AQUI
        </button>
      </template>

      <div>
        <h3 class="title">
          INSTITUCIÓN ACREDITADA POR SEPE
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptate expedita iste voluptatem, debitis non odit harum
          perspiciatis praesentium quas tempora molestiae vel nam sapiente minus
          eaque neque asperiores? Dolorem.
        </p>
        <button class="btn btn-outline-secondary">
          PINCHA AQUI
        </button>
      </div>
    </GalleryRow>

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

export default {
  components: {
    carousel,
    Footer,
    Navbar,
    GalleryRow,
    MasonryGallery,
    Accordion,
  },
  data: () => ({
    menus: [
      {
        title: 'HOME',
        open: false,
        active: true,
      },
      {
        title: 'CURSOS',
        open: false,
        active: false,
      },
      {
        title: 'PROGRAMAS MASTER',
        open: false,
        active: false,
      },
      {
        title: 'SOBRE NOSOTROS',
        open: false,
        active: false,
      },
      {
        title: 'CONTACTANOS',
        open: false,
        active: false,
      },
    ],
    galleryImgs: [
      {
        img: 'http://placehold.it/600',
        height: 50,
      },
      {
        img: 'http://placehold.it/600x700/000000',
        height: 25,
      },
      {
        img: 'http://placehold.it/600x1000/fcba03',
        height: 25,
      },
      {
        img: 'http://placehold.it/1000x600/05dbf7',
        height: 25,
      },
      {
        img: 'http://placehold.it/800x600/f55302',
        height: 50,
      },
      {
        img: 'http://placehold.it/600x800/18b518',
        height: 25,
      },
      {
        img: 'http://placehold.it/600x700/000000',
        height: 25,
      },
      {
        img: 'http://placehold.it/600x1000/fcba03',
        height: 25,
      },
      {
        img: 'http://placehold.it/1000x600/05dbf7',
        height: 50,
      },
      {
        img: 'http://placehold.it/800x600/f55302',
        height: 50,
      },
      {
        img: 'http://placehold.it/600x800/18b518',
        height: 25,
      },
      {
        img: 'http://placehold.it/600/0000000',
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
        content: 'testing accordion',
      },
      {
        title: 'Research',
        content: 'testing accordion',
      },
      {
        title: 'Biblioteca',
        content: 'testing accordion',
      },
      {
        title: 'Apoyo estudiantil y asesoramiento personalizado',
        content: 'testing accordion',
      },
      {
        title: 'Coaching/Mentoring',
        content: 'testing accordion',
      },
      {
        title: 'Becas',
        content: 'testing accordion',
      },
      {
        title: 'Alojamientos/Housing',
        content: 'testing accordion',
      },
      {
        title: 'Tramitación de seguromédico para estudiantes extranjeros',
        content: 'testing accordion',
      },
    ],
  }),
};
</script>

<style lang="scss">
  p.max-600 {
    max-width: 900px;
    margin: auto;
    display: block;
  }
  .dpp-carousel {
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
