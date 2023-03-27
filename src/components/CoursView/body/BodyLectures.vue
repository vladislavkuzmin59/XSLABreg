<template>
    <div class="lectures">
        <div class="lecture">
            <p class="number">Лекция 1</p>
            <p class="title">Начало работы</p>
            <div class="time"> 
                <img src="@/assets/img/play.svg" alt="">
                <p>00:14:39</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .lectures{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
            .lecture{
                width: 15%;
                height: 100%;
                border-radius: 16px;
                border: 1px solid #ECECEC;
                padding: 26px 0 0 24px;
                cursor: pointer;
                .number{
                    font-weight: 450;
                    font-size: 14px;
                    line-height: 16px;
                    opacity: 0.4;
                }
                .title{
                    font-weight: 450;
                    font-size: 25px;
                    line-height: 29px;
                    margin-top: 4px;
                }
                    .time{
                        display: flex;
                        margin-top: 4px;
                        img{
                            margin-right: 14px;
                        }
                        font-weight: 450;
                        p{
                            font-size: 14px;
                            line-height: 16px;
                        }
                    }
            }
    }
</style>