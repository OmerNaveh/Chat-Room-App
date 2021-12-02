
export default function ChatRoom(props){
    return(
        !props.logged?
            <div className='loggerMessage container'>
            {"Must Login to start using ChatRoom"}
        </div>
        :
        <div>
            
        </div>
    )
}