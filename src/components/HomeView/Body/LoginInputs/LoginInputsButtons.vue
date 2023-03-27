<template>
    <div class="login__inputs__buttons">
        <LoginInputs />
        <LoginButtons />
    </div>
</template>

<script>
import LoginButtons from '@/components/HomeView/Body/LoginInputs/LoginButtons.vue';
import LoginInputs from './LoginInputs.vue';
    export default {
    components: { LoginInputs, LoginButtons }
}
</script>

<style lang="scss" scoped>
.login__inputs__buttons{
        width: 100%;
        height: 63%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>