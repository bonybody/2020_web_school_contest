<template>
  <h2><slot></slot></h2>
</template>

<script>
export default {
  name: "SectionHeader"
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
