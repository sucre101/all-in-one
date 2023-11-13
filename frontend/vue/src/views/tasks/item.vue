<template>
  <div>Task items</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TaskItem',
  mounted() {
    console.log(this.$route)
  },
})
</script>
