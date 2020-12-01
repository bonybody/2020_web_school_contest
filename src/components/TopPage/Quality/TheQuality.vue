<template>
  <div id="quality">
    <section-header>こだわり</section-header>
    <section-content-frame>
      <p class="quality_item_content_title">
        確かな品質
      </p>
      <p class="quality_item_content_description">
        確かに印鑑を彫刻させて頂くために、
        印材選びに慎重で、自信を持ってオススメ
        できる印材のみを扱っており、「チタン印鑑」
        などは材質の特性上、手彫りができませんので
        扱っておりません。<br>
        同じような印材の中でも厳選した<br>印材(仕入れた印材)を
        選りすぐり半分以上は返品・交換しています）で確かな
        彫刻をするという「HAMCO」の品質基準でございます。
      </p>
      <p class="quality_item_content_image"><img src="@/assets/images/こだわり.png" alt="こだわり"></p>
    </section-content-frame>
  </div>
</template>

<script>
import SectionHeader from "../../common/SectionHeader";
import TheQualitySectionContentValue from "./TheQualityContentValue";
import SectionContentFrame from "@/components/common/SectionContentFrame";

export default {
  name: "TheQuality",
  components: {SectionContentFrame, TheQualitySectionContentValue, SectionHeader}
}
</script>

<style scoped>
#quality {
  text-align: center;
  position: relative;
  z-index: 10;
}


.quality_item_content_image {
  z-index: 26;
  position: relative;
  padding-bottom: 50px;
}

.quality_item_content_image img {
  width: 90%;
  max-width: 500px;
}

.quality_item_content_title {
  padding-top: 50px;
  font-size: 1.2rem;
}

.quality_item_content_description {
  margin: 15px auto;
  max-width: 600px;
  min-width: 250px;
  width: 70%;
  line-height: 2rem;
  font-size: 14px;
  word-break: break-all;
}
</style>
