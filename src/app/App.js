import './App.css';
import AppRoutes from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from '../contexts/auth';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
      
    </>
  );
}

export default App;