<template>
    <div class="container"> 
        <TheHeader />
        <MyCoursesBody />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/Headers/TheHeader.vue';
import MyCoursesBody from '@/components/MyCoursesView/MyCoursesBody/MyCoursesBody.vue';
import TheFooter from '@/components/MyCoursesView/Footer/TheFooter.vue';

    export default {
        data() {
            return {
                users:[]
            }
        },
    components: { TheHeader, MyCoursesBody, TheFooter },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
    .container{
        width: 99vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>