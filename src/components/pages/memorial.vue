<template>
    <div>
        <p>{{days}}</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                days: 1
            }
        },
        methods: {
            getDays() {
                let start = (new Date(2018, 2, 22, 0, 0, 0)).getTime();
                let now = Date.now();
                this.days = Math.floor((now - start)/(24 * 3600 * 1000));
            }
        },
        render: function (el) {
            let start = (new Date(2018, 2, 22, 0, 0, 0)).getTime();
            let now = Date.now();
            this.days = Math.floor((now - start)/(24 * 3600 * 1000));
        }
    }
</script>
