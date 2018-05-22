<template>
    <aside>
        <el-menu class="sidebar-el-menu">
            <ul>
                <li v-for="item in items"></li>
            </ul>
        </el-menu>
    </aside>
</template>
<style type="text/css">
    aside{
        position: absolute;
        display: block;
        left: 0;
        top: 60px;
        bottom: 0;

        width: 250px;
    }
    aside > ul{
        height: 100%;
        list-style: none;
    }
</style>
<script>
    
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        route: 'some-page',
                        title: 'somePage'
                    }
                ]
            }
        }
    }
</script>