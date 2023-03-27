<template>
    <div class="links">
        <BaseButton size="sm">
            <img src="@/assets/img/cube.svg" alt="">
            <p>Мои курсы</p></BaseButton>
        <BaseButton size="sm">
            <img src="@/assets/img/subscription.svg" alt="">
            <p>Управление подпиской</p></BaseButton>
        <BaseButton size="sm">
            <img src="@/assets/img/message.svg" alt="">
            <p>Вызов ментора</p></BaseButton>
        <BaseButton size="sm">
            <img src="@/assets/img/database.svg" alt="">
            <p>Выделение API</p></BaseButton>
        <BaseButton size="sm">
            <img src="@/assets/img/zap.svg" alt="">
            <p>Достижения</p>
        </BaseButton>
    </div>
</template>

<script>
import BaseButton from '@/UI/BaseButton.vue';

    export default {
    components: { BaseButton }
}
</script>

<style lang="scss" scoped>
.links{
    height: 32%;
    width: 100%;
    margin-top: 7.3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        .link{
            display: flex;
            align-items: center;
            width: fit-content;
            padding: 0 0.7vw;
            height: 3.5vh;
            gap: 0.5vw;
            border-radius: 8px;
            font-weight: 450;
            font-size: 18px;
            line-height: 100%;
            letter-spacing: -0.02em;
        }
}
</style>