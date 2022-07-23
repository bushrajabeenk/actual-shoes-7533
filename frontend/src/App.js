import "./App.css";
import TaskComponent from "./components/Tasks/TaskComponent";
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
// import Home from '..'
function App() {
  return (
    <div className="App">
       <AllRoutes /> 
      // <TaskComponent />
    </div>
  );
}

export default App;
