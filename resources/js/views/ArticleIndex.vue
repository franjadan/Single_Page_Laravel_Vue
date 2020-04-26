<template>
    <div>
        <router-link to="/articles/create">
            <div class="text-right">
                <button class="btn btn-primary mb-3">Create Article</button>
            </div>
        </router-link>
        <ArticleList v-bind:endpoint="endpoint"></ArticleList>
    </div>
</template>

<script>
    import ArticleList from '../components/ArticleList';

    export default {
        data() {
            return {
                endpoint: "/api/articles"
            }
        },

        components: {
            ArticleList
        },
    }
</script>
