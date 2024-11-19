import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import RegisterPatient from './Components/Patient-Registration/PatientRegistration.jsx';
import PatientManagement from './Components/Patient-Management/PatientManagement.jsx';
import BookAppointment from './Components/Book-Appointment/BookAppointment.jsx';
import Footer from './Components/Footer/Footer.jsx'; 

function App() {
  return (
    <Router>
        <div className="bg-gray-100 min-h-screen flex flex-col w-full overflow-x-hidden mx-0 px-0">

        <Header />
        
        <div className="flex-grow mt-16 pb-16 w-full"> 
          <Routes>
            <Route path="/" element={<Header />} /> 
            <Route path="/patient-management" element={<PatientManagement />} />
            <Route path="/patient-registration" element={<RegisterPatient />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </div>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
