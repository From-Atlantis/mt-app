<template>
    <div class="m-guess-like">
        <div class="label">猜你喜欢</div>
        <ul>
            <li>
                <a href="/meishi/159823246/">
                    <div class="pic">
                        <div class="imgbox" style="height: 100%; width: 100%;">
                            <img
                                src="https://p0.meituan.net//joymerchant/db5ce675b2ccd87e45a391847b861aaf-427012145.jpg@188w_106h_1e_1c"
                            />
                        </div>
                    </div>
                    <p class="name">威尔士健身会所（星光耀广场店）</p>
                    <p class="desc">真如</p>
                    <p class="price">
                        <b>￥</b>
                        58.0
                    </p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.m-guess-like {
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 16px 20px 0;
    width: 230px;
    box-sizing: border-box;
    .label {
        font-size: 16px;
        color: #333333;
        line-height: 22px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    ul li {
        list-style: none;
        a {
            display: block;
            text-decoration: none;
            color: #222;
            .pic {
                height: 106px;
                border-radius: 4px;
                .imgbox {
                    background-size: 60% auto;
                    img {
                        border-radius: 4px;
                    }
                }
            }
        }
        .name {
            font-size: 14px;
            line-height: 20px;
            color: #222;
            margin: 10px 0 4px;
        }
        .desc {
            font-size: 12px;
            line-height: 17px;
            color: #999;
        }
        .price {
            font-size: 22px;
            color: #f60;
            line-height: 27px;
            b {
                font-weight: 400;
                font-size: 14px;
            }
        }
    }
}
</style>
