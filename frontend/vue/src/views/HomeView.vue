<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AuthService from '@/services/AuthService'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  async created() {
    const client = await AuthService.signIn({ email: 'vaniulen@mail.ru', password: 'qwe123' })
    console.log(client)
  }
})
</script>
