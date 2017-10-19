<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
        <input type="button" value="-" @click="minHandle(5)">
            <span>{{num}}</span>
        <input type="button" value="+" @click="addHandle(2)">
    </div>
  </div>
</template>
<script>
    export default{
        // data(){
        //     return{
        //         // num:
        //         num:this.$store.state.num
        //     }
        // },
        computed:{
            num(){
              return  this.$store.state.num
            }
        },
        methods:{
            addHandle(num){
                // this.num += 5;
                // 通过这提交一个mutations，commit 里面提交的就是mutations 里面的函数名字
                this.$store.commit('AddIncrement',{n:num,name:'stark'})
            },
            minHandle(num){
                // this.num -= 5;
                // this.$store.commit('MinIncrement',num)
                this.$store.commit('MinIncrement',{n:num,name:'stark'})

            }

        }
    }
</script>