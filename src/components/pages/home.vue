<template>
    <div class="main">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vHead from '../common/header.vue';
    import vSidebar from '../common/sidebar.vue';

    export default {
        data(){

        },
        components: {
            vHead, vSidebar
        },
        created(){

        }
    }
</script>