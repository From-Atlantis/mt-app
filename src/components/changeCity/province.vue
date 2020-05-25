<template>
    <div>
        <span class="name">按省份选择：</span>
        <m-select
            :list="province"
            :active="provinceActive"
            @changeA="changeP"
            @change="changePActive"
            :cityActive="cityActive"
        />
        <m-select
            :list="city"
            :active="cityActive"
            :cityActive="cityActive"
            @changeA="changeC"
            @change="changeCActive"
        />
        <span>直接搜索：</span>
        <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市中文或拼音"
            :remote-method="remoteMethod"
            :loading="loading"
        >
            <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
        </el-select>
    </div>
</template>

<script>
import mSelect from "@/components/changeCity/select.vue";
import api from "@/api/index.js";
export default {
    data() {
        return {
            province: {
                name: "省份",
                list: []
            },
            city: {
                name: "城市",
                list: []
            },
            allPC: [],
            provinceActive: false,
            cityActive: false,
            searchWord: "",
            loading: false,
            options: []
        };
    },
    created() {
        let self = this;
        api.getProvinceList().then(res => {
            self.allPC = res.data.data;
            res.data.data.forEach(item => {
                self.province.list.push(item.provinceName);
            });
        });
    },
    methods: {
        changeP(flag) {
            this.provinceActive = flag;
            if (flag) {
                this.cityActive = false;
            }
        },
        changeC(flag) {
            this.cityActive = flag;
            if (flag) {
                this.provinceActive = false;
            }
        },
        remoteMethod(val) {
            console.log(val);
        },
        changePActive(val) {
            this.province.name = val;
            this.allPC.forEach(item => {
                if (item.provinceName == val) {
                    this.city.list = [];
                    item.cityInfoList.forEach(item => {
                        this.city.list.push(item.name);
                    });
                }
            });
        },
        changeCActive(val) {
            this.city.name = val;
        }
    },
    components: {
        mSelect
    }
};
</script>