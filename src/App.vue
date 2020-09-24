<template>
  <div id="app">
    <div class="bg_primary"></div>
    <div class="bg_sub_wrap"></div>
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
      <the-shop/>
      <div class="space"/>
        <the-news/>
      <div class="space"/>
        <the-contact></the-contact>
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
import TheShop from "@/components/TopPage/shop/TheShop";

export default {
  name: 'App',
  components: {TheShop, ScrollFadeIn, TheContact, TheNews, TheFooter, TheAbout, TheQuality, TheItem, TheTop, TheHeader}
}
</script>

<style>
#app {
  font-family: YuMincho, 'Yu Mincho';
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.bg_primary {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/paper_bg.jpg");
  background-color: rgb(20, 27, 68);
  background-blend-mode: overlay;
  background-size: cover;
}

.bg_sub_wrap {
  position: fixed;
  z-index: 1;
  background-image: url("~@/assets/images/bg_sub.jpg");
  background-size: cover;
  background-color: rgb(20, 27, 48);
  background-blend-mode: overlay;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 90vh;
  width: 95%;
  opacity: 0.1;
}
.wrap {
  position: relative;
  z-index: 100;
  width: 100%;
}

.space {
  height: 300px;
}
</style>
