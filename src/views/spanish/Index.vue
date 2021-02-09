<template>
  <div>
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>
