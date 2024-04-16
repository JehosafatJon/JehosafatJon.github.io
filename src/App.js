import './App.css';
import { DefaultHeader } from './components/Default-header';
import { SidebarTest } from './components/Sidebar-test';
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
        <SidebarTest />
        <Routes>
          <Route path="/" element= { <SidebarTest /> } />
            <Route index element = { <DefaultHeader /> } />
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