<template>
    <div class="profil__links">
        <MyCoursesProfil />
        <MyCoursesLinks />
        <div class="setting">
            <img src="@/assets/img/setting.svg" alt="">
            Настройки
        </div>
    </div>
</template>

<script>
import MyCoursesProfil from './MyCoursesProfil.vue';
import MyCoursesLinks from '@/components/MyCoursesView/MyCoursesBody/MycoursesProfilLinks/MyCoursesLinks.vue'

    export default {
    components: { MyCoursesProfil, MyCoursesLinks }
}
</script>

<style lang="scss" scoped>
    .profil__links{
        width: 17%;
        height: 71vh;
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 3.5vh;
            .setting{
                position: absolute;
                bottom: 0;
                font-weight: 450;
                font-size: 18px;
                line-height: 100%;
                letter-spacing: -0.02em;
                gap: 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
            }
    }
</style>