<template>
  <div>This is header</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopNavigation'
})
</script>

<style lang="scss" scoped>
  div {
    width: 100%;
    height: 70px;
    display: flex;
    background: #a3a3a3;
  }
</style>
