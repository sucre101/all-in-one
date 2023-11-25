<template>
  <ResponsiveTable v-if="tasks.length" :list="tasks" class="mt-5 mx-2" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/lib/requests'
import ResponsiveTable from '@/components/ResponsiveTable.vue'

export type Task = {
  id: number
  user_id: number
  title: string
  description: string
}

export default defineComponent({
  name: 'TaskList',
  components: { ResponsiveTable },
  data() {
    return {
      tasks: [] as Task[],
    }
  },
  created() {
    api.get('/tasks').then((res) => (this.tasks = [...res.data]))
  },
})
</script>
