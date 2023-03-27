<template>
    <div class="container">
        <TheHeader />
        <CoursBody />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/Headers/TheHeader.vue';
import TheFooter from '@/components/MyCoursesView/Footer/TheFooter.vue';
import CoursBody from '@/components/CoursView/CoursBody.vue'

    export default {
    components: { TheHeader, TheFooter, CoursBody }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 99vw;
    }
</style>