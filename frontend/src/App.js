import "./App.css";
import { Mainroute } from "./Routes/Mainroute";
import TaskComponent from './components/Tasks/TaskComponent';

function App() {
  return (
    <div className="App">
      <Mainroute />
      <TaskComponent />
    </div>
  );
}

export default App;
