<template>
    <div class="m-istyle">
        <dl @mouseover="over" :class="nav.classN">
            <dt>{{nav.title}}</dt>
            <dd
                v-for="(item, index) in nav.type"
                :key="index"
                :class="{active: kind == item.tab}"
                :data-type="item.tab"
            >{{item.text}}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item, index) in allList[kind]" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img :src="item.image" class="image" />
                    <div class="cbody">
                        <div class="title" :title="item.title">{{item.title}}</div>
                        <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
                        <div class="price-info" v-if="item.isSoldOut">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                        <div class="price-info" v-else-if="item.isAvgPri">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price_info.avgPrice}}</span>
                                <span class="units">/人均</span>
                            </span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                        <div class="price-info" v-else>
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price}}</span>
                            </span>
                            <span class="old-price">门市价¥{{item.price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    props: ["nav"],
    data() {
        return {
            kind: "all",
            allList: {}
        };
    },
    created() {
        api.resultsByKeywords().then(res => {
            this.allList = res.data.data;
        });
    },
    methods: {
        over(e) {
            if (e.target.tagName.toLowerCase() != "dd") {
                return;
            } else {
                this.kind = e.target.getAttribute("data-type");
                this.list = this.allList[this.kind];
            }
        }
    }
};
</script>