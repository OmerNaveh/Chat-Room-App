import axios from "axios";
import { useRef } from "react";
import { errorMessage } from "../helpers/errorPop";
const RequestURL = 'http://127.0.0.1:4000/messages/create'

export default function ChatInput(props){
    const userInput = useRef(null)
    document.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            document.querySelector('.sendBtn').click(); //make keypress enter same as clicking on send btn 
            e.stopImmediatePropagation()
        }
    })
    const sendMessage= async ()=>{
        const user = props.activeuser;
        const content = userInput.current.value;
        if(content){
            const headers = {'Content-Type': 'application/json'}
            const data = {"user":user||'omer',"content":content}
            await axios.post(RequestURL, data, {headers:headers})
            userInput.current.value = ''
        }
        else{
            errorMessage('something went wrong- make sure you are logged in and typed a message')
        }
    }
    return(
        <div className='ChatInputDiv'>
            <input ref={userInput} type='text' className='chatInput'></input>
            <button className='sendBtn' onClick={()=>sendMessage()}><i className="far fa-paper-plane"></i></button>
        </div>
    )
}