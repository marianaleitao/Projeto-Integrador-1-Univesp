import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePage from './pages/EmployeePage';
import DocumentPage from "./pages/DocumentPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DocumentPage />}></Route>
                <Route path="/employees" element={<EmployeePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;