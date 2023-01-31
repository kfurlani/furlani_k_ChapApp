export default {
    name: 'TheChatMessageComponent',
    props: ['message'],

    template: `
    <article class="chat-messages" :class="{ 'other-messages' : matchedID }"> 
        <h2>{{ message.name }} says:</h2>
        <p>{{ message.content }}</p>
    </article>
    `,

    data() {
        return {
            message: 'IM HERE',
            // every time an incoming message arrives, check agaisnt the user id to see if this ours.
            //if it is, apply a css class to inditivte that its ours. 
            //if ti isnt, apply a different css class to make that obvious
            matchedID: this.$parent.socketID == this.message.id 
        }
    }
}