<template>
  <main class="main">
   <Form/>
  </main>
</template>

<script>
import Form from '../components/forms/Form'

export default {
   name: 'Main',
   components: {
      Form
   }
};
</script>

<style lang="scss">
.main {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
