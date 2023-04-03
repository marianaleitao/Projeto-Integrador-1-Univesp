import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePage from './pages/EmployeePage';
import DocumentPage from "./pages/DocumentPage";
import DepartmentPage from "./pages/DepartmentPage";
import LoginPage from "./pages/LoginPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DocumentPage />}></Route>
                <Route path="/employees" element={<EmployeePage />}></Route>
                <Route path="/departments" element={<DepartmentPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;