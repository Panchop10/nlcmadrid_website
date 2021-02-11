<template>
  <div>
    <div class="choose">
      Choose your school!
    </div>
    <div class="row no-gutters full-height">
      <div class="col">
        <div
          class="img-container"
          style="background-image: url('http://placehold.it/1200/ec653c')"
        >
          <div class="overlay right">
            <div class="caption">
              <img
                src="/img/NLCMadrid_business_logo.svg"
                alt=""
                class="logo"
              >
              <b>Spanish courses</b>
              <p class="description">
                At Native Language College we are dedicated to giving you the best
                possible opportunities to learn Spanish and to maximise your
                potential whether you are learning to further your career, to
              </p>
              <button class="btn btn-primary btn-sm mb-3">
                APPLY NOW
              </button>
              <p>
                +34 634131769 <br>
                info@nlcollege.es
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="img-container"
          style="background-image: url('http://placehold.it/1200')"
        >
          <div class="overlay left">
            <div class="caption">
              <img
                src="/img/NLCMadrid_business_logo.svg"
                alt=""
                class="logo"
              >
              <b>Master | MBA | Specialist Programs</b>
              <p class="description">
                Designed for students interested in knowing how
                business works and who wish to develop the
                necessary skills and competences in any organization
              </p>
              <button class="btn btn-secondary btn-sm mb-3">
                APPLY NOW
              </button>
              <p>
                +34 634131769 <br>
                info@nlcollege.es
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center footerNav">
      <a
        class="mx-2"
        href="#"
      >ABOUT NLC</a>
      <a
        class="mx-2 active"
        href="#"
      >PROGRAMS</a>
      <a
        class="mx-2"
        href="#"
      >CONTACT US</a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.full-height {
  height: calc(100vh - 50px);

  .col {
    height: 100%;
  }
}
.footerNav {
  height: 50px;
  align-items: center;

  a {
    font-size: .8em;
    color: $secondaryColor;

    &.active {
      color: $primaryColor;
    }
  }
}

.img-container {
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,.5);
    width: 400px;
    text-align: center;

    &.right {
      right: 0;
    }
    &.left {
      left: 0;
    }

    .caption {
      position: absolute;
      bottom: 4.5em;
      left: 2.75em;
      right: 2.75em;

      .logo {
        width: 200px;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 75px;
      }

      p {
        font-size: .8em;

        &.description {
          min-height: 120px;
        }
      }

      b {
        font-size: 1.1em;
        margin-bottom: 1em;
        display: inline-block;
      }

      .btn {
        min-width: 190px;
      }
    }
  }
}
.choose {
  position: absolute;
  top: 50px;
  left: 50%;
  z-index: 1000;
  background: white;
  transform: translateX(-50%);
  padding: 15px 40px;
  font-size: 2em;
  border-radius: 2em;
  font-weight: 600;
}
</style>
