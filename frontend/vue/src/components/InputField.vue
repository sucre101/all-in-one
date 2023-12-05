<template>
  <slot />
  <input :type="options.type" :name="options.name"
         :class="options.class"
         :placeholder="options.placeholder" @change="validate" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AuthUserFieldOptions } from '@/types/user'

export default defineComponent({
  name: 'input-field',
  props: {
    options: {
      type: Object as PropType<AuthUserFieldOptions>,
      required: true
    }
  },
  methods: {
    validate(value: Event) {
      const current = value.target as HTMLInputElement

      if (this.options.rules) {
        this.options.rules.forEach((rule) => {
          if (rule === 'email') {
            // const result: boolean = re.test(current.value)
            //
            // if (!result) {
            //   console.log('Error email validation')
            // }
          }
        })
      }
    }
  }
})
</script>
