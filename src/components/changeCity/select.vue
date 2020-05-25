<template>
    <div class="choose-wrap" @click="showContent" v-document_click="hideContent">
        <div class="choose">
            <span>{{list.name}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content" :class="{active: active}">
                <h2>{{list.name}}</h2>
                <div class="wrapper" :class="{city: cityActive}">
                    <div class="col" v-for="(item, index) in renderList" :key="index">
                        <span
                            class="mt-item"
                            :class="{'active': list.name == item}"
                            v-for="(item, index) in item"
                            :key="index"
                            @click="changeActive(item)"
                        >{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["list", "active", "cityActive"],
    computed: {
        renderList() {
            let result = [];
            let col = Math.ceil(this.list.list.length / 12);
            for (let i = 0; i < col - 1; i++) {
                let data = this.list.list.slice(i * 12, (i + 1) * 12);
                result.push(data);
            }
            return result;
        }
    },
    methods: {
        showContent(e) {
            e.stopPropagation();
            this.$emit("changeA", true);
        },
        hideContent() {
            this.$emit("changeA", false);
        },
        changeActive(val) {
            this.$emit("change", val);
            this.$store.dispatch("setPosition");
            if (this.cityActive) {
                this.$router.push({ name: "defaultPage" });
            }
        }
    }
};
</script>