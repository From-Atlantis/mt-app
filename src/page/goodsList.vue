<template>
    <div class="page-product">
        <el-row>
            <m-crumb />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <m-category />
                </el-row>
                <el-row>
                    <m-list />
                </el-row>
            </el-col>
            <el-col :span="5" style="padding-left: 10px">
                <el-row>
                    <div class="map-container">
                        <img
                            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1576833083,3586106542&fm=26&gp=0.jpg"
                        />
                    </div>
                </el-row>
                <el-row>
                    <m-guess-like />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mCrumb from "@/components/product/crumb.vue";
import mCategory from "@/components/product/category.vue";
import mList from "@/components/product/list.vue";
import mGuessLike from "@/components/product/guessLike.vue";
export default {
    components: {
        mCrumb,
        mCategory,
        mList,
        mGuessLike
    }
};
</script>

<style lang='scss'>
@import "@/assets/css/products/index.scss";
@import "@/assets/css/products/list.scss";
</style>

<style>
.map-container img {
    width: 230px;
    height: 222px;
    border-radius: 4px;
}
</style>