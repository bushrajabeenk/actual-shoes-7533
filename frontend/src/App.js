import "./App.css";
// import TaskComponent from "./components/Tasks/TaskComponent";
import { AllRoutes } from "./Routes/AllRoutes";
// import Navbar from "./components/Navbar/Navbar";
import Footer from './components/footer/Footer';
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import Freetrial from "./components/freetrial/Freetrial";
import TaskComponent from "./components/Tasks/TaskComponent";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
      {/* <TaskComponent /> */}
      {/* <Freetrial /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <TaskComponent /> */}
    </div>
  );
}

export default App;
