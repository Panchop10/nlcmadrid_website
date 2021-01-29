<template>
  <nav
    ref="nav"
    class="nav"
    :class="{
      'hidden': !showMenu,
      'navbar-light': !textLight,
      'navbar-dark': textLight,
      'fixed-top': fixedTop,
    }"
  >
    <div class="container">
      <div class="navbar-brand">
        <slot name="brand">
          <img src="http://placehold.it/100x40/ec653c">
        </slot>

        <button
          class="navbar-toggler ml-auto"
          @click="showMenu = !showMenu"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
      <ul class="navbar-nav">
        <li
          v-for="m of menus"
          :key="m.title"
          class="nav-item"
          :class="{active: m.active}"
        >
          <a
            class="nav-link"
          >
            {{ m.title }}
          </a>
        </li>
        <li class="nav-item">
          <button
            href="#"
            class="btn btn-primary"
          >
            Apply Now!
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    textLight: {
      type: Boolean,
      default: false,
    },
    fixedTop: {
      type: Boolean,
      default: false,
    },
    onScrollClasses: {
      type: Array,
      default: () => (['bg-white', 'shadow']),
    },
  },
  data: () => ({
    showMenu: false,
    menus: [
      {
        title: 'Spanish Programs',
        active: true,
      },
      {
        title: 'Personalized Courses',
        active: false,
      },
      {
        title: 'Services',
        active: false,
      },
      {
        title: 'Activities',
        active: false,
      },
      {
        title: 'About Us',
        active: false,
      },
    ],
  }),
  mounted() {
    if (this.fixedTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          this.onScrollClasses.forEach((x) => {
            this.$refs.nav.classList.add(x);
          });
        } else {
          this.onScrollClasses.forEach((x) => {
            this.$refs.nav.classList.remove(x);
          });
        }
      });
    }
  },
};
</script>
