<template>
        <div class="header__logo">
            <div class="logo__icons">
               <img src="@/assets/img/plus.svg" alt="">
               <img src="@/assets/img/starGrey.svg" alt="">
               <img src="@/assets/img/starBlack.svg" alt=""> 
            </div>
            <div class="logo__brand">
                <h4>XSLAB</h4>
                <img src="@/assets/img/cross.svg" alt="">
                <p>Программирование</p>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header__logo{
    width: 20%;
    height: 32%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo__icons{
        width: 14%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo__brand{
        width: 83%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
            h4{
                font-weight: 450;
                font-size: 23px;
                line-height: 27px;
            }
            p{
                opacity: 0.4;
                font-size: 16px;
                line-height: 120%;
            }
    }
}
</style>