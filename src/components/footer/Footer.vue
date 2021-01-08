<template>
  <b-container fluid class="footer">
    Copyright &copy; {{ getFormattedDate() }} —
    <strong>The Food Court</strong>
  </b-container>
</template>
<script>

import formattedDate from '../../common/common';
export default {
  name: 'Footer',
  methods: {
    getFormattedDate() {
      return formattedDate();
    },
  },
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color:#17a2b8 !important;
  text-align: center;
  font-size: .8em;
}
</style>
