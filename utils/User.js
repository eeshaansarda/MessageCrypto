export default class User {
    constructor(username, publicKey, socket) {
        this.username = username;
        this.publicKey = publicKey;
        this.socket = socket;
    }

    sendMessage(message, receiver) {
        receiver.socket.write(JSON.stringify(message));
    }
}
