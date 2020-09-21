<template>
  <footer>
    <div class="links">
      <h2 class="links_head">サイト内リンク</h2>
      <div class="links_url">
        <a href="#top">トップ</a>
        <a href="#about">商品</a>
        <a href="#item">こだわり</a>
        <a href="#quality">店舗・アクセス</a>
        <a href="#quality">お問い合わせ</a>
      </div>
    </div>
    <div class=""></div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
footer {
  color: #fff;
  width: 100%;
  background-color: #23232A;
  height: 500px;
  text-align: center;
  padding: 50px 0;
  box-sizing: border-box;
}

.links {
  width: fit-content;
  margin: 20px auto;
}

.links_head {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.links_url {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
.links_url a {
  display: block;
  margin: 0 30px;
  text-align: left;
}

.links_head {

}
</style>
