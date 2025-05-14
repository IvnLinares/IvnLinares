import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import DevelopmentView from './views/development/DevelopmentView.vue';
import PortfolioView from './views/portfolio/PortfolioView.vue';
import ScoutsView from './views/scouts/ScoutsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/development', component: DevelopmentView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/scouts', component: ScoutsView }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
