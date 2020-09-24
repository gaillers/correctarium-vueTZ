<template>
  <div class="footer__nav">
    <nav class="footer__nav-f">
      <ul class="footer__nav-item">
        <li class="footer__nav-link">
          <a href="">Facebook</a>
        </li>
        <li class="footer__nav-link">
          <a href="">manager@correctarium.com</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
};
</script>

<style lang="scss">
.footer__nav {
  height: 100%;
  display: flex;
  align-items: center;
}
.footer__nav-f {
}
.footer__nav-item {
   display: flex;
}
.footer__nav-link {
  padding: 8px 15px;
  & a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
