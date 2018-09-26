<template>
  <div class="hello">
    <search></search>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
// import { Action, Getter } from 'vuex-class';
// import _ from 'lodash';
import { Search } from 'mint-ui';
// import { noop } from '../utils';
import utils from '../utils';

// @Component
export default {
  components: {
    Search
  },
  mounted() {
    console.log(utils.a);
  }
  // name: string = 'lph';

  // @Getter counter;

  // @Action addCounter;

  // components: {
  //   Header
  // };

  // get getName(): string {
  //   return `my name is ${this.name}`;
  // }

  // sayHello() {
  //   console.log('hello');
  // }

  // useLodash() {
  //   const users = [
  //     { 'user': 'barney', 'active': false },
  //     { 'user': 'fred', 'active': false },
  //     { 'user': 'pebbles', 'active': true }
  //   ];

  //   return _.findIndex(users, function(o) { return o.user === 'fred'; });
  // }

  // mounted() {
  //   this.sayHello();
  //   console.log(this.useLodash());
  // }
};
</script>

<style lang="stylus">
@import '../styles/variables'

.hello
  color: $primary
</style>
