import { Link } from "react-router-dom";

function Departments () {
  return (
    <div >
      <header >
        
        <p>
          Departamentos
        </p>   
      </header>
      <body>
      <nav>
           
          <Link to ="/"> Login </Link>, 
          <Link to ="/processes"> Processes </Link>,
          <Link to ="/employees"> Funcionários </Link>
          
        </nav>
      </body>

    </div>
  );
}

export default Departments;