<template>
  <div id="top">
    <transition appear name="fade">
      <div class="primary_content">
        <div class="primary_content_frame"><img src="@/assets/images/hanko_frame.svg" alt="フレーム"></div>
        <img class="primary_content_image primary_content_image_up" src="@/assets/images/hanko_up.png" alt="hanko_up">
        <transition appear name="slide-fade">
          <span class="primary_content_text">はんこ、押していますか?</span>
        </transition>
        <img class="primary_content_image primary_content_image_down" src="@/assets/images/hanko_down.png"
             alt="hanko_down">
      </div>
    </transition>
    <the-top-scroll-down></the-top-scroll-down>
  </div>
</template>

<script>
import TheTopScrollDown from "./TheTopScrollDown";

export default {
  name: "TheTop",
  components: {TheTopScrollDown},
  data: () => {
    return {
      visible: false,
    }
  }
}
</script>

<style scoped>
#top {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  /*background-image: url("~@/assets/images/paper_bg.jpg");*/
  /*background-color: rgba(25, 29, 50, 0.9);*/
  /*background-blend-mode: overlay;*/
}

.primary_content {
  width: 80vw;
  max-width: 80vh;
  height: 80vw;
  max-height: 80vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.primary_content_frame {
  width: 100%;
  height: auto;
}

.primary_content_frame img {
  width: 100%;
  height: auto;
}

.primary_content_image {
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  width: 70%;
}

.primary_content_image_up {
  top: 10%;
}

.primary_content_image_down {
  bottom: 10%;
}

.primary_content_text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  color: #fff;
  font-size: clamp(1rem, 5vw, 3rem);
}


.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter {
  opacity: 0;
  transform: translateY(50px);
}


.slide-fade-enter-active {
  transition: all 1.5s ease;
}

.slide-fade-enter {
  transform: translateX(50px);
  opacity: 0;
}
</style>
