<template>
  <div id="news">
    <section-header>お知らせ</section-header>
    <div class="news_item" v-for="news_content in news_contents" :key="news_content.id">
      <scroll-fade-in>
        <div class="news_item_back_ground">
        </div>
        <div class="news_item_frame"></div>
        <div class="news_item_content">
          <p class="news_item_content_date">
            {{ news_content.date }}
          </p>
          <p class="news_item_content_title">
            {{ news_content.title }}
          </p>
        </div>
      </scroll-fade-in>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../common/SectionHeader";
import ScrollFadeIn from "@/components/common/ScrollFadeIn";

export default {
  name: "TheNews",
  components: {ScrollFadeIn, SectionHeader},
  data: () => {
    return {
      news_contents: [
        {
          id: 1,
          date: "2020 09 21",
          title: "雑誌「HALなんちゃら」様に掲載されました。"
        },
        {
          id: 2,
          date: "2020 09 22",
          title: "当販売店でのの新型コロナウイルス対策について。"
        },
        {
          id: 3,
          date: "2020 09 21",
          title: "Instagramはじめました。"
        },
      ],
    }
  }
}
</script>

<style scoped>
#news {
  color: #fff;
  text-align: left;
}

.news_wrap {
  width: fit-content;
  margin: auto;
}

.news_item {
  position: relative;
  width: 80vw;
  max-width: 900px;
  margin: 30px auto;
  color: #fff;
}

.news_item_back_ground {
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(90, 95, 119, 0.5);
}

.news_item_frame {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  border: 5px solid #fff;
  box-sizing: border-box;
}

.news_item_content {
  display: flex;

  padding: 30px 0;
  position: relative;
  z-index: 4;
  margin: 0 30px;
}

.news_item_content_date {
  white-space: nowrap;
  margin-right: 30px;
}

.news_item_content_title {
}

</style>
