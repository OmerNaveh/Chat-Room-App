import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";
import Participents from "./Participents";

export default function ChatRoom(props){
    const [messageLog, setMessageLog] = useState(null) 
    const eventSource= new EventSource('http://localhost:4000/messages/update')
    eventSource.onmessage = (e)=>{
      setMessageLog(JSON.parse(e.data));
    }
    eventSource.onerror = ()=> {
      eventSource.close();}

    const renderMessages = ()=>{
        const logArr=[];
        if(messageLog === null) return  <ChatLog />
        messageLog.forEach(message => 
            logArr.push(<ChatLog user={message.user} content = {message.content} date = {message.date}/>)
        );   
        return logArr;
        }
    return(
        props.logged?
            <div className='loggerMessage container'>
            {"Must Login to start using ChatRoom"}
        </div>
        :
        <div className="chatRoom">
            <div className='chatLog'>
            {renderMessages()}
            </div>
            <Participents />
            <ChatInput activeuser={props.activeuser}/>
        </div>
    )
}