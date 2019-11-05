<template>
  <div>
    <div id="borderBox">
      <span>24h</span>
      <h1>{{number}}</h1>
      <p id="declaratives">过去24小时您帮助了{{35}}个人</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 35
    };
  }
};
</script>
<style scoped>
#borderBox {
  position: relative;
  width: 70%;
  margin: 5vh auto;
  border: 2px solid #2c3e50;
}
#borderBox span {
  position: relative;
  top: -10px;
  background-color: #ffffff;
}
#borderBox h1 {
  position: relative;
  top: -10px;
  font-size: 80px;
}
#declaratives {
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  background-color: #2c3e50;
  color: #ffffff;
}
</style>