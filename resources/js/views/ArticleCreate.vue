<template>
    <div>
        <router-link to="/articles">
            <div class="text-right">
                <button class="btn btn-outline-info mt-2">Back to articles</button>
            </div>
        </router-link>
        <h2>Create Article</h2>
        <ArticleForm class="mt-3" action="create" :article="article"></ArticleForm>
    </div>
</template>

<script>
    import ArticleForm from '../components/ArticleForm';

    export default {
        data() {
            return {
                article: {
                    'attributes': {
                        'title': '',
                        'content': '',
                    }
                }
            }
        },
        components: {
            ArticleForm
        }
       
    }
</script>
