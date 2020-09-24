<template>
  <footer class="footer">
    <FooterNav />
    <SwitchLang/>
  </footer>
</template>

<script>
import FooterNav from '../components/nav/FooterNav';
import SwitchLang from '../components/SwitchLang'

export default {
  name: 'Footer',
  components: {
    FooterNav,
    SwitchLang,
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  padding: 0 15px;
  max-width: 1140px;
  align-items: center;
  height: 100px;
  margin: 0 auto;
}
</style>
