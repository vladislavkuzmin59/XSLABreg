<template>
    <div class="title">
        <div class="h1__logo">
            <img src="@/assets/img/starBlack.svg" alt="">
            <h1>Старт в дизайне</h1>
        </div>
        <div class="title__links">
            <div>
                <img src="@/assets/img/messageTitle.svg" alt="">
            </div>
            <div>
                <img src="@/assets/img/book.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .title{
        width: 100%;
        height: 9%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 25px;
            .h1__logo{
                width: 31%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    height: 32px;
                    width: 32px;
                }
                h1{
                    font-size: 62px;
                    line-height: 110%;
                    letter-spacing: -0.03em;
                    font-weight: 450;
                }
            }
            .title__links{
                width: 6%;
                height: 65%;
                display: flex;
                justify-content: space-between;
                    div{
                        width: 42%;
                        height: 100%;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #E6E6E6;
                        cursor: pointer;
                    }
            }
    }
</style>