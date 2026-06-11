import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivitySearchFiltersProvider } from "./context/ActivitySearchFiltersContext";
import Homepage from "./pages/Homepage";
import ActivityPage from "./pages/ActivityPage";
import './App.module.scss'

function App() {
  return (
    <ActivitySearchFiltersProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/activity/:activityId" element={<ActivityPage />} />
          </Routes>
      </Router>
    </ActivitySearchFiltersProvider>
  );
}

export default App
