
export default function ChatLog(props){
    return(
        <div>
            {props.user?
                <div className='chatMessage'>
                    <p className='logUserName'>{props.user}</p>
                    <p className='logContent'>{props.content}</p>
                    <p className='logDate'>{props.date}</p>
                </div>
                :
                <div>
                    {" "}
                </div>
            }
        </div>
    )
}
