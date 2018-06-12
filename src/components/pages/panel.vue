<template>
    <div class="panel">
        <el-container>
            <el-header style="height: 40px;line-height: 40px">
                <span class="panel-title">任务面板</span>
                <el-tag>未处理{{planings.length}}</el-tag>
                <el-tag>正在处理{{doings.length}}</el-tag>
            </el-header>
            <el-main>
                <el-row gutter="20">
                    <el-col :span="12" shadow="hover">
                        <el-card>
                            <div slot="header" class="clearfix">
                                <span>待办任务</span>
                                <el-button type="text" style="float: right; padding: 5px 0">添加</el-button>
                            </div>
                            <el-table :data="planings" :show-header="false" style="width: 100%;font-size: 14px">
                                <el-table-column width="40">
                                    <template slot-scope="scope">
                                        <el-checkbox v-model="scope.value"></el-checkbox>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="task"></el-table-column>
                                <el-table-column width="60">
                                    <template slot-scope="scope">
                                        <i class="el-icon-edit" @click="doEdit(scope.$index, true)"></i>
                                        <i class="el-icon-delete" @click="doDelete(scope.$index, true)"></i>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-card>
                    </el-col>
                    <el-col :span="12" shadow="hover">
                        <el-card>
                            <div slot="header" class="clearfix">
                                <span>进行中</span>
                            </div>
                            <el-table :data="doings" :show-header="false" style="font-size: 14px">
                                <el-table-column width="40">
                                    <template slot-scope="scope">
                                        <el-checkbox v-model="scope.value"></el-checkbox>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="task"></el-table-column>
                                <el-table-column width="60">
                                    <template slot-scope="scope">
                                        <i class="el-icon-edit" @click="doEdit(scope.$index, false)"></i>
                                        <i class="el-icon-delete" @click="doDelete(scope.$index, false)"></i>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-card>
                    </el-col>

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
                ];
                this.doings = [
                    {
                        id: 3,
                        task: '正在处理。。。',
                        createdTime: '2018-6-11',
                        description: '啊啊啊，任务啊'
                    },
                ]
            },
            doEdit(index, isPlaning) {
                console.log(index);
            },
            doDelete(index, isPlaning) {
                console.log(111);
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