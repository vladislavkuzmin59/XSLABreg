<template>
    <div class="container-courses">
        <MyCoursesTitle />
        <TheCourses />
    </div>
</template>

<script>
import MyCoursesTitle from '@/components/MyCoursesView/MyCoursesBody/MyCourses/CoursesTitle.vue'
import TheCourses from '@/components/MyCoursesView/MyCoursesBody/MyCourses/TheCourses.vue'
    export default {
            components: {MyCoursesTitle, TheCourses},
    }
</script>

<style lang="scss" scoped>
    .container-courses{
        width: 75%;
        display: flex;
        flex-direction: column;
        gap: 33px;
    }
</style>