<template>
    <div class="footer">
        <div class="title__addres">
            <div class="title">
                <h3>XSLAB Platform</h3>
                <p>2020 — 2022</p>
            </div>
            <div class="addres">
                <h4>Санкт-Петербург, Средний проспект 32/A строение 1</h4>
                <p>Посмотреть на карте</p>
            </div>
        </div>
        <div class="links">
            <div class="link__types">
                <div class="type">
                    <div class="type__title">Платформа</div>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                </div>
                <div class="type">
                    <div class="type__title">Платформа</div>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                </div>
                <div class="type">
                    <div class="type__title">Платформа</div>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                </div>
                <div class="type">
                    <div class="type__title">Платформа</div>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                    <p>Личный кабинет</p>
                    <p>Демо платформы</p>
                </div>
            </div>
            <div class="socialmedia">
                <img src="@/assets/img/vk.png" alt="">
                <img src="@/assets/img/tel.png" alt="">
                <img src="@/assets/img/tiktok.png" alt="">
                <img src="@/assets/img/dis.png" alt="">
            </div>
        </div>
        <div class="registration__number">
            <div class="registration">
                <p>Зарегистрируйтесь и получите 3 дня бесплатного пользования <span>платформой</span></p>
                <BaseButton theme="primary" size="sm">Регистрация</BaseButton>
                 <img src="@/assets/img/star__footer.svg" alt="">
            </div>
            <div class="number">
                <p>+7 (999) 800 55-50</p>
                <p><span>Звонок бесплатный</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/UI/BaseButton.vue';

    export default {
    components: { BaseButton }
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 35vh;
        flex: 0 0 auto;
        background: #0B0B0B;
        padding: 5.5vh 7.5% 1%;
        display: flex;
            .title__addres{
                width: 14%;
                height: 100%;
                margin-right: 6.4vw;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                
                    .title{
                        width: 87%;
                        display: flex;
                        flex-direction: column;
                        gap: 1px;
                        h3{
                        
                            font-weight: 500;
                            font-size: 25px;
                            line-height: 140%;
                            letter-spacing: 0.02em;
                            color: white !important;
                        }
                        p{
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 140%;
                            opacity: .4;
                            letter-spacing: 0.02em;
                            color: white !important;
                        }
                    }
                    .addres{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap:2px;
                        h4{
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 130%;
                            letter-spacing: 0.02em;
                            color: white !important;
                            
                        }
                        p{
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 135%;
                            line-height: 130%;
                            opacity: 0.3;
                            color: white !important;
                        }
                    }
            }
            .links{
                height: 100%;
                width: 45%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-right: 7.8vw;
                    .link__types{
                        width: 100%;
                        height: 70%;
                        display: flex;
                        justify-content: space-between;
                            .type{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                height: 100%;
                                width: 20%;
                                    .type__title{
                                        width: fit-content;
                                        padding: 5px 12px;
                                        background: #191919;
                                        font-weight: 500;
                                        font-size: 16px;
                                        line-height: 130%;
                                        letter-spacing: -0.02em;
                                        border-radius: 8px;
                                        color:white;
                                        cursor: pointer;
                                            &:hover{
                                                background: #BCF6FF !important;
                                                color: #162A2D;                                      
                                            }
                                    }
                                    p{
                                        color: white;
                                        opacity: .35;
                                        cursor: pointer;
                                        font-size: 16px;
                                        line-height: 140%;
                                        letter-spacing: -0.02em;
                                    }
                            }
                    }
                    .socialmedia{
                        width: 25%;
                        height: 15%;
                        display: flex;
                        justify-content: space-between;
                            img{
                                cursor: pointer;
                            }
                    }
            }
            .registration__number{
                width: 23%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: end;
                    .registration{
                        width: 100%;
                        height: 62%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        position: relative;
                        background: #191919;
                        padding: 20px 0 20px 20px;
                        border-radius: 17px;
                        span{
                            color:#BCF6FF;
                            font-style: italic;
                        }
                        p{
                            width: 80%;
                            color: white;
                            font-size: 20px;
                            line-height: 120%;
                            letter-spacing: -0.02em;
                            font-weight: 500;
                        }
                        img{
                            position: absolute;
                            bottom: 0;
                            right: 20px;

                        }
                    }
                    .number{
                        width: fit-content;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap:2px;
                        font-size: 14px;
                        line-height: 135%;
                        height: 14%;
                        p{
                            color: white;
                        }
                        span{
                            opacity: .3;
                        }      
                    }
            }
    }
</style>