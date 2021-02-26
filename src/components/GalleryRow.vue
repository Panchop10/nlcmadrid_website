<template>
  <div class="row no-gutters h-100">
    <div
      v-if="imgLeft || isMobile"
      class="col-md"
      :class="imgContColorClass"
    >
      <div
        v-if="!noImg"
        class="img-container"
        :style="{
          'background-image': `url('${imageUrl}')`,
          'height': '100%'
        }"
      />
      <div
        v-else
        class="half-container"
        :class="[
          {
            'right': !imgLeft,
            'left': imgLeft,
          },
          imgContainerClass
        ]"
      >
        <div>
          <slot name="imgContainer" />
        </div>
      </div>
    </div>
    <div
      class="col-md"
      :class="descriptionColorClass"
    >
      <div
        class="half-container"
        :class="[
          {
            'right': imgLeft,
            'left': !imgLeft,
          },
          descriptionContainerClass
        ]"
      >
        <div>
          <slot />
        </div>
      </div>
    </div>
    <div
      v-if="!imgLeft && !isMobile"
      class="col-md"
      :class="imgContColorClass"
    >
      <div
        v-if="!noImg"
        class="img-container"
        :style="{'background-image': `url('${imageUrl}')`}"
      />
      <div
        v-else
        class="half-container"
        :class="[
          {
            'right': !imgLeft,
            'left': imgLeft,
          },
          imgContainerClass
        ]"
      >
        <div>
          <slot name="imgContainer" />
        </div>
      </div>
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
    noImg: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: 'http://placehold.it/400',
    },
    imgContColorClass: {
      type: String,
      default: 'bg-primary',
    },
    descriptionColorClass: {
      type: String,
      default: 'bg-primary',
    },
    imgContainerClass: {
      type: String,
      default: null,
    },
    descriptionContainerClass: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>

</style>
