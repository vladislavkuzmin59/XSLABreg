<template>
    <router-link to="cours">
    <div class="courses">
        <div class="cours">
            <div class="title__description">
                <div class="description">
                    <div class="feature dark">Веб-дизайн</div>
                    <div class="feature">12 месяцев</div>
                    <div class="feature">Диплом</div>
                    <div class="feature">Гарантия трудоустройства</div>
                </div>
                <div class="title">
                    <h2><img src="@/assets/img/plusLg.svg" alt=""> Старт в дизайне</h2>
                    <p>12 лекций, 15 часов чистого материала</p>
                </div>
            </div>
            <div class="subscribe__type">
                <p>В подписке</p>
                <div class="type">
                    <img src="@/assets/img/plusSm.svg" alt="">
                    Dark
                </div>
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .courses{
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        gap: 16px;
        margin-bottom: 17.2vh;
            .cours{
                height: 48vh;
                width: 33%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;          
                color: #162A2D;
                border-radius: 21px;
                background: #BCF6FF;
                padding: 3.14vh 2.2% 2.6vh 2.2%;
                .title__description{
                    width: 89%;
                    height: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                        .description{
                            width: 100%;
                            height: fit-content;
                            display: flex;
                            flex-wrap: wrap;
                            gap: 5px;
                            font-weight: 450;
                            font-size: 16px;
                            line-height: 110%;
                                .feature{
                                    height: 3vh;
                                    display: flex;
                                    align-items: center;
                                    padding: 0 3.36%;
                                    background: white;
                                    border-radius: 10px;

                                    &.dark{
                                        background: #1C2C2F;
                                        color: white;
                                    }
                                }
                        }
                        .title{
                            width: 100%;
                            gap: 18px;
                            padding-right: 17%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            h2{
                                font-weight: 450;
                                font-size: 50px;
                                line-height: 100%;
                                letter-spacing: -0.02em;
                            }
                            p{
                                letter-spacing: -0.02em;
                                font-size: 20px;
                                line-height: 130%;
                            }
                        }
                }
                .subscribe__type{
                    display: flex;
                    gap: 6px;
                    font-size: 16px;
                    line-height: 110%;
                    letter-spacing: -0.02em;
                    p{
                        opacity: .6;
                    }  
                        .type{
                            gap: 2px;
                            display: flex;
                            height: 18px;
                            border-bottom: 1px solid rgba(28, 44, 47, .2);
                            img{
                                width: 12px;
                                height: 12px;
                            }
                        }
                }
            }
    }
</style>