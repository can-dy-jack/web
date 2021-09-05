const text = {
    data(){
        return {
            counter: 0,
            time: new Date().toLocaleString(),
            message: 'message',
            something: '双向绑定数据',
            vif: true,
            items:[
                {text: '- Vue'},
                {text: '- React'},
                {text: '- Angular'}
            ]
        }
    },
    mounted() {
        setInterval(()=>{
            this.counter += 1;
        },1000);
    },
    methods: {
        reverseMessage(){
            this.message = this.message.split('').reverse().join('');
        }
    },
}

const vue_app = Vue.createApp(text).mount('#test')

