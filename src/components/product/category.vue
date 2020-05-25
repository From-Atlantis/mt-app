<template>
    <div class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in classicList" :key="index">
                <m-select :list="item" />
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in areaList" :key="index">
                <m-select :list="item" />
            </dd>
        </dl>
    </div>
</template>

<script>
import mSelect from "@/components/product/select.vue";
export default {
    data() {
        return {
            classicList: [
                {
                    title: "美食",
                    sub_list: [
                        {
                            name: "全部",
                            id: "all"
                        },
                        {
                            name: "日本菜",
                            id: "japan"
                        },
                        {
                            name: "火锅",
                            id: "huoguo"
                        },
                        {
                            name: "海底捞",
                            id: "haidilao"
                        },
                        {
                            name: "小龙虾",
                            id: "longxia"
                        }
                    ]
                }
            ],
            areaList: [
                {
                    title: "浦东新区",
                    sub_list: [
                        {
                            name: "全部",
                            id: "all"
                        },
                        {
                            name: "野生动物园",
                            id: "japan"
                        },
                        {
                            name: "迪士尼",
                            id: "huoguo"
                        },
                        {
                            name: "浦东机场",
                            id: "haidilao"
                        },
                        {
                            name: "航头",
                            id: "longxia"
                        }
                    ]
                }
            ]
        };
    },
    components: {
        mSelect
    }
};
</script>