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
      <p v-if="errors.length">
        <b style="color: #ff0033;">Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li
            v-for="error in errors"
            :key="error.id"
            style="color: #ff0033;"
          >
            {{ error }}
          </li>
        </ul>
      </p>
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
        :disabled="btnDisable"
        class="btn btn-outline-secondary"
        @click="validateForm"
      >
        ENVIAR
      </button>
    </template>
  </vue-modal>
</template>
<script>
const qs = require('qs');

export default {
  data: () => ({
    errors: [],
    form: {},
    btnDisable: false,
  }),
  methods: {
    close() {
      this.$refs.modal.close();
    },
    validateForm() {
      if (this.form.subject && this.form.message && this.validEmail(this.form.email)) {
        this.sendForm();
      }

      this.errors = [];

      if (!this.validEmail(this.form.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (!this.form.subject) {
        this.errors.push('El asunto es obligatorio.');
      }
      if (!this.form.message) {
        this.errors.push('El mensaje es obligatorio.');
      }
    },
    sendForm() {
      this.btnDisable = true;
      // eslint-disable-next-line no-undef
      axios.post('/sendMail.php', qs.stringify(this.form))
        .then((res) => {
          this.$noty.info(res.data, {
            killer: true,
            timeout: 6000,
            layout: 'topRight',
          });
          this.$refs.modal.close();
          this.btnDisable = false;
        });
    },
    validEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
<style>
.business .vue-modal-content {
  border-radius: 0 !important;
}
</style>
