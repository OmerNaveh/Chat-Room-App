import { useEffect, useState ,useRef} from "react";
import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";
import Participents from "./Participents";

export default function ChatRoom(props){
    const [messageLog, setMessageLog] = useState(null) 
    const [allActiveUsers, setallActiveUsers]= useState(null)
    const scrollDiv = useRef(null)
    useEffect(()=>{
        const eventSource= new EventSource(`http://localhost:4000/messages/update/${props.activeuser}`) 
        eventSource.onmessage = (e)=>{
          setMessageLog(JSON.parse(e.data).messages);
          setallActiveUsers(JSON.parse(e.data).users)
        }
        eventSource.onerror = ()=> {
          eventSource.close();}
    }
    ,[])

    const renderMessages = ()=>{
        const logArr=[];
        if(messageLog === null) return  <ChatLog />
        messageLog.forEach((message,index) => 
            logArr.push(<ChatLog key={index} user={message.user} content = {message.content} date = {message.date}/>)
        );
        scrollDiv.current.scrollTop =  scrollDiv.current.scrollHeight //auto scroll to bottom
        return logArr;
        }
    return(
        !props.logged?
            <div className='loggerMessage container'>
            {"Must Login to start using ChatRoom"}
        </div>
        :
        <div className="chatRoom">
            <div ref={scrollDiv} className='chatLog'>
            {renderMessages()}
            </div>
            <Participents allActiveUsers={allActiveUsers}/>
            <ChatInput activeuser={props.activeuser}/>
        </div>
    )
}