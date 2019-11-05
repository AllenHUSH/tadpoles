<template>
  <div id="user">
    <van-cell-group title="用户信息">
      <van-cell title="用户名" value="Allen" is-link/>
      <van-cell title="登陆账号" value="hush073" is-link/>
      <van-cell title="第三方绑定" value="已绑定微信" is-link/>
      <van-cell title="修改密码" is-link/>
    </van-cell-group>
    <van-cell-group title="系统设置">
      <van-switch-cell v-model="checked1" title="共享我的蓝牙" />
      <van-switch-cell v-model="checked2" title="共享我的网络" />
      <van-switch-cell v-model="checked3" disabled title="夜间模式" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
data() {
    return {
        checked1:true,
        checked2:false,
        checked3:false,
    }
},
}
</script>
<style scoped>
#user{
    text-align: left;
}
</style>