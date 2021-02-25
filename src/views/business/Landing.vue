<template>
  <div>
    <div class="main">
      <div
        class="full-width-img bottom-right-rounded mb-0"
        style="background-image: url('/img/NLCMadrid_business_slide.jpg')"
      >
        <div class="image-caption pb-4">
          <img
            src="img/NLCMadrid_business_logo.svg"
            alt="NLC BUSSINES LOGO"
            class="nlc_logo"
          >
          <p class="pretitle">
            BIENVENIDOS A
          </p>
          <p class="title">
            NLC BUSINESS SCHOOL
          </p>
          <p class="posttitle">
            TUS NUEVOS PROGRAMAS DE MASTER Y MBA'S
          </p>
        </div>
      </div>

      <div class="container text-center">
        <h4 class="mb-5">
          PRESTA ATENCIÓN A NUESTRAS REDES SOCIALES <br>
          Y ENTÉRATE DE LAS NOVEDADES QUE ESTÁN POR LLEGAR
        </h4>

        <div
          class="laptopIcon"
        >
          <img
            src="/img/NLCMadrid_laptop_icon.svg"
            alt="laptop icon"
            width="60"
          >
        </div>

        <h5>CONTÁCTANOS!</h5>

        <p class="contact-data">
          Plaza Puerta del Sol 11, Segundo Piso, Código Postal 28013 <br>
          Madrid, España <br>
          +34 917376633 | +34 634131769 <br>
          info@nlcollege.es <br><br>

          <b>Horarios</b> <br>
          Lunes a Viernes | 9am a 4pm
        </p>

        <div class="social-buttons">
          <a
            href="https://www.facebook.com/nlcmadrid/"
            target="_blank"
          >
            <i class="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/nlcmadrid/"
            target="_blank"
          >
            <i class="fab fa-instagram" />
          </a>
          <a
            href="https://es.linkedin.com/company/native-language-college"
            target="_blank"
          >
            <i class="fab fa-linkedin-in" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkW-Y2H4ENkuCFY0nPuRIKw"
            target="_blank"
          >
            <i class="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        © {{ (new Date()).getFullYear() }} NLC Native Language College.
      </div>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.image-caption {
  img.nlc_logo {
    width: 200px;
    margin-bottom: 50px;
  }
  p {
    color: white !important;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  .pretitle {
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: 10px;
  }
  .title {
    font-size: 2.8em;
    line-height: 1.5em;
    letter-spacing: 5px;
    border:unset;

    &:before {
      content: unset;
    }
  }
  .posttitle {
    font-size: .9em;
    line-height: 1em;
    letter-spacing: 3px;
  }
}
footer {
  background-image: url('/img/NLCMadrid_footer_background.jpg');
  height: 60px;
  padding: 20px;
  color: white;
  font-size: 1em;
}
.contact-data {
  font-size: .85em;
  opacity: .6;
}
.laptopIcon {
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 100px;
    background-color: black;
    opacity: 0.5;
    transform: translatex(-50%);
  }
}
.social-buttons {
  display: flex;
  max-width: 300px;
  margin: 4em auto;

  a {
    color:  black;
    flex: 1;
    font-size: 2em;
    transition: 1s ease;

    &:hover {
      opacity: .6;
      transition: 1s ease;
    }
  }
}
</style>
