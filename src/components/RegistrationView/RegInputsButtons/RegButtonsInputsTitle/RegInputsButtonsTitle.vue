<template>
    <div class="container-title">
        <div class="title">Через почту или телефон</div>
        <div class="inputs">
            <BaseInput placeholder="Имя и фамилия" v-model="username" />
            <BaseInput placeholder="Почта" v-model="email"/>
            <div class="input__number">
                <div class="first__number">
                    <div class="flag__number">
                        <img src="@/assets/img/flag.svg" alt="">
                        <div class="number">+7</div>
                    </div>
                    <img src="@/assets/img/arrowDown.svg" alt="">
                </div>
                <input type="text" placeholder="Введите номер" v-model="userData.phone">
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue';
import axios from 'axios'
    export default {
        data() {
            return {
                userData: {
                    email: "",
                    phone: "",
                    username: "",
                },
                userConfig: {
                    phone: this.phone,
                }
            }
        },
        methods: {
            sendUserData() {
                axios.post('url', this.userData, this.userConfig)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        },
    components: {BaseInput}
}
</script>

<style lang="scss" scoped>
    .container-title{
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
            .title{
                font-weight: 450;
                font-size: 25px;
                line-height: 120%;
                letter-spacing: -0.02em;
            }
            .inputs{
                width: 100%;
                height: 78.6%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                    .input__registration{
                        width: 100%;
                        height: 28.7%;
                        border-radius: 10px;
                        border: 1px solid rgba($color: #E6E6E6, $alpha: 1.0);
                        padding-left: 3.7%;
                        font-size: 18px;
                        line-height: 120%;
                        letter-spacing: -0.02em;
                            &::placeholder{
                                color: #A6A6A6;
                            }
                    }
                    .input__number{
                        display: flex;
                        width: 100%;
                        height: 28.7%;
                        padding-left: 3.7%;
                        border-radius: 10px;
                        border: 1px solid rgba($color: #E6E6E6, $alpha: 1.0);
                            .first__number{
                                width: 18.1%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding-right: 3.7%;
                                cursor: pointer;
                                border-right: 1px solid rgba($color: #E6E6E6, $alpha: 1.0);
                                    .flag__number{
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-between;
                                        width: 68%;
                                        height: 38.6%;
                                        font-size: 18px;
                                        line-height: 120%;
                                        letter-spacing: -0.02em;
                                    }
                            }
                            input{
                                font-size: 18px;
                                line-height: 120%;
                                letter-spacing: -0.02em;
                                border: none;
                                height: 100%;
                                width: 78.2%;
                                padding-left: 3.7%;
                                &::placeholder{
                                    color: #A6A6A6;
                                }
                            }
                    }
            }
    }
</style>