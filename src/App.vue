<template>
  <div id="app">
    <div class="bg_wrap"></div>
    <div class="wrap">
      <the-header/>
      <the-top/>
      <div class="space"/>
      <the-about/>
      <div class="space"/>
      <the-item/>
      <div class="space"/>
      <the-quality/>
      <div class="space"/>
      <the-news/>
      <div class="space"/>
      <the-footer/>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/common/TheHeader";
import TheTop from "./components/TopPage/Top/TheTop";
import TheItem from "./components/TopPage/Item/TheItem";
import TheQuality from "./components/TopPage/Quality/TheQuality";
import TheAbout from "./components/TopPage/About/TheAbout";
import TheFooter from "./components/common/TheFooter";
import TheNews from "./components/TopPage/News/TheNews";

export default {
  name: 'App',
  components: {TheNews, TheFooter, TheAbout, TheQuality, TheItem, TheTop, TheHeader}
}
</script>

<style>
#app {
  font-family: YuMincho, 'Yu Mincho';
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: url("~@/assets/images/paper_bg.jpg");
  background-color: rgb(10, 17, 38);
  background-blend-mode: overlay;
  background-size: cover;
  background-attachment: fixed;
}

.bg_wrap {
  position: fixed;
  background-image: url("~@/assets/images/bg_sub.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-color: rgb(10, 17, 38);
  background-blend-mode: overlay;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 90vh;
  width: 95vw;
  opacity: 0.1;
}

.bg_wrap img {
  height: 90vh;
  width: 90vw;
}

.wrap {
  position: relative;
  z-index: 100;
}

.space {
  height: 300px;
}
</style>
