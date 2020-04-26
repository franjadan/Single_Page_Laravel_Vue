<template>
    <div>
        <div class="text-right">
            <router-link class="btn btn-outline-info mt-2" to="/articles"> Back to articles</router-link>
        </div>
        <h2>Update Article</h2>
        <ArticleForm class="mt-3" action="edit" :article="article"></ArticleForm>
    </div>
</template>

<script>
    import ArticleForm from '../components/ArticleForm';

    export default {
        data() {
            return {
                article: {}
            }
        },

        created() {
            this.fetch();
        },

        components: {
            ArticleForm
        },

        methods: {
            fetch() {
                axios.get(`/api/articles/${this.$route.params.slug}`)
                    .then(response => {
                        this.article = response.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
       
    }
</script>
