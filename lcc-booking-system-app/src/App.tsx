import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ActivitySearchFiltersProvider } from "./context/ActivitySearchFiltersContext";
import './App.module.scss'

function App() {
  return (
    <ActivitySearchFiltersProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
      </Router>
    </ActivitySearchFiltersProvider>
  );
}

export default App
