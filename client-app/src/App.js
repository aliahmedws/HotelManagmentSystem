import './App.css';
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout";
import GUEST from './pages/Guest';
import Home from './pages/Home';

function App() {
  return (
    <AppLayout>
      <AppRoutes></AppRoutes>
    </AppLayout>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/guests" element={<GUEST />}></Route>
    </Routes>
  );
}

export default App;
