<template>
    <div class="profil">
        <img src="@/assets/img/avatar.png" alt="">
        <div class="name__time">
            <div class="name">
                <img src="@/assets/img/starBlue.svg" alt="">
                <p>Иван Иванов</p>
            </div>
            <p class="time">на платформе с 25.05.20</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.profil{
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
        .name__time{
            width: 78%;
            height: 78%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                .name{
                    width: 100%;
                    height: 43%;
                    display: flex;
                    align-items: center;
                    gap: 3%;
                    font-weight: 450;
                    font-size: 20px;
                    line-height: 100%;
                    letter-spacing: -0.02em;
                }
                .time{
                    font-weight: 450;
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: -0.02em;
                    opacity: .35;
                }
        }
}
</style>