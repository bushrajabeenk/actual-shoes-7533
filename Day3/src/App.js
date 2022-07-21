
import './App.css';

import MainDropdown from './components/Dropdown/mainDropdown/MainDropdown';

import Introd from './components/Introduction/Introd';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
  <>
    <Navbar/>
    <Introd/>
    <MainDropdown/>
     {/* <Comparison/> */}
  </>

  );
}

export default App;

