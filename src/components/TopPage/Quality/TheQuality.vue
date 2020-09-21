<template>
  <div id="quality">
    <section-header>こだわり</section-header>
    <div class="quality_item">
      <div class="quality_item_back_ground">
      </div>
      <div class="quality_item_back_icon">
        <img src="@/assets/images/花アイコン.svg" alt="花">
      </div>
      <div class="quality_item_frame"></div>
      <div class="quality_item_content">
        <p class="quality_item_content_title">
          確かな品質
        </p>
        <p class="quality_item_content_description">
          確かに印鑑を彫刻させていただくために、
          印材選びに慎重で、自信を持ってオススメ
          できる印材のみを扱っており、「チタン印鑑」
          などは材質の特性上、手彫りができませんので
          扱っておりません。<br>
          同じような印材の中でも厳選した印材(仕入れた印材を
          選りすぐり半分以上は返品・交換しています）で確かな
          彫刻をするという「HAMCO」の品質基準でございます。
        </p>
        <p class="quality_item_content_image"><img src="@/assets/images/こだわり.png" alt="こだわり"></p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../common/SectionHeader";
import TheQualitySectionContentValue from "./TheQualityContentValue";

export default {
  name: "TheQuality",
  components: {TheQualitySectionContentValue, SectionHeader}
}
</script>

<style scoped>
#quality {
  text-align: center;
  position: relative;
  z-index: 10;
}

.quality_item {
  position: relative;
  width: 80vw;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.quality_item_back_ground {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 95, 119, 0.5);
}

.quality_item_back_icon {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin: auto;
}

.quality_item_frame {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  border: 5px solid #fff;
  box-sizing: border-box;
}

.quality_item_content {
  padding: 50px 0;
  position: relative;
  z-index: 4;
  width: 100%;
}

.quality_item_content_image {
  z-index: 26;
  position: relative;
}

.quality_item_content_image img {
  width: 90%;
  max-width: 500px;
}

.quality_item_content_title {
  font-size: 1.2rem;
}

.quality_item_content_description {
  margin: 15px auto;
  max-width: 600px;
  line-height: 2rem;
  font-size: 14px;
  word-break: keep-all;
}
</style>
