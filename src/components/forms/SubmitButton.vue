s<template>
  <button type="submit" class="submit__button">Заказать</button>
</template>

<script>
export default {
  name: 'SubmitButton',
};
</script>

<style lang="scss">
.submit__button {
  height: 35px;
  width: 100%;
  color: #fff;
  background-color: #4a90e2;
  border: 0;
  border-radius: 12px;
  outline: none;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s linear 0s;
  &:hover {
    box-shadow: 0 2px 6px 0 rgba(74, 144, 226, 0.5);
  }
}
.submit__button.disable {
  cursor: auto;
  background-color: #1b5dab;
}
</style>
