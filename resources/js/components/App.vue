<template>
    <div class="container">
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
       props: ['user'],

       created() {
           window.token = this.user.api_token;

           axios.interceptors.request.use((config) => {
            console.log(config);

            if(config.method === "get"){
                config.url = config.url + "?api_token=" + this.user.api_token;
            } else {
                config.data = {
                    ...config.data,
                    api_token: this.user.api_token
                };
            }

            return config;
           });
       }
    }
</script>
