<template>
  <div id="about">
    <section-header>HAMCO</section-header>
    <p class="about">日本人らしい真心を感じる文化「判子」。<br>
      私達HAMCOは、判子の製造、販売を行いお客様へ出会いと物語を提供します。<br>
      ただいいモノではなく、お客様それぞれの「はんこ道」に見合う「魂」を持った判子を第一に製造しております。<br>
      色褪せない判子の美しさと真心を現代に伝え続けるのが私達のミッションです。</p>
  </div>
</template>

<script>
import SectionHeader from "../../common/SectionHeader";
export default {
  name: "TheAbout",
  components: {SectionHeader}
}
</script>

<style scoped>
#about {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  /*background-image: url("~@/assets/images/paper_bg.jpg");*/
  /*background-color: rgb(30, 30, 40);*/
  /*background-blend-mode: overlay;*/
  /*background-size: cover;*/
}

.about {
  line-height: 2rem;
}
</style>
