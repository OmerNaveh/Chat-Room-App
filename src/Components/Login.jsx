// import Swal from 'sweetalert2'
import { useRef } from "react"
import { Form, Button } from "react-bootstrap"
import {errorMessage, succesMessage} from '../helpers/errorPop'
import axios from "axios"
const RequestURL = 'http://127.0.0.1:4000/users/logIn'
export default function Login(props){
    const userName = useRef(null)
    const password = useRef(null)

    const logFunc= async()=>{
        const uName = userName.current.value;
        const uPass = password.current.value;
        if(!uName || !uPass){
            errorMessage('Must enter all fields')
        }
        else{
            try {
                await axios.post(RequestURL, {userName:uName, password:uPass}) // check on backend if user is verified 
                props.setLogged(true)
                props.setUser(uName)
                succesMessage('Successfully logged in')
            }  catch (error) {
                errorMessage(error.message)
            }
        }
        
    }
    return(
        props.logged?
        <div className='loggerMessage container'>
            {"You're Logged In - Start using the ChatRoom"}
        </div>
        :
        <Form className="signIn container">
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control ref={userName} type="text" placeholder="Enter userName" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" onClick={()=>{logFunc()}}>
          LogIn
        </Button>
      </Form>
    )
}