<template lang="html">
  <v-app class="layout">
    <v-toolbar app dark flat color="grey darken-4">
      <span class="logo">Scoop</span>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>任务</v-btn>
        <v-btn flat>规则</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="styl" scoped>
.layout{
  background: url('~@asset/image/background.jpg');
  background-size: cover;

  .logo{
    font-family: xenogears;
    font-size: 33px;
  }
}
</style>
