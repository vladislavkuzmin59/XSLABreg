<template>
  <div class="container">
      <HeaderLogin />
      <HomeViewBody />
  </div>
</template>

<script>
import HeaderLogin from '@/components/Headers/HeaderLogin.vue';
import HomeViewBody from '@/components/HomeView/Body/HomeViewBody.vue';


export default {
    components: { HeaderLogin, HomeViewBody }
}
</script>
<style lang="scss">
  .container{
    width: 100vw;

  }
</style>
