<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
        <input type="button" value="-" @click="minHandle">
            <span>{{num}}</span>
        <input type="button" value="+" @click="addHandle">
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                num:100
            }
        },
        methods:{
            minHandle(){
                this.num -= 5;
            },
            addHandle(){
                this.num += 5;
            }
        }
    }
</script>