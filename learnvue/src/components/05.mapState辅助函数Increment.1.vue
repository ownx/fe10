<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
        <input type="button" value="-" @click="minHandle(5)">
            <span>{{num}}</span>
        <input type="button" value="+" @click="addHandle(2)">
            {{name}},{{age}},
            {{num2}}
    </div>
  </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default{
        // data(){
        //     return{
        //         // num:
        //         num:this.$store.state.num
        //     }
        // },
        // computed:{
        //     num(){
        //       return  this.$store.state.num
        //     },
        //     num2(){
        //         // return this.num > 130 ? 130 : this.num;
        //         return this.$store.getters.count; 
        //     }
        // },
        // 使用方式1：
        // computed:mapState(['num','name','age']),
        // 使用方式2：
        // computed:mapState({
        //     // num:state=> state.num, //写法1
        //     // num:'num' // 写法2
        //     num(state){
        //         return state.num + 100;
        //     }
        // }),
        // 使用方式3：
        computed:{
            ...mapState({
                 num(){
                     return this.$store.state.num
                 },
                 name(){
                     return this.$store.state.name
                 },
                 age(){
                     return this.$store.state.age
                 }
            }),
            num2(){
                return this.$store.getters.count
            }
        },
        methods:{
            addHandle(num){
                // this.num += 5;
                // 通过这提交一个mutations，commit 里面提交的第一个参数就是mutations 里面的函数名字
                // this.$store.commit('AddIncrement',{n:num,name:'stark'})
                
                // this.$store.commit({
                //     type:'AddIncrement',
                //     num:5,
                //     name:'stark'
                // })

                this.$store.dispatch('addAction');
            },
            minHandle(num){
                // this.num -= 5;
                // this.$store.commit('MinIncrement',num)
                this.$store.commit('MinIncrement',{n:num,name:'stark'})

            }

        }
    }
</script>