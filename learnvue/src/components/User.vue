<template>
    <div>
        <router-link :to="'/user/' + item.id" v-for="(item,index) in userList" :key="index">{{item.username}} </router-link>
        <div>
                <p> 姓名：{{userInfo.username}}</p>
                <p> 爱好：{{userInfo.hobby}}</p>
                <p> 性别：{{userInfo.sex}}</p>
        </div>
    </div>
</template> 

<script>
    let data = [
        {
            id:1,
            tip:'vip',
            username:'luchang',
            sex:'男',
            hobby:'coding'
        },
        {
            id:2,
            tip:'vip',
            username:'guomian',
            sex:'男',
            hobby:'女'
        },
        {
            id:3,
            tip:'common',
            username:'zhangming',
            sex:'男',
            hobby:'bug'
        },
    ]
    export default{
        data(){
            return{
                userList:data,
                userInfo:''
            }
        },
        watch:{
            $route(){
                this.getData();
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                // let id = this.$route;
                // console.log(this.$route);

                // 思路：
                // 在浏览器输入id
                // 然后在页面中显示不同的数据

                // 在路由里面写 userId 
                // 怎么获取浏览器的id参数
                let id = this.$route.params.userId;


                // 判断id如果存在
                if(id){
                    // this.userInfo //这个是访问vue data 里面的数据

                    // this.userList // 这个是vue data obj

                    // this.userInfo 单条数据

                    // 有需求，当我们输入一个id 的时候，需要一个单个的用户数据

                    this.userInfo = this.userList.filter((item)=>{
                        console.log(item); //此时相当于一把沙子还未过滤
                        return item.id == id  // 当一个item 就是一个沙子粒 满足了筛选条件就把它留下
                        // return item.id == id;
                    })[0]
                    // var userinfo
                    // foreach(item){
                    //     if (item.id == id) {
                    //         userinfo = item
                    //     }
                    // }

                    // console.log(userinfo);
                }
                console.log(this.userInfo);
                // console.log(this.$route.params.stark);
            }
        }
    }
</script> 