<template>
    <div class="Login__inputs">
        <h2 class="inputs__title">По данным аккаунта</h2>
        <div class="inputs__checkboxes">
            <div class="inputs">
                <BaseInput placeholder="Ваш логин"/>
                <BaseInput placeholder="Пароль"/>
            </div>
            <div class="checkboxes">
                <checkbox name="terms" value="1">Запомнить меня</checkbox>
                <p>Восстановление пароля</p>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue';

    export default {
    data() {
        return {
            email: "user@mail.ru",
            password: "1234567"
        }
    },
    components: { BaseInput },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
    .Login__inputs{
        width: 100%;
        height: 63.6%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
            .inputs__title{
                font-weight: 450;
                font-size: 25px;
                line-height: 120%;
                letter-spacing: -0.02em;
            }
            .inputs__checkboxes{
                width: 100%;
                height: 76.2%;
                display: flex;
                flex-direction: column;
                justify-content: space-between; 
                    .inputs{
                        width: 100%;
                        height: 74%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .checkboxes{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        font-weight: 450;
                        font-size: 16px;
                        line-height: 120%;
                        opacity: 0.9;
                            p{
                                border-bottom: 1px solid rgba($color: #212121, $alpha: .15);
                                cursor: pointer;
                            }
                    }
            }
    }
</style>