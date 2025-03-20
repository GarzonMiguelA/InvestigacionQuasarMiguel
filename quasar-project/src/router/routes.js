
import MainLayout from 'src/layouts/MainLayout.vue'
import PageUno from 'src/pages/PageUno.vue'
import PageDos from 'src/pages/PageDos.vue'
import PageTres from 'src/pages/PageTres.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: PageUno },
      { path: 'page2', component: PageDos },
      { path: 'page3', component: PageTres }
    ]
  }
]

export default routes
