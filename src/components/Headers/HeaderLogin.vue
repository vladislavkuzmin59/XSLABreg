<template>
    <div class="header">
        <HeaderLogo />
    </div>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue';

    export default {
    components: { HeaderLogo }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 7.7vh;
        display: flex;
        align-items: center;
        padding-left: 7.5%;
        position: sticky;
        top: 0;
        z-index: 99999999;
    }
</style>