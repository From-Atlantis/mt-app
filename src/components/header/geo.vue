<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>[
            <a
                href="#"
                v-for="(item, index) in $store.state.position.nearCity"
                :key="index"
            >{{item.name}}</a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name: 'login'}">登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
    </div>
</template>