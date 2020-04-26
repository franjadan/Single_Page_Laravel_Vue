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

            if(config.method === "get") {

                //Para comprobar si hay parámetros en la url
                if(config.url.match('/\?./')) {
                    let url = config.url.split("?");
                    let page = url[1];
                    url = url[0];

                    config.url = `${url}?api_token=${this.user.api_token}&${page}`

                    return config;
                }

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
