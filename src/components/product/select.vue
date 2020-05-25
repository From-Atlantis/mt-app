<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{list.title}}
                <i class="el-icon-caret-bottom" />
            </dt>
            <dd>
                <div class="select-title">{{list.title}}</div>
                <span v-for="(item, index) in list.sub_list" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: ["list"]
};
</script>