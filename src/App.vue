<template>
  <div id="app">
    <div class="bg_wrap"></div>
    <div class="bg_sub_wrap"></div>
    <div class="wrap">
      <the-header/>
      <the-top/>
      <div class="space"/>
      <scroll-fade-in>
        <the-about/>
      </scroll-fade-in>
      <div class="space"/>
      <scroll-fade-in>
        <the-item/>
      </scroll-fade-in>
      <div class="space"/>
      <scroll-fade-in>
        <the-quality/>
      </scroll-fade-in>
      <div class="space"/>
      <scroll-fade-in>
        <the-news/>
      </scroll-fade-in>
      <div class="space"/>
      <scroll-fade-in>
        <the-contact></the-contact>
      </scroll-fade-in>
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
import TheContact from "@/components/TopPage/Contact/TheContact";
import ScrollFadeIn from "@/components/common/ScrollFadeIn";

export default {
  name: 'App',
  components: {ScrollFadeIn, TheContact, TheNews, TheFooter, TheAbout, TheQuality, TheItem, TheTop, TheHeader}
}
</script>

<style>
#app {
  font-family: YuMincho, 'Yu Mincho';
  position: relative;
  width: 100%;
  height: fit-content;
  /*background-image: url("~@/assets/images/paper_bg.jpg");*/
  /*background-color: rgb(10, 17, 38);*/
  /*background-blend-mode: overlay;*/
  /*background-size: cover;*/
  /*background-attachment: fixed;*/
  color: #ffffff;
}

.bg_wrap {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/paper_bg.jpg");
  background-color: rgb(10, 17, 38);
  background-blend-mode: overlay;
  background-size: cover;
}

.bg_sub_wrap {
  position: fixed;
  z-index: 1;
  background-image: url("~@/assets/images/bg_sub.jpg");
  background-size: cover;
  background-color: rgb(10, 17, 38);
  background-blend-mode: overlay;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 90vh;
  width: 95vw;
  opacity: 0.1;
}
.wrap {
  position: relative;
  z-index: 100;
}

.space {
  height: 300px;
}
</style>
