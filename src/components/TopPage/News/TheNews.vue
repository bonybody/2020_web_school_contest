<template>
  <div id="news">
    <section-header>お知らせ</section-header>
    <scroll-fade-in>
    <div class="news_item" v-for="news_content in news_contents" :key="news_content.id">
        <div class="news_item_back_ground">
        </div>
        <div class="news_item_frame"></div>
        <div class="show hover_bg"></div>
        <div class="news_item_content">
          <span class="news_item_content_date">
            {{ news_content.date }}
          </span>
          <span class="news_item_content_title">
            {{ news_content.title }}
          </span>
          <p class="cursor">＞＞</p>
        </div>
    </div>
    </scroll-fade-in>

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
          date: "2020 10 21",
          title: "雑誌「HALなんちゃら」様に掲載されました。"
        },
        {
          id: 2,
          date: "2020 09 15",
          title: "当販売店でのの新型コロナウイルス対策について。"
        },
        {
          id: 3,
          date: "2020 08 12",
          title: "Instagramはじめました。"
        }
      ],
    }
  }
}
</script>

<style scoped>
#news {
  color: #fff;
  text-align: left;
  width: fit-content;
  margin: 0 auto;
}

.news_wrap {
  width: fit-content;
  margin: auto;
}

.news_item {
  position: relative;
  width: 80vw;
  max-width: 800px;
  margin: 30px auto;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-out;
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

.hover_bg {
  transition: all 0.3s ease-out;
}

.news_item:hover .hover_bg {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}

.news_item_content {
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

.button button::after {
  opacity: 0;
}

.news_item:hover .cursor {
  opacity: 1;
}

.cursor {
  float: right;
  opacity: 0;
  transition: all 0.3s ease-out;
}

</style>
