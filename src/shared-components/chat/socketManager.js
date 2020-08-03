// import io from 'socket.io-client';
import config from '../../config';

//TODO: remove after update react-scripts -> just update react as whole before installing/importing socket.io-client
const io = ()=>{
    return {
        on:()=>{}
    }
}

export default class SocketManager {
    constructor() {
        this.socket = io(config.haydenWadeApi);
        this.socket.on('connect', function () {
            console.log('connected')
        });
        // this.socket.on('event', function(data){
        //     console.log('got message',data)
        // });
        this.socket.on('disconnect', function () {
            console.log('disconnected')
        });
    }
    addEventHandler = (eventName, handler) => {
        this.socket.on(eventName, handler)
    }
}