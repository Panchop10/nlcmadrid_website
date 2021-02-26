<template>
  <vue-modal
    ref="modal"
    size="sm"
    @close="$emit('close')"
  >
    <template slot="title">
      CONTÁCTANOS
    </template>
    <template slot="body">
      <div class="form-group">
        <label>Email: </label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label>Asunto: </label>
        <input
          v-model="form.subject"
          type="text"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label>Mensaje: </label>
        <textarea
          v-model="form.message"
          class="form-control"
        />
      </div>
    </template>
    <template slot="footer">
      <button
        class="btn btn-outline-secondary"
        @click="sendForm"
      >
        ENVIAR
      </button>
    </template>
  </vue-modal>
</template>
<script>
export default {
  data: () => ({
    form: {},
  }),
  methods: {
    close() {
      this.$refs.modal.close();
    },
    sendForm() {
      // eslint-disable-next-line no-undef
      axios.post('/sendMail.php', this.form)
        .then((res) => {
          console.log(res);
          this.$noty.info(res.data);
        });
    },
  },
};
</script>
<style>
.business .vue-modal-content {
  border-radius: 0 !important;
}
</style>
