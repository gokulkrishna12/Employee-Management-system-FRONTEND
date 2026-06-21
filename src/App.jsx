import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<CreateEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployeeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;