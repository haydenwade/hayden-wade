import React from 'react';
import { Row, Col, FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import { MyMessage, OthersMessage } from './messages';
import SocketManager from './socketManager';

class ChatComponent extends React.Component {
    sock = new SocketManager()
    state = {
        currentUsername: "",
        chatInput: "",
        chatStarted: false,
        messages: []
    }
    componentDidMount() {
        this.sock.addEventHandler('event', (data) => {
            this.addMessage({
                text: data.text,
                isSelf: false,
                username: 'hayden wade'
            })

            this.setState({ chatStarted: true })
        })
        if (this.nameInput) {
            this.nameInput.focus();
        }
    }
    componentWillUnmount(){
        this.sock.socket.close();
    }
    addMessage = (message)=>{
        let newMessages = this.state.messages.concat([message])
        this.setState({ messages: newMessages })
    }
    handleChatInput = (e) => {
        this.setState({ chatInput: e.target.value })
    }
    handleMessageSend = () => {
        this.addMessage({
            text: this.state.chatInput,
            isSelf: true,
            username: this.state.currentUsername
        })
        this.setState({ chatInput: "", chatStarted: true})
        this.sock.socket.emit('event', { text: this.state.chatInput })
    }

    handleKeyDownMessageSend = (e) => {
        if (e.key === 'Enter') {
            this.handleMessageSend(e);
        }
    }
    startChat = (e) => {
        if (e.key === 'Enter') {
            this.addMessage({
                text: `Hi ${this.state.currentUsername}! I'm excited that you want to chat with me, what questions do you have for me? Or feel free to just say hi!`,
                isSelf: false,
                username: 'hayden wade'
            })

            this.setState({ chatStarted: true })
        }
    }
    handleNameInput = (e) => {
        this.setState({ currentUsername: e.target.value });
    }
    render() {
        return (
            <Col className="text-center">
                {
                    !this.state.chatStarted && <React.Fragment>
                        <h3 className="h2">What's your name?</h3>
                        <input className="usernameInput" type="text" onChange={this.handleNameInput} value={this.state.currentUsername} ref={(input) => { this.nameInput = input; }} onKeyDown={this.startChat} />

                    </React.Fragment>
                }
                {

                    this.state.chatStarted && <React.Fragment>
                        <hr />
                        {this.state.messages.map((message, i) => {
                            return message.isSelf ? <MyMessage key={i} {...message} /> : <OthersMessage key={i}  {...message} />
                        })
                        }
                        <Row>
                            <Col>
                                <FormGroup>
                                    <InputGroup>
                                        <FormControl type="text" onChange={this.handleChatInput} value={this.state.chatInput} onKeyDown={this.handleKeyDownMessageSend} />
                                        <InputGroup.Append>
                                            <Button onClick={this.handleMessageSend} variant="light">Send</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </React.Fragment>
                }
            </Col>
        )
    }
}

export default ChatComponent;