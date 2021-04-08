import logo from '../img/logo.svg';
import '../css/App.css';
import Friends from './Friends'




function Login(){
    return (
    <div className="Login">
      <input type='text' name='username' id='username' />
      <input type='text' name='password' id='username' />
      <Friends/>
      
    </div>
  );
}

export default Login;
