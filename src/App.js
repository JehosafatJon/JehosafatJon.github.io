import './App.css';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';
import { Interests } from './components/Interests'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Downloads } from './components/Downloads'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Awards } from './components/Awards';

function App() {
  return (
    <div className='Horizontal-test'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element= { <Sidebar /> } />
            <Route index element = { <Home /> } />
            <Route path="about" element= { <About /> } />
            <Route path="resume" element= { <Resume /> } />
            <Route path="interests" element = { <Interests /> } />
            <Route path="downloads" element = { <Downloads /> } />
            <Route path="awards" element = { <Awards /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;