<template>
    <div class="layout-default">
        <el-container>
            <el-header height="100%" style="padding: 0">
                <my-header />
            </el-header>
            <el-main style="overflow: visible; padding: 0">
                <router-view />
            </el-main>
            <el-footer height="100%">
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import myHeader from "@/components/header/index.vue";
import myFooter from "@/components/footer/index.vue";

export default {
    components: {
        myHeader,
        myFooter
    }
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>