<template>
  <div id="shop">
    <section-header>ショップ</section-header>
    <section-content-scroll-fade-in>
      <div class="shop_images">
        <carousel :autoplay="true" :loop="true" :per-page="1" :speed="400">
          <slide v-for="shop_image in shop_images" :key="shop_image.id">
            <div class="slider_inner">
              <img :src="shop_image.image" :alt="'shop_image_' + shop_image.id">
            </div>
          </slide>
        </carousel>
      </div>
      <div class="shop_detail">
        <p class="shop_title">HAMCO</p>
        <p class="shop_address"><img src="@/assets/images/マップのピンアイコン.svg" alt="">愛知県名古屋市HAL区HAL町1-22</p>
        <p class="shop_access">アクセス：名鉄HAL駅から徒歩20分</p>
        <p class="shop_business_hours">営業時間：10:30~21:00</p>
        <p class="shop_regular_holiday">定休日：火曜日</p>
      </div>
    </section-content-scroll-fade-in>
  </div>
</template>

<script>
import Vue from 'vue'
import SectionHeader from "@/components/common/SectionHeader";
import VueCarousel from 'vue-carousel'
import SectionContentScrollFadeIn from "@/components/common/SectionContentScrollFadeIn";

Vue.use(VueCarousel)
export default {
  name: "TheShop",
  components: {SectionContentScrollFadeIn, SectionHeader},
  data: () => {
    return {
      shop_images: [
        {
          id: 1,
          image: require('@/assets/images/shop_image_1.jpg')
        },
        {
          id: 2,
          image: require('@/assets/images/shop_image_2.jpg')
        },
        {
          id: 3,
          image: require('@/assets/images/shop_image_3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>

.shop_images {
  max-width: 1020px;
  margin:  0 auto;
}

.slider_inner {
  text-align: center;
}

.slider_inner img {
  width: 650px;
  height: 450px;
  object-fit: cover;
}

@media screen and (min-width: 320px) and (max-width: 559px) {
  .slider_inner img {
    width: 280px;
    height: 180px;
    object-fit: cover;
  }
}

.shop_detail {
  width: 300px;
  margin: 30px auto;
  color: #fff;
  line-height: 3rem;
  text-align: left;
  font-size: 1.1rem;
}

.shop_title {
  font-size: 2.5rem;
}

.shop_address img {
  top: 0;
  vertical-align: middle;
  height: 1em;
  margin-bottom: 5px;
}

</style>
