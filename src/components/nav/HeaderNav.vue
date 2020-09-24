<template>
  <nav class="nav">
    <ul class="nav__item">
      <li class="nav__link">
        <router-link to="/how-it-works">О нас</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/price">Цены</router-link>
      </li>
      <li class="nav__link">
        <router-link to="/edit">Редакторы</router-link>
      </li>
      <li class="nav__link">
        <a href="/">Блог</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',

  data: function() {
    return {
       
    }
  },
};
</script>

<style lang="scss">
.nav {
  font-weight: 600;
  font-size: 15px;
  align-self: center;
}
.nav__item {
  display: flex;
}
.nav__link {
   padding: 5px;
  & a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
     & a {
        text-decoration: underline;
     }
  }
}
</style>
