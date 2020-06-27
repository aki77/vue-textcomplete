<script lang="ts">
import Vue from 'vue'
import { VueTextcompleteSample } from '@/lib-components'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueTextcompleteSample,
  },
})
</script>

<template>
  <div id="app">
    <vue-textcomplete-sample />
  </div>
</template>
