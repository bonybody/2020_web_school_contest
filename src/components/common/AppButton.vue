<template>
<button @click="$emit('app_button_click')"><slot></slot></button>
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
  color: #fff;
  transition: 0.5s ease-out;
}

button:hover {
  background-color: #fff;
  color: #000;
}

</style>
