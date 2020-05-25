<template>
    <div class="page-changeCity">
        <el-row>
            <m-province />
        </el-row>
        <el-row>
            <hot-arecent title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot-arecent title="最近访问：" :list="recentList" />
        </el-row>
        <el-row>
            <m-category />
        </el-row>
    </div>
</template>

<script>
import mProvince from "@/components/changeCity/province.vue";
import hotArecent from "@/components/changeCity/hotArecent.vue";
import mCategory from "@/components/changeCity/category.vue";
import api from "@/api/index.js";

export default {
    data() {
        return {
            hotList: [],
            recentList: []
        };
    },
    created() {
        api.getHotCity().then(res => {
            res.data.data.forEach(item => {
                this.hotList.push(item.name);
            });
        });
        api.getRecentCity().then(res => {
            res.data.data.forEach(item => {
                this.recentList.push(item.name);
            });
        });
    },
    components: {
        mProvince,
        hotArecent,
        mCategory
    }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
@import "@/assets/css/changecity/select.scss";
@import "@/assets/css/changecity/hot.scss";
@import "@/assets/css/changecity/category.scss";
</style>