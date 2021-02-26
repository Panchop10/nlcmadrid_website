<template>
  <div id="app">
    <router-view />
    <footer>
      <cookie-law theme="dark-lime" />
    </footer>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law';

export default {
  components: { CookieLaw },
};
</script>

<style>
#app {
  overflow:hidden;
}
</style>
