<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com" />
        </div>
        <div class="login-panel">
            <div class="banner">
                <img
                    src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
                    width="480"
                    height="370"
                    alt="美团网"
                />
            </div>
            <div class="form">
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>link start！！！</span>
                </p>
                <el-input
                    v-model="userName"
                    placeholder="火星文"
                    prefix-icon="profile"
                    :class="{error: error && !userName}"
                ></el-input>
                <el-input
                    v-model="passWord"
                    placeholder="亚特兰蒂斯文"
                    prefix-icon="password"
                    :class="{error: error && !passWord}"
                ></el-input>
                <div class="foot">
                    <a href="#">忘记密码?属实憨憨</a>
                </div>
                <el-button class="btn-login" @click="submit">link start</el-button>
                <p class="reg">
                    <span>害没有账号呢?弟弟</span>
                    <router-link :to="{name: 'register'}">一百万美金注册一次</router-link>
                </p>
                <div class="oauth-wrapper J-oauth-wrapper">
                    <h3 class="title-wrapper">
                        <span class="title">用合作网站账号登录</span>
                    </h3>
                    <div class="oauth cf">
                        <span
                            class="oauth__link oauth__link--qq third-login-btn"
                            data-href="/account/connect/tencent"
                            target="_blank"
                            id="J-third-tencent"
                        ></span>
                        <span
                            class="oauth__link oauth__link--weibo third-login-btn"
                            data-href="/account/connect/sina"
                            target="_blank"
                            id="J-third-sina"
                        ></span>
                    </div>
                    <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li>
                    <a href="#" style="text-decoration: none">关于美团</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none">加入我们</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none">商家入驻</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none">帮助中心</a>
                </li>
                <li>
                    <a href="#" style="text-decoration: none">美团手机版</a>
                </li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            userName: "",
            passWord: "",
            error: ""
        };
    },
    methods: {
        submit() {
            if (!this.userName) {
                this.error = "请输入火星文";
                return false;
            }
            if (!this.passWord) {
                this.error = "请输入密码";
                return false;
            }
            api.login({
                userName: this.userName,
                password: this.passWord
            }).then(res => {
                if (res.data.status == "success") {
                    this.$router.push({ name: "defaultPage" });
                    this.$store.commit("setUserName", this.userName);
                } else {
                    this.error = res.data.msg;
                }
            });
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>