<template>
  <div class="item">
    <section-content-frame>
      <div class="item_content">
        <p class="item_content_image" v-prlx.mobile=" {
           preserveInitialPosition: false,
           limit: { min: -30, max: 30 },
           speed: 0.03,
           reverse: true }"
        >
          <img :src="item_content.image" :alt="item_content.title">
        </p>
        <div class="item_content_detail" v-prlx.mobile="{
          preserveInitialPosition: false,
          limit: { min: -30, max: 30 },
          speed: 0.03,
          reverse: true
        }">
          <h4>
            <img :src=" item_content.title_icon" alt="title_image">
            <span>{{ item_content.title }}</span>
          </h4>
          <p class="description"><span>{{ item_content.description }}</span></p>
        </div>
      </div>
    </section-content-frame>
  </div>
</template>

<script>
import AppButton from "@/components/common/AppButton";
import SectionContentFrame from "@/components/common/SectionContentFrame";

export default {
  name: "TheItemContent",
  components: {SectionContentFrame, AppButton},
  props: {
    item_content: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>
.item {
  position: relative;
  width: fit-content;
}

.item_back_ground {
  position: absolute;
  z-index: 20;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 95, 119, 0.8);
}

.item_back_icon {
  position: absolute;
  z-index: 21;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100px;
  height: 100px;
}

.item_back_icon img {
  width: 100px;
}

.item_content_frame {
  position: absolute;
  z-index: 26;
  width: 100%;
  height: 100%;
  border: 5px solid #fff;
  box-sizing: border-box;
}


.item_content {
  position: relative;
  z-index: 25;
  width: 80vw;
  max-width: 900px;
  height: auto;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  color: #ffffff;
}


.item_content_image {
  z-index: 26;
  position: relative;
  top: 30px
}

.item_content_image img {
  height: 200px;
}

.item_content_detail {
  z-index: 26;
  padding: 30px 0;
  width: 250px;
  text-align: center;
}

.item_content_detail h4 {
  margin: 1rem 0;
}

.item_content_detail h4 img {
  height: 2rem;
}

.item_content_detail h4 span {
  font-size: 1.5rem;
}

.item_content_detail .description {
  margin: 15px 0;
  font-size: 1rem;
}

</style>
