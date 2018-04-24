<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import store from '../vuex/store';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  store,
  computed: {
    ...mapState(['msg']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([])
  },
  created() {
    this.hello(); // mixins
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"

  .hello
    color: $primary
</style>
