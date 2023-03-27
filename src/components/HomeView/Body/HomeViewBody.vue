<template>
    <div class="body"> 
        <LoginTitle />
        <LoginInputsButtons />
    </div>
</template>

<script>
import LoginInputsButtons from './LoginInputs/LoginInputsButtons.vue';
import LoginTitle from './LoginTitle/LoginTitle.vue';

    export default {
    components: { LoginTitle, LoginInputsButtons }
}
</script>

<style lang="scss" scoped>
    .body{
        width: 28.2%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6.1vh;
        margin-left: 7.6vw;
    }
</style>