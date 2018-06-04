<template>
    <div>
        <p>days:{{beMyGirl}}</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                beMyGirl: 1
            }
        },
        methods: {
            getMyGirlDays() {
                const aDay = 24*3600*1000; // 一天的毫秒数
                // 月份为0-11
                //let start = new Date(2018, 1, 22).getTime();
                let start = Date.parse('2018-2-22');
                let now = new Date().getTime();

                this.beMyGirl = Math.ceil((now - start) / (aDay));
            }
        },
        created: function () {
            this.getMyGirlDays();
        }
    }
</script>
