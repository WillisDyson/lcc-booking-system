import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivitySearchFiltersProvider } from "./context/ActivitySearchFiltersContext";
import Homepage from "./pages/Homepage";
import ActivityPage from "./pages/ActivityPage";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.app}>
      <ActivitySearchFiltersProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/book/:activityId" element={<ActivityPage />} />
            </Routes>
        </Router>
      </ActivitySearchFiltersProvider>
    </main>
  );
}

export default App
