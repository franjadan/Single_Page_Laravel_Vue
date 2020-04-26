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
       }
    }
</script>
