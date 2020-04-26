import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './views/HomeComponent.vue';
import AboutComponent from './views/AboutComponent.vue';
import NotFound from './views/NotFound.vue';
import ArticleIndex from './views/ArticleIndex.vue';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', //Quitar /#/ de la url
    routes: [
        { path: '/home', component: HomeComponent },
        { path: '/about', component: AboutComponent },
        { path: "*", component: NotFound },
        { path: '/articles', component: ArticleIndex }
    ]
});