import { Link } from "react-router-dom";



function Login () {
  return (
    <div >
      <header >
        
        <h1>
          Seja Bem Vindo! 
        </h1>
        <h1>  
          Projeto Integrador - Desenvolvimento Web 
        </h1>
        
                   
      </header>

      <body>
        <p> Clique na página em que gostaria de ser direcionado</p>
        <nav>
          <Link to ="/departments"> Departamentos </Link>, 
          <Link to ="/processes"> Processos </Link>, 
          <Link to ="/employees"> Funcionários </Link>
          
        </nav>
        
      </body>

    </div>
    
  );
}


export default Login;