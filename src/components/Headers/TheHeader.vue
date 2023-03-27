<template>
    <div class="header">
        <HeaderLogo />
        <div class="links__profil">
            <div class="links">
                <div class="all__courses">
                    <p>Все курсы</p>
                    <img src="@/assets/img/arrowDown.svg" alt="">
                </div>
                <p>Подписки</p>
                <p>Наша команда</p>
                <p>Бесплатные курсы</p>
            </div>
            <div class="profil">
                <img src="@/assets/img/notif.svg" class="notif" alt="">
                <img src="@/assets/img/avatar.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue';

    export default {
    components: { HeaderLogo }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 7.7vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 7.5%;
        position: sticky;
        top: 0;
        z-index: 99999999;
        background: white;
            .links__profil{
                width: 42%;
                height: 48%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .links{
                    width: 82%;
                    height: 50%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 16px;
                    line-height: 19px;
                        p{
                            cursor: pointer;
                        }
                        .all__courses{
                            width: 17%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                                img{
                                    cursor: pointer;
                                    width: 10%;
                                    height: 26%;
                                }
                        }
            }
                .profil{
                    width: 10%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                        img{
                            cursor: pointer;
                        }
                        .notif{
                            height: 45%;
                            width: 27%;
                        }
                }
            }
    }
</style>