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
        <router-link
          v-for="(m, index) of menus"
          :key="index"
          tag="li"
          class="nav-item"
          :active-class="'active'"
          exact
          :to="m.link"
        >
          <a
            class="nav-link"
          >
            {{ m.title }}
          </a>
        </router-link>
        <li
          class="nav-item pointer"
        >
          <a
            class="nav-link"
            @click="openContactModal"
          >
            CONTACTANOS
          </a>
        </li>
      </ul>
    </Navbar>

    <router-view />

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
import ContactModal from './contactModal.vue';

export default {
  components: {
    Footer,
    Navbar,
    ContactModal,
  },
  data() {
    return {
      menus: [
        {
          title: 'HOME',
          link: { name: 'Landing' },
        },
        {
          title: 'PROGRAMAS',
          link: { name: 'Programas' },
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
