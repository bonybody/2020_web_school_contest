<template>
  <div id="item">
    <div
        class="item"
        v-for="item_content in item_contents"
        :key="item_content.title"
    >
      <the-item-content
          @click_button=" () => {
            item_content.catalog_state = !item_content.catalog_state
            $scrollTo('#item_catalog', 300)
          }"
          :item_content="item_content"
      />
      <transition name="catalog_fade">
        <div
            v-show="item_content.catalog_state"
            id="item_catalog"
        >
          <item-catalog/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TheItemContent from "./TheItemContent";
import SectionHeader from "../../common/SectionHeader";
import ItemCatalog from "@/components/TopPage/Item/ItemCatalog";
import TheTopScrollDown from "@/components/TopPage/Top/TheTopScrollDown";

export default {
  name: "TheItems",
  components: {TheTopScrollDown, ItemCatalog, SectionHeader, TheItemContent},
  data: () => {
    return {
      catalog_state: false,
      item_contents: [
        {
          title: '個人向け印鑑',
          image: require('@/assets/images/個人用印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。',
          catalog_state: false
        },
        {
          title: '法人向け印鑑',
          image: require('@/assets/images/法人用印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。',
          catalog_state: false
        },
        {
          title: 'オーダーメイド印鑑',
          image: require('@/assets/images/オーダーメイド印鑑.png'),
          title_icon: require('@/assets/images/hamco_stamp.png'),
          description: 'ビジネスの重要なシーンは、\n' +
              'いつだって印鑑と一緒でした。HAMCOの印鑑は\n' +
              '貴方の勇気を後押しします。',
          catalog_state: false
        },
      ]
    }
  },
  methods: {
    change_catalog_state() {
      this.catalog_state = !this.catalog_state
    }
  }
}
</script>

<style scoped>
#item {
  color: #fff;
}

.catalog_fade-enter-active {
  transform-origin: top;
  animation: open_catalog 0.3s;
}
.catalog_fade-leave-active {
  transform-origin: top;
  animation: close_catalog 0.3s;
}

.catalog_fade-enter-to, .catalog_fade-leave-to {
  opacity: 1;
}

.catalog_fade-enter {
  opacity: 0;
}


@keyframes open_catalog {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes close_catalog {
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
}

#item_catalog

#items {
  color: #fff;
  text-align: center;
}

.item {
  margin: 0 auto 200px auto;
}


</style>
