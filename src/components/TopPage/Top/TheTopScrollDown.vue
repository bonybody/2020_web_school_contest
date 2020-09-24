<template>
  <a class="scroll js-scroll" v-scroll-to="'#about'" href="#about"><p class="border_1"></p><p class="border_2"></p></a>
</template>

<script>
export default {
  name: 'TheTopScrollDown'
}
</script>

<style scoped>
.scroll {
  display: block;
  width: fit-content;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 22;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}
.scroll:hover p:before {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
}
.scroll p {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: deeppink;
  text-decoration: none;
  padding: 0 0 50px;
}
.scroll p:hover {
  color: #ddd;
  /*矢印を作成する*/
}
.scroll p:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  left: 0;
  right: 0;
  bottom: 35px;
  margin: auto;
  border-bottom: 2px solid #ddd;
  border-right: 2px solid #ddd;
  transform: rotate(45deg);
  animation: move 2s infinite;
  transition: 0.3s ease-in;
}
.scroll p.border_2:before {
  bottom: 25px;
}
/*矢印をアニメーションする*/
@keyframes move {
  0% {
    transform: rotate(45deg) translate(0, 0);
  }
  20% {
    transform: rotate(45deg) translate(5px, 5px);
  }
  40% {
    transform: rotate(45deg) translate(0, 0);
  }
}
</style>
