import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/socials',
      name: 'socials',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SocialsView.vue')
    }
  ]
})

router.afterEach((to, from) => {
  console.log('Navigated to:', to.path);
  // EventHandler.emit('routeChanged', { from: from.path, to: to.path });
  function handleHash() {
    let hash = window.location.hash;

    // Check if the hash is not empty
    if (hash && hash.substring(3) != "") {
      // Remove the '#' character to get just the ID
      let id = hash.substring(3);
      console.log(id);
      let elm = document.getElementById(id);
      if (elm) {
        elm.scrollIntoView();
      }
      
    } else {
      window.scrollTo(0, 0);
    }

    
}
  setTimeout(() => {
    handleHash();
  }, 30);
  
  

  // router.app.config.globalProperties.$emitGlobalEvent({ from: from.path, to: to.path });
});

export default router
