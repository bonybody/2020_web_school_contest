<template>
  <div class="content" :class="{ effect_fade: !isVisible, effect_scroll: isVisible }"
       v-observe-visibility=" {
        callback: visibilityChanged,
        fromBottom: true,
        intersection: {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0
        }
      } ">
    <div class="content_back_ground">
    </div>
    <div  class="content_back_icon">
      <img src="@/assets/images/花アイコン.svg" alt="花">
    </div>
    <div
        class="content_frame"></div>
    <div class="content_value">
      <section-content-scroll-fade-in>
        <slot></slot>
      </section-content-scroll-fade-in>
    </div>
  </div>
</template>

<script>
import ScrollFadeIn from "@/components/common/ScrollFadeIn";
import SectionContentScrollFadeIn from "@/components/common/SectionContentScrollFadeIn";

export default {
  name: "SectionContentFrame",
  components: {SectionContentScrollFadeIn, ScrollFadeIn},
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
.content {
  position: relative;
  width: 75vw;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.content_back_ground {
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 95, 119, 0.5);
}

.content_back_icon {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin: auto;
}

.content_frame {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  border: 5px solid #fff;
  box-sizing: border-box;
}

.content_value {
  position: relative;
  z-index: 4;
  width: 100%;
}

.effect_fade {
  opacity : 0.5;
  transition : all 600ms;
  transform : translateX(20px);
}

.effect_scroll {
  opacity : 1;
  transition : all 600ms;
  transform : translateX(0);
}

</style>
