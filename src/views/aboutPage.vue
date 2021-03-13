<template>
  <div class = "about-page">
    <div class = "flexDiv_row" :style = "{'height': '100%'}">
      <div :style = "{'width': '70%', 'height': '100%'}">
        <mavon-editor
          class = "mavon-editor"
          :value = "text"
          :subfield = "false"
          :defaultOpen = "'preview'"
          :toolbarsFlag = "false"
          :editable = "false"
          :scrollStyle = "true"
          :ishljs = "true"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "### 2021年兴趣开放实验室 —— AI方向兴趣引导课程 \n ------ \n 主讲人：崔伊然，马子阳 \n 课程内容：人工智能领域科普，深度学习图像处理领域实验 \n\n **AI-classes 网站介绍：** \n vue 开发，vercel 进行网站托管，github地址：https://github.com/Conyrol/AI_classes \n 由于开发时间原因，暂无移动端适配，请使用 PC 端浏览 \n\n **网站更新表：** \n 2021/03/05				开始搭建 \n 2021/03/08				完成主页 (mainPage) \n 2021/03/09				添加动画事件，添加课程内容 \n 2021/03/11				完成友链页面 (linkPage)，使用 vercel 进行托管 \n 2021/03/12				修改课程内容"
    }
  }
}
</script>

<style>
.about-page {
  height: 100%;
}
.mavon-editor {
  height: 100%;
  width: 100%;
}
</style>