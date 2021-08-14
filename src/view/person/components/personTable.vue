<template>
    <!-- 这是table组件 -->
  <div>
     <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="cost"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="personName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="wxOpenId"
        label="地址">
      </el-table-column>
    </el-table>
    <button @click="sonFather()">点击</button>
  </div>
</template>

<script>
export default {
  name: "",
  props:["list"],
  data() {
    return {
        //  tableData: [{
        //     date: '2016-05-02',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1518 弄'
        //   }, {
        //     date: '2016-05-04',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1517 弄'
        //   }, {
        //     date: '2016-05-01',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1519 弄'
        //   }, {
        //     date: '2016-05-03',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1516 弄'
        //   }]
    };
  },
  methods: {
      sonFather() {
          this.$emit("father","nnnn")
      }
  }
};
</script>

<style  scoped>
</style>