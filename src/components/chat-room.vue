<template>
    <section class="chat-room">
        <h1>chat-room</h1>
        <ul>
            <li v-for="(msg, idx) in msgs" :key="idx">
                <span>{{ msg.from }}:</span>
                {{ msg.txt }}
            </li>
        </ul>
        <hr />
        <form @submit.prevent="sendMsg">
            <input type="text" v-model="msg.txt" placeholder="Your msg" />
            <button>Send</button>
        </form>
        {{ username }}
    </section>
</template>


<script>
import { socketService } from "../services/socket.service"
export default {
    name: 'chat-room ',
    props: {
        toyId: String,
        username: {
            type: String,
            default: 'Guest'
        }
    },
    emits: [],
    components: {},
    data() {
        return {
            msg: { from: 'Me', txt: '' },
            msgs: [],
        }
    },
    created() {
        // console.log(toyId);
        socketService.emit('chat topic', this.toyId)
        socketService.on('chat addMsg', this.addMsg)

    },
    mounted() {

    },
    methods: {
        addMsg(msg) {
            console.log('msg:', msg);
            this.msgs.push(msg)
        },
        sendMsg() {
            console.log('Sending', this.msg);
            this.msg.from = this.username
            socketService.emit('chat newMsg', this.msg)
            // TODO: next line not needed after connecting to backend
            // this.addMsg(this.msg)
            // setTimeout(() => this.addMsg({ from: 'Dummy', txt: 'Yey' }), 2000)
            this.msg = { from: 'me', txt: '' };
        },
    },
    computed: {
    },
    unmounted() {
    },
}
</script>
