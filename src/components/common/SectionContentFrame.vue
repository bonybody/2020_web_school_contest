<template>
  <div class="content">
    <div class="content_back_ground" v-prlx.mobile="{
      direction: 'x',
      speed: 0.1,
      limit: { min: -10, max:10},
      preserveInitialPosition: false,
      mobileMaxWidth: 50
    }">
    </div>
    <div class="content_back_icon">
      <img src="@/assets/images/花アイコン.svg" alt="花">
    </div>
    <div class="content_frame" v-prlx.mobile="{
      direction: 'x',
      reverse: true,
      speed: 0.1,
      limit: { min: -10, max: 10},
      preserveInitialPosition: false,
      mobileMaxWidth: 50
    }"></div>
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
  components: {SectionContentScrollFadeIn, ScrollFadeIn}
}
</script>

<style scoped>
.content {
  position: relative;
  width: 80vw;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.content_back_ground {
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 0;
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

</style>
