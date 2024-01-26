import React, { useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import LoginButton from './components/LoginButton.jsx';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleLoginClick = () => {

    event.preventDefault()

    fetch('http://localhost:3000/usuarios')
      .then((response) => response.json())
      .then((data) => {
        const usuarioEncontrado = data.find(
          (usuario) => usuario.username === username && usuario.password === password
        );

        if (usuarioEncontrado) {
          
          navigate('/dashboard');

        } else {
          alert('Nome de usuário ou senha incorretos.');
        }
      })
      .catch((error) => console.error('Erro ao carregar o arquivo .db.json', error));
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login-container">
        <form>
          <h2 className="capitalcripto">DCA Tracker</h2>
          <input type="text" placeholder="username" className="userLogin" name="username" required onChange={(e) => setUsername(e.target.value)} /><br />
          <input type="password" placeholder="password" className="userLogin" name="password" required onChange={(e) => setPassword(e.target.value)}/><br />
          <div className="wrappedButton">
            <LoginButton handleLoginClick={handleLoginClick} name="login"/>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Login;