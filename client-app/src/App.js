import './App.css';
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout";
import GUEST from './pages/Customer/Guest';
import Home from './pages/Home';
import CreateCustomer from './pages/Customer/Create';

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
      <Route path="/guests/create" element={<CreateCustomer />}></Route>

    </Routes>
  );
}

export default App;
