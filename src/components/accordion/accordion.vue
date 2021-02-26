<template>
  <div
    :id="id"
    class="vue-accordion"
  >
    <accordionItem
      v-for="(item, index) in data"
      :id="index"
      :key="index"
      :id-parent="id"
      :open="item.open"
      @onToggle="onToggle($event, index)"
    >
      <span slot="title">{{ item.title }}</span>
      <p
        slot="body"
        class="text-left"
        v-html="item.content"
      />
    </accordionItem>
  </div>
</template>

<script>
import accordionItem from './accordionItem.vue';

export default {
  components: {
    accordionItem,
  },
  props: {
    id: {
      type: [String, Number],
      default: 'accordion',
    },
    data: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    items: [],
  }),
  mounted() {
    this.items = this.data.map((x) => {
      x.open = false;
      return x;
    });
  },
  methods: {
    onToggle(value, index) {
      this.items = this.items.map((x, i) => {
        if (i === index) x.open = value;
        else x.open = false;
        return x;
      });

      console.log({ item: this.items[index].open });
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>

</style>
