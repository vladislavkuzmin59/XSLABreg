<template>
    <div class="buttons__checkboxes">
        <div class="buttons">
            <BaseButton @click="onClickButton" theme="primary" size="lg">Подтвердить через почту</BaseButton>
            <BaseButton @click="onClickButton" theme="registr" size="lg">Подтвердить через телефон</BaseButton>
        </div>
        <div class="checkboxes">
            <checkbox name="terms" value="1">Я подтверждаю согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности, ознакомился и согласен с условиями Пользовательского соглашения, Оферты XSLAB и Оферты для профессий</checkbox>
            <checkbox name="terms" value="1">Хочу получать рассылку от XSLAB Platform</checkbox>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/UI/BaseButton.vue';

    export default {
    components: { BaseButton }
}
</script>

<style lang="scss" scoped>
    .buttons__checkboxes{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 50%;
        .buttons{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 45%;
        }
        .checkboxes{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 96%;
            height: 50%;
            font-size: 16px;
            line-height: 150%;
            color: #A6A6A6;
            opacity: .25;
        }

    }
</style>