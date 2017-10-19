<template>
    <div>
        <div v-for="(item,index) in hero" :key="index">
            <div>名字：{{item.hero_name}}</div>
            <div>描述：{{item.hero_desc}}</div>
            <div>图片：<img :src="item.img" :alt="item.hero_title"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                hero:{}
            }
        },
        created(){
            this.getHero()
        },
        methods:{
            getHero(){
                // axios.get('http://hero.shudong.wang/v1/db.php')
                axios.get('/v1/db.php')
                .then(res=>{
                    console.log(res.data.hero);
                    this.hero = res.data.hero;
                })
            }
        }
    }
</script>

