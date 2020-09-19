<template>
  <div id="app">
    <the-header></the-header>
    <the-top-section></the-top-section>
    <the-items-section></the-items-section>
  </div>
</template>

<script>
import TheHeader from "./components/common/TheHeader";
import TheTopSection from "./components/TopPage/TheTopSection";
import TheItemsSection from "./components/TopPage/TheItemsSection";
export default {
  name: 'App',
  components: {TheItemsSection, TheTopSection, TheHeader}
}
</script>

<style>
#app {
  background-color: #ddd;
  font-family: YuMincho, 'Yu Mincho';
  width: 100%;
}
</style>
