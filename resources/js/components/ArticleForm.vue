<template>
    <div>
        <form @submit.prevent="submitForm">
            <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
                <ul>
                    <li v-for="e of errors" :key="e">{{ e }}</li>
                </ul>
            </div>
            <div class="form-group">
                <label for="inputTitle">Título*</label>
                <input v-model="article.attributes.title" type="text" class="form-control" id="inputTitle" name="title" value="">
            </div>
            <div class="form-group">
                <label for="inputContent">Título*</label>
                <textarea v-model="article.attributes.content" class="form-control" id="inputContent" name="content"></textarea>
            </div>
            <div>
                <button type="submit" class="btn btn-success">{{ buttonTitle }}</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: ['action', 'article'],
        data() {
           return {
               errors: []
           }
        },

        methods: {
            submitForm() {
                if(this.action === 'create')
                    this.createArticle();
                else
                    this.updateArticle();
            },

            createArticle() {
                this.article.attributes.thumbnail = "https://picsum.photos/250/200";
                axios.post('/api/articles', this.article.attributes)
                    .then(response => {
                        let slug = response.data.slug;
                        this.$router.push({ name: 'show', params: {slug} });
                    })
                    .catch(err => {
                        if(err.response.status === 422)
                            this.getErrors(err.response.data.errors);
                        console.log(err.response);
                    });
            },

            updateArticle() {
                this.article.attributes.thumbnail = "https://picsum.photos/250/200";
                axios.put(`/api/articles/${this.article.slug}`, this.article.attributes)
                    .then(response => {
                        let slug = response.data.data.slug;
                        this.$router.push({ name: 'show', params: {slug} });
                    })
                    .catch(err => {
                        if(err.response.status === 422)
                            this.getErrors(err.response.data.errors);
                        console.log(err.response);
                    });
            },

            getErrors(errors) {
                this.errors = [];
                Object.values(errors).forEach(value => {
                    this.errors.push(value[0]);
                });
            }
        },

        computed: {
            buttonTitle() {
                return this.action === 'create' ? "Create" : "Update";
            }
        }
    }
</script>
