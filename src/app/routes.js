import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePage from './pages/EmployeePage';
import DocumentPage from "./pages/DocumentPage";
import DepartmentPage from "./pages/DepartmentPage";
import LoginPage from "./pages/LoginPage";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <LoginPage />;
};

function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/employees" element={< Private Item={EmployeePage} />}></Route>
                    <Route path="/departments" element={< Private Item={DepartmentPage} />}></Route>
                    <Route path="/documents" element={< Private Item={DocumentPage} />}></Route>
                    <Route path="*" element={<LoginPage />}></Route>
                </Routes>
            </Fragment>
            
        </BrowserRouter>
    );
}

export default AppRoutes;