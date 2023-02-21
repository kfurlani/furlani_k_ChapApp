export default {
    name: 'userTypingMsg',

    template: `
    
    <section>
    <div>{{userTypingMsg}}</div>
  
  </section>
    `,

    data() {
        return {
            typing: '',
            message: '',
            typing: false,
            userTypingMsg: '',
        }
    },

    watch: {
        new_message(value) {
           value ? socket.emit('userTypingMsg', this.nickname) : socket.emit('stoptyping');
       },
    },

    methods: {
        handleUserTyping(){}
    },
    





}