<template>
  <div id="items">
    <h2>HAMCO</h2>
    <p class="about">日本人らしい真心を感じる文化「判子」。<br>
私達HAMCOは、判子の製造、販売を行いお客様へ出会いと物語を提供します。<br>
ただいいモノではなく、お客様それぞれの「はんこ道」に見合う「魂」を持った判子を第一に製造しております。<br>
色褪せない判子の美しさと真心を現代に伝え続けるのが私達のミッションです。</p>
    <div class="item" v-for="item_content in item_contents" :key="item_content.title">
      <the-items-section-item :item_content="item_content" ></the-items-section-item>
    </div>
  </div>
</template>

<script>
import TheItemsSectionItem from "./TheItemsSectionItem";

export default {
  name: "TheItemsSection",
  components: {TheItemsSectionItem},
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
  background-image: url("~@/assets/images/paper_bg.jpg");
  background-color: rgb(20, 27, 48);
  background-blend-mode: overlay;
  background-size: cover;
  padding: 50px 0;
  color: #fff;
  text-align: center;
}

h2 {
  display: inline-block;
  border: 5px solid #fff;
  font-size: 2rem;
  padding: 10px 50px;
  margin-bottom: 50px;
}

.about {
  line-height: 2rem;
}

.item {
  margin: 100px auto;
}

</style>
