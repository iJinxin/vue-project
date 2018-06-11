<template>
    <div class="panel">
        <el-container>
            <el-header>
                <span class="panel-title">任务面板</span>
                <el-tag>未处理{{planings.length}}</el-tag>
                <el-tag>正在处理{{doings.length}}</el-tag>
                <el-tag>正在测试{{testings.length}}</el-tag>
                <el-tag>已完成{{dones.length}}</el-tag>
            </el-header>
            <el-main>
                <el-row gutter="20">
                    <el-col :span="6">
                        <template v-for="planing in planings">
                            <panel-task :taskStatus="plan"
                                        :taskData=planing></panel-task>
                        </template>
                    </el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    // import vm from '../common/vm.js';
    import panelTask from './panel-task.vue'

    export default {
        data(){
            return {
                planings: [],
                doings: [],
                testings: [],
                dones: []
            }
        },
        components: {
            panelTask
        },
        created() {
            this.getData();
        },
        methods: {
            add() {
                this.planings.push({
                    task: '新增的任务',
                    description: '新增任务的描述'
                })
            },
            getData() {
                this.planings = [
                    {
                        id: 1,
                        task: '创建panel面板',
                        createdTime: '2018-6-11',
                        description: 'second组建更替为panel组件，用于创建任务，查看任务进度'
                    },
                    {
                        id: 2,
                        task: '我是任务2',
                        createdTime: '2018-6-11',
                        description: '任务2做点什么好呢'
                    }
                ]
            }
        }
    }
</script>
<style>
    .panel .panel-title{
        font-size: 22px;
        padding: 12px;
    }
</style>