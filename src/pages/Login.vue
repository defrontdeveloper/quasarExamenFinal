<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-5">
        <q-card class="q-pa-md my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">LOGIN</div>
          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="email" label="Email"></q-input>
            <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn :loading="loading" size="md" color="primary" label="INGRESAR" class="full-width" @click="login"></q-btn>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue';
import { api } from 'boot/axios'
import { useRouter } from 'vue-router';

const $q = useQuasar()
const router = useRouter();

const email = ref('')
const password = ref('')
const loading = ref(false)

const login = () => {

  loading.value = true;
  const datos = {
    Email: email.value,   //flores@peru.com
    Password: password.value // 123456789
  }

  api.post('/userauthentications/login', datos)
    .then((response) => {
      if(response.status === 201) {
        router.push('/crear-usuarios');
      }
    })
    .catch((err) => {
      console.error(err)
    }).finally(() => {
      loading.value = false
    })
}
</script>

<style scoped>
.my_card {
  width: 25rem;
}
</style>
