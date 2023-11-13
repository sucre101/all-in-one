<template>
  <div>Тут будет таблица</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResponsiveTable',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
})
</script>
