<template>
  <TextComplete
    :strategies="strategies"
    :options="{ dropdown: { placement: 'bottom' } }"
  >
    <textarea v-model="text" rows="20" :style="{ width: '90%' }"></textarea>
  </TextComplete>
</template>

<script lang="ts">
import Vue from 'vue'
import { StrategyProps } from '@textcomplete/core'
import TextComplete from '../TextComplete.vue'
import { EMOJI_STRATEGY } from './strategy'

type State = {
  text: string
}

export default Vue.extend({
  name: 'VueTextcompleteSample', // vue component name
  components: { TextComplete },
  data(): State {
    return {
      text: '',
    }
  },
  computed: {
    strategies(): StrategyProps<[string, string]>[] {
      return [EMOJI_STRATEGY]
    },
  },
})
</script>

<style lang="scss">
@import '../scss/default';
</style>
