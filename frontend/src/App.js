import "./App.css";
import TaskComponent from "./components/Tasks/TaskComponent";
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <TaskComponent /> */}
    </div>
  );
}

export default App;
