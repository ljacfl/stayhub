import LoginForm from './components/loginForm';

function App() {
  const title ="stayhub"
  return (
    <div className="App">
    <LoginForm />

    <div className="letter">
    <h3> tu </h3>
    <h3>un solo</h3>
    </div>

    <div className="letter2">
    <h1> viaje a </h1>
    </div>

    <div className="letter3">
    <h1> click </h1>
    </div>

     <div className='content'>
      <h1> {title} </h1>
    </div>
    </div>
  );
  
}


export default App;
