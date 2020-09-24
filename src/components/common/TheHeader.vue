<template>
  <header :class="{ 'on_content': scrollY > 1000 }">
    <h1><img class="header_logo" src="@/assets/images/花アイコン_header.svg" alt="header_logo"><span
        class="header_title">HAMCO</span></h1>
    <nav>
      <div class="partition_border"></div>
      <a v-scroll-to="'#top'" href="#top">TOP</a>
      <div class="partition_border"></div>
      <a v-scroll-to="'#about'" href="#about">概要</a>
      <div class="partition_border"></div>
      <a v-scroll-to="'#item'" href="#item">商品</a>
      <div class="partition_border"></div>
      <a v-scroll-to="'#quality'" href="#quality">こだわり</a>
      <div class="partition_border"></div>
      <a v-scroll-to="'#news'" href="#news">お知らせ</a>
      <div class="partition_border"></div>
      <a v-scroll-to="'#contact'" href="#contact">お問い合わせ</a>
      <div class="partition_border"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => {
    return {
      scrollY: 0
    }
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.on_content {
  background-color: rgba(255,255,255,0.2);
  box-shadow: 0px 1px 3px -3px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0px 1px 3px -3px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 1px 3px -3px rgba(0,0,0,0.2);
}
.on_content nav a::after {
  /*background-color: #000;*/
}

.partition_border {
  vertical-align: center;
  width: 1px;
  height: 10px;
  background-color: #fff;
}

header {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  transition: all 0.3s ease-out;
}

h1 {
  font-family: YuMincho, 'Yu Mincho', serif;
}

.header_logo {
  margin-left: 10px;
  height: 20px;
}

.header_title {
  margin-left: 10px;
}

span {
  font-family: YuMincho, 'Yu Mincho', serif;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

nav a {
  text-align: center;
  width: 100px;
  padding-top: 10px;
  padding-bottom: 5px;
  margin: 0 10px;
  position: relative;
  z-index: 105;
  transition: all 0.1s ease-out;
}
nav a:hover {
  color: grey;
  text-shadow: grey 0px 0px 3px;
}
</style>
