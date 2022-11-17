<template>
    <div class="mask">
        <div class="login" v-drag>
            <svg-icon
                icon-class="guanbi"
                className="guanbi-icon"
                @click="closeDialog"
            ></svg-icon>
            <div class="login-title">
                <div class="login-line"></div>
                登录
                <div class="login-line"></div>
            </div>
            <div class="login-form">
                <div class="login-form-item">
                    <input
                        type="text"
                        class="item-login"
                        v-model="params.phone"
                        placeholder="请输入手机号"
                    />
                </div>
                <div class="login-form-item">
                    <input
                        type="text"
                        class="item-login"
                        v-model="params.code"
                        placeholder="请输入验证码"
                    />
                    <div class="phoneCode">获取验证码</div>
                </div>
                <div class="login-form-button" @click="Login">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import { checkStr } from "@/utils/utils";
export default {
    name: "Login",
    data() {
        return {
            params: {
                phone: "",
                code: "",
            },
        };
    },
    methods: {
        Login() {
            if (
                checkStr(this.params.phone, "phone") &&
                this.params.code.length == 6
            ) {
                this.$message.success({ content: "登录成功" });
            } else {
                this.$message.error({ content: "请输入完整信息" });
                console.log("hhh");
            }
        },
        closeDialog() {
            this.$store.commit("user/SET_LOGIN_DIALOG", false);
        },
    },
};
</script>

<style lang="less" scoped>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
    .login {
        width: 500px;
        height: 700px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        border-radius: 20px;
        text-align: center;
        box-shadow: 1px 1px 1px #f0f0f0;
        padding: 20px;
        .guanbi-icon {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 20px;
            height: 20px;
        }
        &-title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 20px;
            font-size: 30px;
            font-weight: bold;
            .login-line {
                width: 30%;
                height: 1px;
                background-color: #666;
                transform: scaleY(0.3);
            }
        }
        .login-form {
            &-item {
                width: 100%;
                margin: 40px auto;
                text-align: center;
                display: flex;
                position: relative;
                .phoneCode {
                    position: absolute;
                    height: 60px;
                    line-height: 60px;
                    color: #38ecdd;
                    right: 40px;
                    cursor: pointer;
                }
                .item-login {
                    background-color: #fafafa;
                    border-radius: 30px;
                    width: 460px;
                    height: 60px;
                    padding: 0 20px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    &:focus {
                        border: 1px solid #38ecdd;
                    }
                }
            }
            &-button {
                width: 460px;
                height: 60px;
                text-align: center;
                margin: 0 auto;
                color: #fff;
                line-height: 60px;
                background-color: #38ecdd;
                border-radius: 30px;
                font-size: 24px;
                cursor: pointer;
            }
        }
    }
}
</style>