<template>
  <div>
    <HelpNumber></HelpNumber>
    <div id="tabsCard">
      <van-tabs color="#2c3e50" sticky>
        <van-tab title="活动记录">
          <van-cell
            v-for="(item, index) in activitList"
            :key="index"
            :value="item.location"
            is-link
          >
            <template slot="title">
              <van-tag>{{item.time}}</van-tag>
              <span class="custom-title"> {{item.name}}</span>
            </template>
          </van-cell>
        </van-tab>
        <van-tab title="感谢信">
          <ThanksCard
            title="谢谢你们"
            author="一个2019级新生·2019/11/03"
            text="因为大家的帮助，才使得我轻松的找到了开学那天我丢在人流里的AirPods，这真是一个温暖的社区。"
          ></ThanksCard>
          <ThanksCard
            title="终于找到了我的U盘"
            author="Allen·2019/11/02"
            text="太开心了，U盘里是我的毕业设计，因为大家我才能找到它，我喜欢这个应用。"
          ></ThanksCard>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import HelpNumber from "../components/HelpNumber";
import ThanksCard from "../components/ThanksCard";
export default {
  components: {
    HelpNumber,
    ThanksCard
  },
  data() {
    return {
      activitList: [
        {
          name: "校园卡",
          time: "16:23",
          location: "信息科学与技术学院"
        },
        {
          name: "钱包",
          time: "14:06",
          location: "信息科学与技术学院"
        },
        {
          name: "钥匙串",
          time: "11:59",
          location: "净月校区二食堂"
        },
        {
          name: "AirPods",
          time: "06:58",
          location: "净月校区田径场"
        }
      ]
    };
  }
};
</script>
<style scoped>
#tabsCard{
    text-align: left;
}
</style>