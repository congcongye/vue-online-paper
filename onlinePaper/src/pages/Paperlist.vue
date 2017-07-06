<template>
  <div>
    <myheader></myheader>
    <div>

    </div>
  </div>
</template>

<script>

  import Header from '../components/Header.vue'

  export default{
    data: function() {
      return {
        paperitems: [ {title: "my paper 1",time: "2017-07-10",state: 1},{title: "my paper 2",time: "2017-07-11",state: 0}]
      }
    },
     components: {
          myheader:Header
//          mybutton:Button,
//          mycheckbox:Checkbox
     },
    methods: {
      checkedAll: function () {

      }
    }
  }
</script>

<style>

</style>
