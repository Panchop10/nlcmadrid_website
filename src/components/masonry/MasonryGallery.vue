<template>
  <div
    class="masonry-gallery"
    :style="{height: responsiveOpts.height}"
  >
    <div
      v-for="(img, imgI) in images"
      :key="imgI"
      class="masonry-item img-container"
      :style="{
        padding: gutter+'px',
        backgroundImage: `url('${img.img}')`,
        height: (img.height*(responsiveOpts.columns/responsiveOptions.default.columns))+'%',
        width: `${100/responsiveOpts.columns}%`
      }"
      @click="open(img.img)"
    />

    <div
      v-if="selectedImage"
      class="masonry-viewer"
    >
      <div
        class="img-container"
        :style="{backgroundImage: `url('${selectedImage}')`}"
      >
        <div
          class="closeBtn"
          @click="close"
        >
          <i class="fas fa-times" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default: () => ([]),
    },
    responsiveOptions: {
      type: Object,
      default: () => ({
        default: {
          columns: 4,
          height: '1000px',
        },
      }),
    },
  },
  data: () => ({
    cols: [],
    viewportWidth: 0,
    selectedImage: null,
  }),
  computed: {
    responsiveOpts() {
      let opt = this.responsiveOptions.default;

      const ordered = Object.keys(this.responsiveOptions).sort().reduce(
        (obj, key) => {
          obj[key] = this.responsiveOptions[key];
          return obj;
        },
        {},
      );

      if (Object.keys(ordered).length) {
        for (const o of Object.keys(ordered)) {
          if (o !== 'default' && this.viewportWidth < o) {
            opt = ordered[o];
            break;
          }
        }
      }
      return opt;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.viewportWidth = window.screen.width;
    });
    this.viewportWidth = window.screen.width;
  },
  methods: {
    open(img) {
      this.selectedImage = img;

      setTimeout(() => {
        document.querySelector('.masonry-viewer').addEventListener('click', () => {
          this.close();
        });
        document.querySelector('.masonry-viewer > .img-container').addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }, 100);
    },
    close() {
      this.selectedImage = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.masonry-gallery {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .masonry-item {
    min-height: unset;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
      transition: .5s ease;
      opacity: 0;
    }

    &:hover:before{
      transition: .5s ease;
      opacity: 1;
    }

    &:hover:after {
      font: normal normal normal 45px/1  "Font Awesome 5 Free";
      font-weight: 900;
      content: '\f00e';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
  }

  .masonry-viewer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-container {
      width: 95%;
      max-width: 1000px;
      height: 80%;
      max-height: 800px;
      background-size: contain !important;
      position: relative;
      overflow: visible;

      .closeBtn {
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;

        i {
          color: white;
          font-size: 2em;
        }
      }
    }
  }
}
</style>
