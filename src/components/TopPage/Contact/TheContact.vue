<template>
  <div id="contact">
    <section-header>お問い合わせ</section-header>
    <section-content-frame>
      <div class="contact_content">
        <form action="#">
          <div class="contact_content_name"><p class="label">お名前</p><input type="text"></div>
          <div class="contact_content_mail"><p class="label">メールアドレス</p><input type="email"></div>
          <div class="contact_content_text"><p class="label">お問い合わせ内容</p><textarea></textarea></div>
          <br>
          <app-button>送信</app-button>
        </form>
      </div>
    </section-content-frame>
  </div>
</template>

<script>
import SectionHeader from "../../common/SectionHeader";
import SectionContentFrame from "@/components/common/SectionContentFrame";
import AppButton from "@/components/common/AppButton";

export default {
  name: "TheContact",
  components: {AppButton, SectionContentFrame, SectionHeader}
}
</script>

<style scoped>
#contact {
  color: #fff;
}

.contact_content {
  padding: 50px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
}

.contact_content .label {
  text-align: left;
  margin: 10px 0;
}


input, textarea {
  width: 100%;
  background-color: #fff;
  border-radius: 5%;
  color: #000;
}

textarea {
  height: 100px;
}
</style>
