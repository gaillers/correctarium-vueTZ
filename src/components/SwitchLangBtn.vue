<template>
  <div class="lang-item">{{switchLangText}}</div>
</template>

<script>
export default {
  name: 'SwitchLangBtn',
  props: {
     switchLangText: String,
  },
};
</script>

<style lang="scss">
.lang-item {
  padding: 8px 15px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #000;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}
</style>
