<template>
  <div id="app">
    <Header/>
    <router-view><Home/></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '../src/container/Header'
import Footer from '../src/container/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};

</script>

<style lang="scss">
body {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}

</style>
