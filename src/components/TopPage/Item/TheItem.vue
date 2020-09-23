<template>
  <div id="item">
    <div class="item" v-for="item_content in item_contents" :key="item_content.title">
      <the-item-content :item_content="item_content" ></the-item-content>
    </div>
  </div>
</template>

<script>
import TheItemContent from "./TheItemContent";
import SectionHeader from "../../common/SectionHeader";

export default {
  name: "TheItems",
  components: {SectionHeader, TheItemContent},
  data: () => {
    return {
      item_contents: [
        {
          title: '個人向け印鑑',
          image: require('@/assets/images/個人用印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。'
        },
        {
          title: '法人向け印鑑',
          image: require('@/assets/images/法人用印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。'
        },
        {
          title: 'オーダーメイド印鑑',
          image: require('@/assets/images/オーダーメイド印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。'
        },
      ]
    }
  }
}
</script>

<style scoped>
#items {
  color: #fff;
  text-align: center;
}

.item {
  margin: 0 auto 200px auto;
}


</style>
