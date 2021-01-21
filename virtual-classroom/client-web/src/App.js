import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Components/auth/Register'
import Signin from './Components/auth/Signin'
import Signup from './Components/user/Signup'
import MainRouter from './MainRouter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
