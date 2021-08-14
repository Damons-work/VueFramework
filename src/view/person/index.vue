<template>
  <div>
    {{fatherss}}
    <PersonTable :list="personList" @father="father"></PersonTable>
  </div>
</template>

<script>
import {personList,get} from "../../api/index"
import PersonTable from "./components/personTable.vue"
export default {
  name: "",
  data() {
    return {
      personList:[],
      fatherss:""
    };
  },
  mounted() {
    this.getList();
  },
  components:{
    PersonTable
  },
  methods: {
    getList() {
      let data = {
        id : 2
      }
      get(data).then(res=>{
        console.log(res)
      })

      personList().then(res=>{
        console.log(res.data.data.list)
        this.personList = res.data.data.list
      })
    },
    father(e)  {
      console.log(e)
      this.fatherss = e
      this.$router.push({
        path:"student",
        query:{
          user : "xxxx"
        }
      })
    }
  }
};
</script>

<style  scoped>
</style>