<template>
    <div>
        <div class="row justify-content-md-center">
            <div class="card mx-2 my-2" style="width: 18rem;" v-for="article of articles" :key="article.id">
                <img class="card-img-top" :src="article.attributes.picture" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ article.attributes.title }}</h5>
                    <p class="card-text">{{ article.attributes.description }}</p>
                </div>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-center list-group">
            <button v-for="page in pagination.last_page" :key="page" @click="doPagination(page)" class="btn btn-white my-2 mx-2 list-group-item">{{ page }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articles: [],
                pagination: {}
            }
        },
        created(){
           this.fetchArticles();
       },

       methods: {
           fetchArticles(endPoint = '/api/articles') {
                axios.get(endPoint)
                    .then(response => {
                        this.articles = response.data.data;
                        this.makePagination({ ...response.data.meta, ...response.data.links });
                        console.log(this.articles);
                    })
                    .catch(err => {
                        console.log(err);
                    });
           },

           makePagination(data) {
               this.pagination = data;
           },

           doPagination(page) {
               this.fetchArticles(`/api/articles?page=${page}`)
           }
       }
    }
</script>
