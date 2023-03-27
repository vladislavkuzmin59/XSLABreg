<template>
    <div class="registration__body">
        <TheRegTitle />
        <TheRegInputsButtons />
    </div>
</template>

<script>

import TheRegInputsButtons from './RegInputsButtons/RegInputsButtons.vue';
import TheRegTitle from './RegTitle/RegTitle.vue';
    export default {
        components: { TheRegTitle, TheRegInputsButtons }
}
</script>

<style lang="scss" scoped>
    .registration__body{
        width: 27.1%;
        height: 78.3vh;
        margin-top: 6.1vh;
        margin-left: 7.6vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>