<script lang="ts">
import Vue, { VNode, PropType } from 'vue'
import {
  Textcomplete,
  StrategyProps,
  TextcompleteOption,
} from '@textcomplete/core'
import { TextareaEditor } from '@textcomplete/textarea'

type State = {
  textcomplete?: Textcomplete
}

export default Vue.extend({
  props: {
    strategies: {
      type: Array as PropType<StrategyProps[]>,
      default: () => [] as StrategyProps[],
    },
    options: {
      type: Object as PropType<TextcompleteOption>,
      default: (): TextcompleteOption => ({}),
    },
  },
  data(): State {
    return {
      textcomplete: undefined,
    }
  },
  beforeDestroy(): void {
    this.destroy()
  },
  mounted(): void {
    this.init()
  },
  methods: {
    init(): void {
      const editor = new TextareaEditor(this.$el as HTMLTextAreaElement)
      const textcomplete = new Textcomplete(editor, this.strategies, {
        ...this.options,
        dropdown: {
          maxCount: 200,
          ...this.options.dropdown,
        },
      })

      this.textcomplete = textcomplete
    },
    destroy(): void {
      if (this.textcomplete) {
        this.textcomplete.destroy()
        this.textcomplete = undefined
      }
    },
  },
  render(): VNode {
    return (this.$scopedSlots as any).default({})[0]
  },
})
</script>

<style>
.textcomplete-dropdown {
  border: 1px solid #ddd;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: scroll;
}
.textcomplete-dropdown li {
  margin: 0;
}
.textcomplete-footer,
.textcomplete-item {
  border-top: 1px solid #ddd;
}
.textcomplete-item {
  padding: 2px 5px;
  cursor: pointer;
}

.textcomplete-item img {
  height: 1rem;
  margin-bottom: 0;
  vertical-align: middle;
}

.textcomplete-item:hover,
.textcomplete-item.active {
  background-color: rgb(110, 183, 219);
}
</style>
