
import './App.css';

import Navbar from "./components/Navbar/Navbar.jsx" ;
import ContactList from "./components/contactList/ContactList.jsx"
import { Route,  Routes } from 'react-router-dom';
import ContactInfo from './components/conatctInfo/ContactInfo';
import MessageList from './components/messageList/MessageList';

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
       <Route path="/" element={<ContactList/>}/>
       <Route path='/contact/:id' element={<ContactInfo/>}/>
       <Route path="/message" element={<MessageList/>}/>
    </Routes>
     
  </>

  );
}

export default App;

