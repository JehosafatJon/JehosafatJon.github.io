import './App.css';
import { DefaultHeader } from './components/Default-header';
import { SidebarTest } from './components/Sidebar-test';
import { Interests } from './components/Interests'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;