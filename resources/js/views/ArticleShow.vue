<template>
    <div>
        <h1>{{ attributes.title }}</h1>
        <p class="mt-3">{{ attributes.description }}</p>
        <p class="small">{{ attributes.created_at}}</p>
        <div v-if="can()">
            <button @click="edit" class="btn btn-warning">Editar</button>
            <button @click="destroy" class="btn btn-danger">Eliminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: {},
                attributes: {}
            }
        },

        created() {
           this.fetch();
        },

       methods: {
           fetch() {
               axios.get(`/api/articles/${this.$route.params.slug}`)
               .then(response => {
                    this.article = response.data;
                    this.attributes = response.data.attributes;
                })
                .catch(err => {
                    console.log(err);
                });
           },

           edit() {

           },

           destroy() {
            axios.delete(`/api/articles/${this.article.slug}`)
            .then(response => {
                   this.$router.push({ path:'/my_articles' })
                })
                .catch(err => {
                    console.log(err);
                });
           },

           can() {
               return this.article.user_id == window.id;
           }
       }
    }
</script>
