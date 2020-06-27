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
