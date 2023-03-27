<template>
    <div class="inputs__buttons">
        <TheRegInputsButtonsTitle />
        <TheRegButtonsCheckboxes />
    </div>
</template>

<script>
import TheRegButtonsCheckboxes from './RegButtonsCheckboxes/RegButtonsCheckboxes.vue';
import TheRegInputsButtonsTitle from './RegButtonsInputsTitle/RegInputsButtonsTitle.vue';

    export default {
    components: {TheRegInputsButtonsTitle, TheRegButtonsCheckboxes }
}
</script>

<style lang="scss" scoped>
    .inputs__buttons{
        width: 100%;
        height: 68.1%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>