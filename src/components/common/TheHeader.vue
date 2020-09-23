<template>
<header>
  <h1><img class="header_logo" src="@/assets/images/hana_icon.png" alt="header_logo"><span class="header_title">HAMCO</span></h1>
  <nav>
    <a v-scroll-to="'#top'" href="#top">TOP</a>
    <a v-scroll-to="'#about'" href="#about">概要</a>
    <a v-scroll-to="'#item'" href="#item">商品</a>
    <a v-scroll-to="{ element: '#quality', offset: -100 }" href="#quality">こだわり</a>
    <a v-scroll-to="{ element: '#news', offset: -150 }" href="#news">お知らせ</a>
    <a v-scroll-to="'#contact'" href="#contact">お問い合わせ</a>
  </nav>
</header>
</template>

<script>
export default {
name: "TheHeader"
}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
}

h1 {
  font-family: YuMincho, 'Yu Mincho',serif;
}

.header_logo {
  margin-left: 10px;
  height: 20px;
}

.header_title {
  margin-left: 10px;
}

span {
  font-family: YuMincho, 'Yu Mincho',serif;
}

nav {
  display: flex;
  flex-wrap: wrap;
}

nav a {
  margin: 0 10px;
}
</style>
