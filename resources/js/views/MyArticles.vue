<template>
    <div>
        <div class="text-right">
            <router-link class="btn btn-primary mb-3" to="/articles/create">Create Article</router-link>
        </div>
        <ArticleList v-bind:endpoint="endpoint"></ArticleList>
    </div>
</template>

<script>
    import ArticleList from '../components/ArticleList';

    export default {
        data() {
            return {
                endpoint: "/api/my_articles"
            }
        },

        components: {
            ArticleList
        }
       
    }
</script>
