<template>
  <a v-if="inPermission" :href="href" target="_blank">{{ text }}</a>
</template>
<script>
export default {
  props: ['permission', 'text', 'url'],
  computed: {
    href() {
      let url = this.url;
      if (url.indexOf('?') !== -1) {
        url = url + '&token=' + this.token;
      } else {
        url = url + '?token=' + this.token;
      }
      return url;
    },
    token() {
      return window.localStorage.getItem('token');
    },
    inPermission() {
      if (typeof this.$store.state.User.permissions === 'undefined') {
        return false;
      }
      let permissions = this.$store.state.User.permissions;
      return typeof permissions[this.permission] !== 'undefined';
    }
  }
};
</script>
