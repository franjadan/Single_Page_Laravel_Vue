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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articles: []
            }
        },
        created(){
           console.log("created");
           this.fetchArticles();
       },

       methods: {
           fetchArticles() {
                axios.get(`/api/articles?api_token=${window.token}`)
                    .then(response => {
                        this.articles = response.data.data;
                        console.log(this.articles);
                    })
                    .catch(err => {
                        console.log(err);
                    });
           }
       }
    }
</script>
