
import './App.css';
import ReviewPage from './components/belowDropdown/ReviewPage/ReviewPage';
import MiddleComp from './components/belowDropdown/middleComp/MiddleComp';

import MainDropdown from './components/Dropdown/mainDropdown/MainDropdown';

import Introd from './components/Introduction/Introd';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
  <>
    <Navbar/>
    <Introd/>
    <MainDropdown/>
     <MiddleComp/>
     <ReviewPage/>
  </>

  );
}

export default App;

