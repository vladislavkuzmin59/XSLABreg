<template>
    <div class="container-title">
        <h1 class="title">Регистрация в личный кабинет</h1>
        <div class="icons">
            <img src="@/assets/img/telegram.svg" alt="">
            <img src="@/assets/img/wk.svg" alt="">
            <img src="@/assets/img/mail.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container-title{
    width: 94.1%;
    height: 24.8%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        .title{
            font-size: 62px;
            line-height: 110%;
            letter-spacing: -0.03em;
        }
        .icons{
            display: flex;
            justify-content: space-between;
            width: 37.6%;
            height: 25.7%;
                img{
                    width: 28.125%;
                    height: 100%;
                    cursor: pointer;
                }
        }
}
</style>