<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuHide">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuShow(item.items)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="curItem" class="detail" @mouseenter="detailShow" @mouseleave="detailHide">
            <template v-for="(item, index) in curItem">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(item, index) in item.items" :key="index + 'detail'">{{item}}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            curItem: null,
            menuList: []
        };
    },
    created() {
        api.getMenuList().then(res => {
            this.menuList = res.data.data;
        });
    },
    methods: {
        menuShow(item) {
            this.curItem = item;
        },
        menuHide() {
            this.timer = setTimeout(() => {
                this.curItem = null;
            }, 200);
        },
        detailShow() {
            clearTimeout(this.timer);
        },
        detailHide() {
            this.curItem = null;
        }
    }
};
</script>