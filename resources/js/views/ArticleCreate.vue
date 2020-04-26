<template>
    <div>
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
