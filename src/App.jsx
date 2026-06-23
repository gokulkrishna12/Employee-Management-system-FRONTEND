import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import HeaderComponent from "./components/HeaderComponents"
import FooterComponent from "./components/FooterComponents"

function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />

      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<CreateEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployeeComponent />} />
      </Routes>

      <FooterComponent />

    </BrowserRouter>
  )
}

export default App;