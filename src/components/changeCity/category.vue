<template>
    <div>
        <dl class="m-category">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="item in list.split('')" :key="item">
                <a :href="'#' + item + 'city'">{{item}}</a>
            </dd>
        </dl>
        <dl
            class="m-category-section"
            v-for="(item, index) in allCity"
            :key="index"
            :id="index + 'city'"
        >
            <dt>{{index}}</dt>
            <dd>
                <span v-for="(item, index) in item" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            allCity: {}
        };
    },
    created() {
        api.getCityList().then(res => {
            var obj = {};
            res.data.data.forEach((item, index) => {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            this.allCity = obj;
        });
    }
};
</script>