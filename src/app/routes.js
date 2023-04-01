import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePage from './pages/EmployeePage';
import DocumentPage from "./pages/DocumentPage";
import DepartmentPage from "./pages/DepartmentPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DocumentPage />}></Route>
                <Route path="/employees" element={<EmployeePage />}></Route>
                <Route path="/departments" element={<DepartmentPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;