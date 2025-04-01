import MainLayout from 'src/layouts/MainLayout.vue'
import PageUno from 'src/pages/PageUno.vue'
import PageDos from 'src/pages/PageDos.vue'
import PageTres from 'src/pages/PageTres.vue'
import UserDetail from 'src/pages/userDetail.vue' 

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: PageUno },
      { path: 'page2', component: PageDos },
      { path: 'page3', component: PageTres },
      { path: 'user/:id', component: UserDetail }  // Utilizamos ruta dinamica para el detalle del Usuario
    ]
  }
]

export default routes
