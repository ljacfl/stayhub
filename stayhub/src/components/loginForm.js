import React, { useState } from 'react';
import loginImage from 'C:/Users/anaso/OneDrive/Escritorio/nuevo/nuevo/src/Assets/login-rectangle-5.png';
import avion from 'C:/Users/anaso/OneDrive/Escritorio/nuevo/nuevo/src/Assets/bx-paper-plane-1.png'


function LoginForm() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   // lógica de inicio de sesión
   console.log(`Username: ${username}, Password: ${password}`);
 };

 return (
   <form onSubmit={handleSubmit}>

     <div className="espacio1">
     <label>
       <input className="Barra1" type="text" placeholder="Inserte nombre de usuario" value={username} onChange={e => setUsername(e.target.value)} />
     </label>
     </div>

     <div className="espacio2">
     
     <label>
       <input className="Barra2" type="text" placeholder="Digite su contraseña" value={password} onChange={e => setPassword(e.target.value)} />
     </label>
     </div>

     <div className="contenedor">
     <div className="MyButton">
     <button type="submit">Iniciar Sesion</button>
     </div>
     </div>
     <img src={loginImage} alt="My Image" style={{position: 'fixed', right: '0' , width:'688px', top: 0}} />
     <img src={avion} alt="Icon" style={{position: 'fixed', top: 177, left: 250}} />
   </form>
 );
}

export default LoginForm;
