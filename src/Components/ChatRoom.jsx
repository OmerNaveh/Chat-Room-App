import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";
import Participents from "./Participents";

export default function ChatRoom(props){
    return(
        !props.logged?
            <div className='loggerMessage container'>
            {"Must Login to start using ChatRoom"}
        </div>
        :
        <div className="chatRoom">
            <ChatLog />
            <Participents />
            <ChatInput />
        </div>
    )
}