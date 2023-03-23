

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsEmployees from './pages/ContactsEmployees';
import DataDepartments from './pages/DataDepartments';
import DataProcesses from './pages/DataProcesses';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import Error from './pages/Error';
import Login from './pages/Login';
import Processes from './pages/Processes';


export default function Router (){
  return (
    <BrowserRouter>
      <Routes>
        < Route path= '/'  element = { < Login />} />
        < Route path= '/departments'  element = { < Departments />} />
        < Route path= '/datadepartments'  element = { < DataDepartments />} />
        < Route path= '/employees'  element = { < Employees />} />
        < Route path= '/contactsemployees'  element = { < ContactsEmployees />} />
        < Route path= '/processes'  element = { < Processes />} />
        < Route path= '/dataprocesses'  element = { < DataProcesses />} />
        < Route path= '*'  element = { < Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
