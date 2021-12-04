import { useState } from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import ChatRoom from "./Components/ChatRoom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {

  const [logged,setLogged] = useState(false)
  const [user,setUser]= useState(null)

  return (
    <BrowserRouter >
      <Header user={user} />
    <Routes>
      <Route path='/' element={<Login logged={logged} setLogged={setLogged} setUser={setUser}/>}/> 
      <Route path='/chat' element={<ChatRoom logged={logged} activeuser={user}/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
