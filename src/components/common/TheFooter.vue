<template>
  <footer>
    <div class="links">
      <h2 class="links_head">サイト内リンク</h2>
      <div class="links_url">
        <a v-scroll-to="'#top'" href="#top">TOP</a>
        <a v-scroll-to="'#about'" href="#about">概要</a>
        <a v-scroll-to="'#item'" href="#item">商品</a>
        <a v-scroll-to="'#quality'" href="#quality">こだわり</a>
        <a v-scroll-to="'#shop'" href="#shop">ショップ</a>
        <a v-scroll-to="'#news'" href="#news">お知らせ</a>
        <a v-scroll-to="'#contact'" href="#contact">お問い合わせ</a>
      </div>
    </div>
    <section-header>HAMCO</section-header>
    <div class="copyright">&copy; 2020 HAMCO.</div>
  </footer>
</template>

<script>
import SectionHeader from "@/components/common/SectionHeader";
export default {
  name: "TheFooter",
  components: {SectionHeader}
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  margin: 0.8em;
  text-align: left;
}

.links_head {

}
</style>
