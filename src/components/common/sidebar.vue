<template>
    <aside>
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.index">
                            {{subItem.title}}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </aside>
</template>

<script>
    import vm from '../common/vm.js';
    export default {
        data(){
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'first',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'second',
                        title: '第二个'
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'explain',
                        title: '说明'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/', '');
            }
        },
        created(){
            vm.$on('collapse', data => {
                this.collapse = data;
            })
        }
    }

</script>

<style type="text/css">
    aside{
        position: absolute;
        display: block;
        left: 0;
        top: 60px;
        bottom: 0;

    }
    aside > ul{
        height: 100%;
    }
    aside > ul > li{
        font-size: 14px;
        color: #303133;
        padding: 0 20px;
        cursor: pointer;

        height: 56px;
        line-height: 56px;
        position: relative;
        -webkit-box-sizing: border-box;
        white-space: nowrap;
        list-style: none;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
</style>