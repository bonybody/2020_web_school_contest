<template>
  <div class="section_header">
      <h2>
        <slot></slot>
      </h2>
  </div>
</template>

<script>
import ScrollFadeIn from "@/components/common/ScrollFadeIn";

export default {
  name: "SectionHeader",
  components: {ScrollFadeIn}
}
</script>

<style scoped>
.section_header {
  width: fit-content;
  margin: 0 auto;
}

h2 {
  border: 5px solid #fff;
  font-size: 1.5rem;
  padding: 10px 50px;
  color: #fff;
  width: fit-content;
  margin: 0 auto 50px auto;
}
</style>
