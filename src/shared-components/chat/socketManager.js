import io from 'socket.io-client';
import config from '../../config';

export default class SocketManager {
    constructor() {
        this.socket = io(config.haydenWadeApi);
        this.socket.on('connect', function () {
            console.log('connected')
        });

        this.socket.on('disconnect', function () {
            console.log('disconnected')
        });
    }
    addEventHandler = (eventName, handler) => {
        this.socket.on(eventName, handler)
    }
}