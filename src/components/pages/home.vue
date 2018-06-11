<template>
    <div class="main">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-container" :class="{'content-collapse':collapse}">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from '../common/header.vue';
    import vSidebar from '../common/sidebar.vue';
    import vm from '../common/vm.js'

    export default {
        data(){
            return {
                collapse: false
            }
        },
        components: {
            vHead, vSidebar
        },
        created(){
            vm.$on('collapse', data => {
                this.collapse = data;
            })
        }
    }
</script>

<style>
    .content-container{
        margin-left: 250px;
        transition: margin-left .3s ease-in-out;
        -webkit-transition: margin-left .3s ease-in-out;
    }
    .content-container.content-collapse{
        margin-left: 65px;
    }
    .content-container .content{
        padding: 15px;
    }

</style>