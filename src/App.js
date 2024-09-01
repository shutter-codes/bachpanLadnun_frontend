import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AdmissionForm from './component/AdmissionForm';
import VIFomeDataUploadComponent from './component/VIFomeDataUploadComponent';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript
import Contact from './component/Contact';
import About from './component/About';
import Gallery from './component/Gallery';
import ADfDataGetForAllStudent from './component/ADfDataGetForAllStudent';
import Thought from './component/Thought';

function App() {
  
  return (
    
    <Router>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9wUT4TLqRCkWSo59ERB3fFExxwZUn6zJ4Smx8R4cD3sTnZ67nKf" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniU2a9X2f8FhYH/XX5e34YEkOwhjtDddVQ0BsZj3fprB7K+JzZzT6" crossorigin="anonymous"></script>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/adf' element={<AdmissionForm/>} />
        <Route path="/VI/data/upload/Fome" element={<VIFomeDataUploadComponent/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/adfdata" element={<ADfDataGetForAllStudent/>}/>
        <Route path="/thought" element={<Thought/>}/>
      </Routes>
    </Router>
  );
}

export default App;
