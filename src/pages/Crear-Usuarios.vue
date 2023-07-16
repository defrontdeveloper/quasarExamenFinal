<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div>
      <h6>Registrar usuarios</h6>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input dense outlined v-model="FirstName" label="Primer nombre" />
        <q-input dense outlined v-model="MiddleName" label="Segundo nombre" />
        <q-input dense outlined v-model="LastName" label="Apellidos" />


        <q-input dense outlined v-model="date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>


        <q-input dense outlined v-model="Email" label="Email" />
        <q-input dense outlined v-model="Country" label="Pais" />
        <q-input dense outlined v-model="Phone" label="Telefono" />
        <q-input dense outlined type="password" v-model="Password" label="Contraseña" />

        <div>
          <q-btn :loading="loading" label="Guardar" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios'
import { useRouter } from 'vue-router';

const loading = ref(false)

const FirstName = ref('')
const MiddleName = ref('')
const LastName = ref('')
const date = ref('2023-07-15')
const Email = ref('')
const Country = ref('')
const Phone = ref('')
const Password = ref('')

const onSubmit = () => {
  loading.value = true;
  const datos = {
    FirstName: FirstName.value,
    MiddleName: MiddleName.value,
    LastName: LastName.value,
    DateOfBirth: date.value,
    Email: Email.value,
    Country: Country.value,
    Phone: Phone.value,
    Password: Password.value
  }

  api.post('/users/create', datos)
    .then((response) => {
      alert("Usuario creado con éxito")
      clean()
    })
    .catch((err) => {
      console.error(err)
    }).finally(() => {
      loading.value = false
    })
}

const clean = () => {
  FirstName.value = ''
  MiddleName.value = ''
  LastName.value = ''
  Email.value = ''
  Country.value = ''
  Phone.value = ''
  Password.value = ''
}
</script>
