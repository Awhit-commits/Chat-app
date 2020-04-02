import React from 'react'

import Message from '../Message/Message'

import '../Messages/Messages.css'

import ScrollToBottom from 'react-scroll-to-bottom'
const Messages = ({messages,name}) =>{
    return (
    <ScrollToBottom className = "messages">
        {messages.map((message,i)=>{
            return (<div key ={i}>
                <Message message = {message} name ={name}/>
            </div>)

        })}

    </ScrollToBottom>
    )

}

export default Messages