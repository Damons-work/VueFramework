<template>
  <div>
      {{user}}
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      user:""
    };
  },
  mounted(){
this.getCode()
  },
  methods: {
    getCode() {
     this.user =  this.$route.query 
    }
  }
};
</script>

<style  scoped>
</style>