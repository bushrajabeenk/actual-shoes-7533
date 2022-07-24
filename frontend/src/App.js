import "./App.css";
// import TaskComponent from "./components/Tasks/TaskComponent";
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
// import Footer from './components/footer/Footer';
import {Login } from './components/Login/Login';
import {Signup} from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* //  <AllRoutes />  */}
      {/* <Login /> */}
      {/* <Signup /> */}
       {/* <Footer /> */}
       {/* <TaskComponent /> */}
    </div>
  );
}

export default App;
