<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" ref="auth">
            <input-field v-for="(field, i) in fields" :key="i" :options="field">
              <label :for="field.name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                {{ field.name }}
              </label>
            </input-field>
            <button
              @click.prevent="singInUser"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="#"
                                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
              up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SignInPayload } from '@/types'
import InputField from '@/components/InputField.vue'
// import AuthService from '@/services/AuthService'

export default defineComponent({
  name: 'auth-view',
  components: { InputField },
  data: () => ({
    rules: {
      email: {
        required: true,
        max: 200
      },
      password: {
        required: true,
        max: 30
      }
    },
    fields: [
      {
        name: 'email',
        type: 'email',
        required: true,
        placeholder: 'name@company.com',
        class: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600' +
          'focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' +
          'dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        rules: ['email']
      },
      {
        name: 'password',
        type: 'password',
        required: true,
        placeholder: '••••••••',
        class: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600' +
          'focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' +
          'dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        rules: ['min:8', 'max:25']
      }
    ]
  }),
  methods: {
    singInUser() {
      const inputs = this.$refs.auth as Array<HTMLInputElement>

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('name')) {
          // console.log(inputs[i].name, this.rules.email)
        }
      }
    }
  }
})
</script>
