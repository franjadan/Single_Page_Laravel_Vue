<template>
    <div>
        <h1>{{ attributes.title }}</h1>
        <p class="mt-3">{{ attributes.description }}</p>
        <p class="small">{{ attributes.created_at}}</p>
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
           }
       }
    }
</script>
