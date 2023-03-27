<template>
    <div class="mycourses__body">
        <MyCoursesProfilLinks />
        <MyCourses />
    </div>
</template>

<script>
import MyCoursesProfilLinks from './MycoursesProfilLinks/MyCoursesProfilLinks.vue';
import MyCourses from '@/components/MyCoursesView/MyCoursesBody/MyCourses/MyCourses.vue'
    export default {
    components: { MyCoursesProfilLinks, MyCourses }
}
</script>

<style lang="scss" scoped>
    .mycourses__body{
        width: 85%;
        margin-top: 5%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
    }
</style>