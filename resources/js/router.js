import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './views/HomeComponent.vue';
import AboutComponent from './views/AboutComponent.vue';
import NotFound from './views/NotFound.vue';
import ArticleIndex from './views/ArticleIndex.vue';
import MyArticles from './views/MyArticles.vue';
import ArticleShow from './views/ArticleShow.vue';
import ArticleCreate from './views/ArticleCreate.vue';
import ArticleEdit from './views/ArticleEdit.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', //Quitar /#/ de la url
    routes: [
        { path: '/home', component: HomeComponent },
        { path: '/about', component: AboutComponent },
        { path: '/articles', component: ArticleIndex },
        { path: '/my_articles', component: MyArticles },
        { path: '/articles/create', component: ArticleCreate },
        { path: '/articles/:slug/edit', component: ArticleEdit, name: 'edit' },
        { path: '/articles/:slug', component: ArticleShow, name:'show' },
        { path: "*", component: NotFound },
        
    ]
});