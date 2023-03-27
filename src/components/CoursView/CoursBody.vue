<template>
    <div class="body">
        <div class="title__iframe">
            <BodyTitle />
            <iframe src="" frameborder="0"></iframe>
        </div>
        <BodyLectures />
    </div>
</template>

<script>
import BodyLectures from './body/BodyLectures.vue';
import BodyTitle from './body/BodyTitle.vue';

    export default {
    components: { BodyTitle, BodyLectures }
}
</script>

<style lang="scss" scoped>
    .body{
        width: 85vw;
        height: 101vh;
        margin-top: 6vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 9.8vh;
            .title__iframe{
                width: 100%;
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                iframe{
                    width: 98%;
                    margin-left: 2%;
                    height: 88%;
                }
            }
    }
</style>