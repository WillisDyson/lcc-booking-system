import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { SelectedDayProvider } from "./context/SelectedDayContext";
import './App.module.scss'

function App() {
  return (
    <SelectedDayProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
      </Router>
    </SelectedDayProvider>
  );
}

export default App
