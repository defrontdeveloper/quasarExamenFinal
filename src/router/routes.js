
const routes = [
  { path: '', component: () => import('pages/Login.vue') },


  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inicio', component: () => import('pages/Inicio.vue') },
      { path: '/crear-usuarios', component: () => import('pages/Crear-Usuarios.vue') },
      { path: '/usuarios', component: () => import('pages/Usuarios.vue') },
    ]
  },



  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
