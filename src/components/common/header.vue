<template>
    <header class="header">
        <el-button type="text" class="collapse-btn" @click="doCollapse">
            <i class="el-icon-menu"></i>
        </el-button>
    </header>
</template>
<style>
    .header{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        top: 0;
        background: #2b3643;
    }
    .header .collapse-btn{
        height: 100%;
        padding: 0 20px;
    }
    .header .collapse-btn i{
        font-size: 26px;
    }
</style>

<script>
    import vm from '../common/vm';
    export default {
        data() {
            return {
                collapse: false
            }
        },
        methods: {
            doCollapse() {
                this.collapse = !this.collapse;
                vm.$emit('collapse', this.collapse);
            }
        }
    }
</script>