import { Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Habits from "./Habits";
import WeekStatus from "./WeekStatus";

function App() {
  return (
    <div className="app">
      {/* creating routes for the navigation between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/weekstatus" element={<WeekStatus />} />
      </Routes>
    </div>
  );
}

export default App;
