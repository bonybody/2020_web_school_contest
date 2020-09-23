
<template>
  <div
      :class="{ effect_fade_content: !isVisible, effect_scroll_content: isVisible }"
      v-observe-visibility=" {
        callback: visibilityChanged,
        fromBottom: true,
        intersection: {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
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
  name: "SectionContentScrollFadeIn",
  data: () => {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
      console.log(entry, isVisible)
    }
  }
}
</script>

<style scoped>
.effect_fade_content {
  opacity : 0.2;
  transition : all 600ms;
  transform : translateY(20px);
}

.effect_scroll_content {
  opacity : 1;
  transition : all 600ms;
  transform : translateY(20);
}
</style>
