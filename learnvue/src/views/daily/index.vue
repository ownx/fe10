<template>
    <div>
        <div v-for="(item,index) in stories" :key="index">
            <div>名字：{{item.title}}</div>
            <div>描述：{{item.ga_prefix}}</div>
            <div>图片：<img :src="getImage(item.images)" :alt="item.title"></div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';

    export default {
        data(){
            return{
                stories:{}
            }
        },
        created(){
            this.getHttpHero()
        },
        methods:{
            getHero(){
                // https://news-at.zhihu.com/api/4/news/latest
                // axios.get('http://hero.shudong.wang/v1/db.php')
                axios.get('/api/news/latest')
                .then(res=>{
                    this.stories = res.data.stories;
                })
            },
            getHttpHero(){
                // https://news-at.zhihu.com/api/4/news/latest
                // axios.get('http://hero.shudong.wang/v1/db.php')
                this.$http.get('/api/news/latest')
                .then(res=>{
                    this.stories = res.data.stories;
                })
            },
            getImage(url){
                console.log(url);
                // 把现在的图片连接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
            }
        }
    }
</script>

