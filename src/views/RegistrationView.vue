<template>
    <div class="container">
        <HeaderLogin />
        <RegistrationBody />
    </div>
</template>

<script>
import HeaderLogin from '@/components/Headers/HeaderLogin.vue';
import RegistrationBody from '@/components/RegistrationView/RegistrationBody.vue';

    export default {
    components: { HeaderLogin, RegistrationBody }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100vw;
    }
</style>