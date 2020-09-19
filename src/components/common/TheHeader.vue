<template>
<header>
  <h1><img class="header_logo" src="@/assets/images/hana_icon.png" alt="header_logo"><span class="header_title">HAMCO</span></h1>
  <nav>
    <a href="#">概要</a>
    <a href="#">商品</a>
    <a href="#">お知らせ</a>
    <a href="#">お問い合わせ</a>
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
  right: 0;
  width: 100%;
  height: 48px;
  display: flex;
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

nav a {
  margin: 0 10px;
}
</style>
