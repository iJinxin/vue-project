<template>
    <aside class="sidebar">
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
                            <i :class="subItem.icon"></i>
                            <span slot="title">{{subItem.title}}</span>
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
                        index: 'plan',
                        title: 'plan',
                        subs: [
                            {
                                icon: 'el-icon-date',
                                index: 'panel',
                                title: '面板'
                            },
                            {
                                icon: 'el-icon-document',
                                index: 'history',
                                title: '历史'
                            }
                        ]
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
    .sidebar{
        position: absolute;
        display: block;
        left: 0;
        top: 60px;
        bottom: 0;

    }
    .sidebar > ul{
        height: 100%;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
</style>