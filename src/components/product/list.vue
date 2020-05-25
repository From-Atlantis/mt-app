<template>
    <div class="m-products-list">
        <ul>
            <li
                v-for="item in nav"
                :key="item.key"
                :class="{'s-nav-active': item.active}"
                @click="changeA(item)"
            >{{item.name}}</li>
        </ul>
        <el-row>
            <m-item v-for="(item, index) in productList" :key="index" :meta="item" />
        </el-row>
    </div>
</template>

<script>
import mItem from "@/components/product/item.vue";
import api from "@/api/index.js";
export default {
    components: {
        mItem
    },
    data() {
        return {
            nav: [
                {
                    name: "智能排序",
                    key: "s-default",
                    active: true
                },
                {
                    name: "价格排序",
                    key: "s-price",
                    active: false
                },
                {
                    name: "人气最高",
                    key: "s-score",
                    active: false
                },
                {
                    name: "评价最高",
                    key: "s-comment",
                    active: false
                }
            ],
            productList: []
        };
    },
    created() {
        api.getProductsList().then(res => {
            this.productList = res.data.data;
        });
    },
    methods: {
        changeA(curItem) {
            this.nav.forEach(item => {
                item.active = false;
            });
            curItem.active = true;
        }
    }
};
</script>