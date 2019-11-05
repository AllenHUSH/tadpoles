<template>
  <div>
    <van-tabs color="#2c3e50" sticky animated swipeable>
      <van-tab title="EveryDayCarry">
        <van-grid :column-num="3" square>
          <van-grid-item v-for="(item, index) in class1list" :key="index">
            <van-icon v-if="item.icon.length!=0" :name="item.icon" />
            <span>{{item.name}}</span>
            <van-tag type="success" v-if="item.state=='安全'">{{item.state}}</van-tag>
            <van-tag type="danger" v-if="item.state=='丢失'">{{item.state}}</van-tag>
            <van-tag type="warning" v-if="item.state=='未知'">{{item.state}}</van-tag>
            <span>{{item.location}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="杂七杂八">
        <van-grid :column-num="3" square>
          <van-grid-item v-for="(item, index) in class2list" :key="index">
            <van-icon :name="item.icon" />
            <span>{{item.name}}</span>
            <van-tag type="success" v-if="item.state=='安全'">{{item.state}}</van-tag>
            <van-tag type="danger" v-if="item.state=='丢失'">{{item.state}}</van-tag>
            <van-tag type="warning" v-if="item.state=='未知'">{{item.state}}</van-tag>
            <span>{{item.location}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="宠物">
        <van-grid :column-num="3" square>
          <van-grid-item v-for="(item, index) in class3list" :key="index">
            <van-icon :name="item.icon" />
            <span>{{item.name}}</span>
            <van-tag type="success" v-if="item.state=='安全'">{{item.state}}</van-tag>
            <van-tag type="danger" v-if="item.state=='丢失'">{{item.state}}</van-tag>
            <van-tag type="warning" v-if="item.state=='未知'">{{item.state}}</van-tag>
            <span>{{item.location}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
    <van-button round icon="plus" color="#2c3e50" id="addButton" @click="handleAdd()" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      class1list: [
        {
          icon: "",
          name: "校园卡",
          state: "安全",
          location: "随身携带"
        },
        {
          icon: "",
          name: "U盘",
          state: "安全",
          location: "随身携带"
        },
        {
          icon: "",
          name: "小米手环",
          state: "安全",
          location: "随身携带"
        },
        {
          icon: "",
          name: "AirPods",
          state: "安全",
          location: "随身携带"
        }
      ],
      class2list: [
        {
          icon: "",
          name: "数据线",
          state: "未知",
          location: "净月校区秋华公寓"
        },
        {
          icon: "",
          name: "水杯",
          state: "安全",
          location: "净月校区日华公寓"
        },
        {
          icon: "",
          name: "书包",
          state: "安全",
          location: "信息科学与技术学院"
        },
        {
          icon: "",
          name: "电脑",
          state: "安全",
          location: "净月校区秋华公寓"
        },
        {
          icon: "",
          name: "手表",
          state: "安全",
          location: "光华公寓"
        },
        {
          icon: "",
          name: "篮球鞋",
          state: "安全",
          location: "净月篮球场"
        }
      ],
      class3list: [
        {
          icon: "",
          name: "多多",
          state: "丢失",
          location: "博硕路与净月大街交汇处附近"
        },
        {
          icon: "",
          name: "喵呜🐱",
          state: "安全",
          location: "复地哥德堡森林4期"
        }
      ]
    };
  },
  methods: {
    handleAdd() {
      this.$toast("添加物品功能暂未开发");
    }
  }
};
</script>
<style scoped>
#addButton {
  position: fixed;
  bottom: 80px;
  left: 40%;
  width: 20%;
}
</style>