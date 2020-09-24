<template>
  <div class="switch-lang">
    <SwitchLangBtn switchLangText="Украинский" />
    <SwitchLangBtn switchLangText="Русский" />
  </div>
</template>

<script>
import SwitchLangBtn from '../components/SwitchLangBtn';

export default {
  name: 'SwitchLang',
  components: {
    SwitchLangBtn,
  },
};
</script>

<style lang="scss">
.switch-lang {
  margin-left: auto;
  display: flex;
}
</style>
