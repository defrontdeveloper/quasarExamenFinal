<template>
  <div class="q-pa-md row items-start q-gutter-md my-box">
    <h6>Lista de actividades</h6>
    <q-card class="my-card" v-for="(actividad, key) in actividades" :key="key">
      <q-card-section>
        <div class="card">
          <span>Código: <b>{{ actividad.ShortCode }}</b></span>
          <span>{{ actividad.Description }}</span>
          <span>Tipo: {{ actividad.Status }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios'

const actividades = ref([])

const getActividades = () => {
  api.get('/activity/getAll')
    .then((response) => {
      actividades.value = response.data
    })
    .catch((err) => {
      console.error(err)
    })
}

getActividades()
</script>

<style lang="scss" scoped>
.my-box {
  display: flex;
  flex-direction: column;
  h6 {
    margin-bottom: 8px;
  }
}
.card {
  display: flex;
  flex-direction: column;
}
</style>
