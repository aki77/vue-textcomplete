# vue-textcomplete

## Install

```
yarn add @aki77/vue-textcomplete
```

## Usage

```
<template>
  <TextComplete :strategies="strategies" :options="options">
    <textarea v-model="text" rows="20"></textarea>
  </TextComplete>
</template>

<script lang="ts">
import Vue from 'vue'
import TextComplete, { StrategyProps, TextcompleteOption } from '@aki77/vue-textcomplete'
import { EMOJI_STRATEGY } from './strategy'

type State = {
  text: string
}

export default Vue.extend({
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
    options(): TextcompleteOption {
      return {}
    }
  },
})
</script>

<style lang="scss">
@import '@aki77/vue-textcomplete/scss/default';
</style>

```
