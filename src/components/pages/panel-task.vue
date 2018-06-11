<template>
    <div class="panel-task">
        <title>
            <span class="num">num-{{id}}</span>
            <span class="created-time">{{createdTime}}</span>
        </title>
        <h4>{{task}}</h4>
        <p>{{description}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                status : this.taskStatus,
                id: this.taskData.id,
                task: this.taskData.task,
                createdTime: this.taskData.createdTime,
                description: this.taskData.description
            }
        },
        props: {
            taskStatus: String,
            taskData: [Array, Object]
        },
        created() {
            console.log(this.taskData);
        },
        methods: {

        }
    }
</script>