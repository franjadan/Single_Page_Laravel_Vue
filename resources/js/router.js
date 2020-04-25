import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', //Quitar /#/ de la url
    routes: [
        { path: '/home', component: HomeComponent },
        { path: '/about', component: AboutComponent }
    ]
});