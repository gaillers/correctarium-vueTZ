<template>
  <header class="header">
    <div class="container">
      <div class="container__item">
        <Logo />
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../components/svgs/Logo';
import HeaderNav from '../components/nav/HeaderNav';

export default {
  name: 'Header',
  components: {
    Logo,
    HeaderNav,
  },
};
</script>

<style lang="scss">
.header {
  padding: 15px 0 25px;
  background-color: #000;
  margin-bottom: 55px;
}
.container {
  display: flex;
  justify-content: space-between;
  height: 60px;
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.container__item {
  align-items: center;
  display: flex;
}
</style>
