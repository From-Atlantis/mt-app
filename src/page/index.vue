<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container :nav="iStyle" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container :nav="recommend" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mMenu from "@/components/index/menu.vue";
import mLife from "@/components/index/life.vue";
import mContainer from "@/components/index/container.vue";
import api from "@/api/index.js";

export default {
    data() {
        return {
            iStyle: {
                classN: "istyle",
                title: "有格调",
                type: [
                    {
                        tab: "all",
                        text: "全部"
                    },
                    {
                        tab: "food",
                        text: "约会聚餐"
                    },
                    {
                        tab: "spa",
                        text: "丽人SPA"
                    },
                    {
                        tab: "movie",
                        text: "电影演出"
                    },
                    {
                        tab: "travel",
                        text: "品质出游"
                    }
                ]
            },
            recommend: {
                classN: "youhui",
                title: "狠优惠",
                type: [
                    {
                        tab: "all",
                        text: "全部"
                    },
                    {
                        tab: "food",
                        text: "美食"
                    },
                    {
                        tab: "xiuyu",
                        text: "休闲"
                    }
                ]
            }
        };
    },
    components: {
        mMenu,
        mLife,
        mContainer
    },
    created() {
        this.$store.dispatch("setPosition");
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>