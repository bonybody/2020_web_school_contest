<template>
  <div id="top">
    <p class="top_back_icon"><img src="@/assets/images/top_back_image.svg" alt="hana_icon"><span>はんこ、押してますか？</span></p>
    <p class="hero_text">はんこ、押していますか?<br>
      HANKO SHOP<br>
      HAMKO
    </p>
    <the-top-scroll-down></the-top-scroll-down>
  </div>
</template>

<script>
import TheTopScrollDown from "./TheTopScrollDown";

export default {
  name: "TheTopSection",
  components: {TheTopScrollDown}
}
</script>

<style scoped>
#top {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/paper_bg.jpg");
  background-color: rgba(25, 29, 50, 0.9);
  background-blend-mode: overlay;
}

.top_back_ground {
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: fit-content;
}

.top_back_ground img {
  display: inline-block;
  width: 40vw;
}

.top_back_icon {
  position: absolute;
  z-index: 12;
  top: 50%;
  left: 65%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: fit-content;
}

.top_back_icon img {
  max-width: 900px;
  width: 80vw;
  opacity: 1;
  z-index: 11;
}

.top_back_icon span {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  z-index: 11;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  color: #fff;
  font-size: clamp(1.5rem, 3vw, 3rem);
  padding-left: clamp(2rem, 6vw, 5rem);
}

.hero_text {
  position: absolute;
  z-index: 13;
  top: 50%;
  left: 20%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: fit-content;
  color: #fff;
  font-size: clamp(16px, 5vw, 40px);
}

</style>
