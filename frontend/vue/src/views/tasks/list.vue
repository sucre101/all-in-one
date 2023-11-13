<template>
  <ResponsiveTable :list="[]" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/lib/requests'
import ResponsiveTable from '@/components/ResponsiveTable.vue'

export default defineComponent({
  name: 'TaskList',
  components: { ResponsiveTable },
  mounted() {
    api
      .get('/tasks')
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  },
})
</script>
