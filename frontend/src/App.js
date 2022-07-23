import "./App.css";
import TaskComponent from "./components/Tasks/TaskComponent";
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home-afterLogin/Home";
// import { Sidebar } from "./components/Home-afterLogin/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      <Home/>
      {/* <Sidebar/> */}
      {/* <TaskComponent /> */}
    </div>
  );
}

export default App;
