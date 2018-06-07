<template>
    <div class="main">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-container" :class="{'content-collapse':collapse}">
            <router-view></router-view>
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