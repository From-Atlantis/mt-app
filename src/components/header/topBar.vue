<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <mNav />
        </el-col>
    </el-row>
</template>

<script>
import geo from "@/components/header/geo.vue";
import mNav from "@/components/header/nav.vue";
export default {
    components: {
        geo,
        mNav
    }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/topBar.scss";
</style>