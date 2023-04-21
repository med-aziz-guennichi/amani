import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Documents from './pages/Documents';
import Commercials from './pages/Commercials';
import Calendar from './pages/Calendar';
import Inbox from './pages/Inbox';
import Clients from './pages/Clients';
import EventsList from './pages/EventsList';
import Bills from './pages/Bills';
import Edit from './pages/Edit';
import ViewBill from './pages/ViewBill';
import ClientProfile from './pages/ClientProfile';
import Leads from './pages/Leads';
import QualifiedLeads from './pages/QualifiedLeads';
import Products from './pages/Products.jsx'
import Error from './pages/Error';
function App() {
  return (
    <div className="App">
  
                  <BrowserRouter>
             <Routes>
             <Route index path="/" element={<Home/>} />
             <Route index path="/login" element={<Login/>} />
             <Route index path="/profile" element={<Profile/>} />
             <Route index path="/settings" element={<Settings/>} />
             <Route index path="/documents" element={<Documents/>} />
             <Route index path="/commercials" element={<Commercials/>} />
             <Route index path="/calendar" element={<Calendar/>} />
             <Route index path="/inbox" element={<Inbox/>} />
             <Route index path="/clients" element={<Clients/>} />
             <Route index path="/eventslist" element={<EventsList/>} />
             <Route index path="/bills" element={<Bills/>} />
             <Route index path="/edit" element={<Edit/>} />
             <Route index path="/viewbill" element={<ViewBill/>} />
             <Route index path="/clientprofile" element={<ClientProfile/>} />
             <Route index path="/leads" element={<Leads/>} />
             <Route index path="/leadsq" element={<QualifiedLeads/>} />
             <Route index path="/products" element={<Products/>} />
             <Route index path="*" element={<Error/>} />
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
