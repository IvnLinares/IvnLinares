import { createApp } from 'vue';
import HomeView from './views/HomeView.js';
import AboutView from './views/AboutView.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

const app = createApp({
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            currentView: 'HomeView'
        };
    },
    computed: {
        ViewComponent() {
            return this.currentView === 'HomeView' ? HomeView : AboutView;
        }
    },
    template: `
        <div>
            <NavBar />
            <component :is="ViewComponent"></component>
            <Footer />
        </div>
    `
});

app.mount('#vue-app');
