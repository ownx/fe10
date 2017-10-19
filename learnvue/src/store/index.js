import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 102
    },
    mutations: {
        AddIncrement(state, num) {
            // 函数接收一个参数state 这个state就是上面的state
            console.log(num);
            state.num += num.n;

        },
        MinIncrement(state, num) {
            state.num -= num;
        }
    }
})

export default store