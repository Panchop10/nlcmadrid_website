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
          <img src="http://placehold.it/100x40/ec653c?text=Logo NLC">
        </slot>

        <button
          class="navbar-toggler ml-auto"
          @click="showMenu = !showMenu"
        >
          <i class="fas fa-bars" />
        </button>
      </div>
      <slot />
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
        active: false,
        open: false,
        children: [
          {
            title: 'First Contact',
            to: 'FirstContact',
          },
          {
            title: 'Culture Inmersion',
            to: 'CultureInmersion',
          },
          {
            title: 'Certificates',
            to: 'Certificates',
          },
          {
            title: 'Private Classes',
            to: 'PrivateClasses',
          },
          {
            title: 'Online Classes',
            to: 'OnlineClasses',
          },
        ],
      },
      {
        title: 'Personalized Courses',
        open: false,
        children: [
          {
            title: 'Volunteer Program',
            to: 'VolunteerProgram',
          },
          {
            title: 'Au Pair Work Program',
            to: 'AuPairProgram',
          },
          {
            title: 'Football Program',
            to: 'FootballProgram',
          },
          {
            title: 'Summer Camp',
            to: 'SummerCamp',
          },
        ],
        active: false,
      },
      {
        title: 'Services',
        open: false,
        active: false,
        children: [
          {
            title: 'Visa Application',
            to: 'VisaApplication',
          },
          {
            title: 'Spanish Internship',
            to: 'SpanishInternship',
          },
        ],
      },
      {
        title: 'Activities',
        open: false,
        active: false,
      },
      {
        title: 'About Us',
        open: false,
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
    window.addEventListener('click', (e) => {
      if (!e.path[0].classList.contains('nav-link')) this.closeMenus();
    });
  },
  methods: {
    openMenu(i) {
      this.menus[i].open = !this.menus[i].open;
      this.closeMenus(i);
    },
    closeMenus(except = null) {
      this.menus = this.menus.map((x, ind) => {
        if (except === null || except !== ind) {
          x.open = false;
        }
        return x;
      });
    },
  },
};
</script>
