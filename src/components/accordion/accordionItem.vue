<template>
  <div class="card">
    <div
      :id="'accItem-'+id"
      class="card-header pointer collapsed"
      data-toggle="collapse"
      :data-target="'#collapse'+id"
      aria-expanded="true"
      :aria-controls="'collapse'+id"
      @click="toggle"
    >
      <i
        class="fa mr-3 mt-1"
        :class="open ? 'fa-minus' : 'fa-plus'"
      />

      <slot name="title" />
    </div>

    <div
      :id="'collapse'+id"
      class="collapse"
      aria-labelledby="headingOne"
      :data-parent="'#'+idParent"
    >
      <div class="card-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: 1,
    },
    idParent: {
      type: [String, Number],
      default: 'accordion',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      console.log('clicked', {
        prevVal: this.open,
        newVal: !this.open,
      });
      this.$emit('onToggle', !this.open);
    },
  },
};
</script>

<style scoped>

</style>
