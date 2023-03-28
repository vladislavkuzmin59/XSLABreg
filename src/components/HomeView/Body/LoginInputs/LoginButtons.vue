<template>
    <div class="login__buttons">
        <BaseButton @click="onClickButton" theme="primary" size="lg">
            Войти в аккаунт
        </BaseButton>
        <BaseButton @click="onClickButton" theme="secondary" size="lg">
            Войти в аккаунт
        </BaseButton>
    </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

    export default {
    components: { BaseButton }
}
</script>

<style lang="scss" scoped>
    .login__buttons{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 32.3%;
    }
</style>