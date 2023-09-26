import './App.css';
import { DefaultHeader } from './components/Default-header';
import { SidebarTest } from './components/Sidebar-test';

function App() {
  return (
    <div className="App">
      <div className='Horizontal-test'>
        <SidebarTest />
        <DefaultHeader />
      </div>
    </div>
  );
}

export default App;