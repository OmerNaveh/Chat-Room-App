import { BrowserRouter, Routes ,Route } from "react-router-dom";
import ChatRoom from "./Components/ChatRoom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";


function App() {
  return (
    <BrowserRouter >
      <Header />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/chat' element={<ChatRoom />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
