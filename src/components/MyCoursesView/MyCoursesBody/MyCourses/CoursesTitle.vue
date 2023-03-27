<template>
    <div class="title">
        <h1>Мои курсы</h1>
        <div class="checkbox">
            <checkbox name="terms" value="1">Отображать пройденные курсы</checkbox>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.title{
    width: 22%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-size: 50px;
        line-height: 110%;
    }
    .checkbox{
        font-size: 16px;
        line-height: 110%;
        letter-spacing: -0.02em;
        opacity: .35;
    }
}
</style>