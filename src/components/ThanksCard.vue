<template>
  <div>
    <div id="thanksCard">
      <h2>{{title}}</h2>
      <van-divider>{{author}}</van-divider>
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    author: String,
    text: String
  }
};
</script>
<style scoped>
#thanksCard {
  width: 80%;
  margin: 5px auto;
  border: 1px dotted #858585;
  text-align: center;
}
#thanksCard h2 {
  margin: 2px auto;
}
</style>