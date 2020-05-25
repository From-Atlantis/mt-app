<template>
  <div class="m-header">
    <el-row>
      <top-bar></top-bar>
    </el-row>
    <el-row>
      <search-bar></search-bar>
    </el-row>
  </div>
</template>

<script>
import topBar from "@/components/header/topBar.vue";
import searchBar from "@/components/header/searchBar.vue";

export default {
  components: {
    topBar,
    searchBar
  }
};
</script>