<template>
  <div class="row no-gutters">
    <div
      v-if="imgLeft || isMobile"
      class="col-md"
    >
      <div
        class="img-container"
        :style="{'background-image': `url('${imageUrl}')`}"
      />
    </div>
    <div
      class="col-md"
      :class="descriptionColorClass"
    >
      <div
        class="half-container"
        :class="{
          'right': imgLeft,
          'left': !imgLeft,
        }"
      >
        <div>
          <slot />
        </div>
      </div>
    </div>
    <div
      v-if="!imgLeft && !isMobile"
      class="col-md"
    >
      <div
        class="img-container"
        :style="{'background-image': `url('${imageUrl}')`}"
      />
    </div>
  </div>
</template>

<script>
import mobileChecker from '@/mixins/mobileChecker';

export default {
  mixins: [
    mobileChecker,
  ],
  props: {
    imgLeft: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: 'http://placehold.it/400',
    },
    descriptionColorClass: {
      type: String,
      default: 'bg-primary',
    },
  },
};
</script>

<style>

</style>
