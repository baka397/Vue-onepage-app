<template>
    <table class="table">
        <thead v-if="title.length>0">
            <tr>
                <th v-for="(item, index) in title" :key="index">{{item}}</th>
            </tr>
        </thead>
        <tbody v-if="datas.length>0">
            <tr v-for="(dataArray, dataIndex) in datas" :key="dataIndex">
                <td v-for="(dataArrayItem,dataArrayIndex) in dataArray" :key="dataArrayIndex">{{dataArrayItem}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    module.exports = {
        props: {
            'title':{
                type: Array,
                required: true
            },
            'datas':{
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>
.table{
    border: solid #F2F2F2;
    border-width: 1px 1px 0 0;
}
.table td,.table th{
    padding: 5px 10px;
    border: solid #F2F2F2;
    border-width: 0 0 1px 1px;
}
</style>