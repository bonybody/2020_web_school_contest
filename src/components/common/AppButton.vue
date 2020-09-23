<template>
<button><slot></slot></button>
</template>

<script>
export default {
name: "AppButton"
}
</script>

<style scoped>
button {
  padding: 5px 20px;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);

}

</style>
