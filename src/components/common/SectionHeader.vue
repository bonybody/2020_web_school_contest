<template>
  <scroll-fade-in>
  <h2><slot></slot></h2>
  </scroll-fade-in>
</template>

<script>
import ScrollFadeIn from "@/components/common/ScrollFadeIn";
export default {
  name: "SectionHeader",
  components: {ScrollFadeIn}
}
</script>

<style scoped>
h2 {
  text-align: center;
  border: 5px solid #fff;
  font-size: 1.5rem;
  padding: 10px 50px;
  color: #fff;
  width: fit-content;
  margin: 0 auto 50px auto;
}
</style>
