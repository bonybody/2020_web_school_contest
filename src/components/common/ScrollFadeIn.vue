<template>
  <div
      :class="{ effect_fade: !isVisible, effect_scroll: isVisible }"
      v-observe-visibility=" {
        callback: visibilityChanged,
        intersection: {
          root: null,
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0
        }
      } ">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

export default {
  name: "ScrollFadeIn",
  data: () => {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>

<style scoped>
.effect_fade {
  opacity : 0.3;
  transition : all 700ms;
  transform : translateX(20px);
}

.effect_fade .cursor {
  display: none;
  transition : all 700ms;
}

.effect_fade .show {
  display: none;
}

.effect_scroll {
  opacity : 1;
  transition : all 700ms;
  transform : translateX(0);
}

.effect_scroll .cursor {
  display: inline;
  transition : all 700ms;
}

.effect_scroll .show {
  display: block;
}

</style>
