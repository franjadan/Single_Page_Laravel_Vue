<template>
    <div>
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
