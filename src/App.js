// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useState } from 'react';
import AuthComponent from './components/AuthComponent';
import ChatComponent from './components/ChatComponent';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [apiKey, setApiKey] = useState('');

	const handleAuthenticate = (apiKey) => {
		// Implemente a lógica de autenticação aqui
		// Pode envolver chamadas à API para validar a chave da API
		setApiKey(apiKey);
		setAuthenticated(true);
	};

	return <div>{!authenticated ? <AuthComponent onAuthenticate={handleAuthenticate} /> : <ChatComponent apiKey={apiKey} />}</div>;
}

export default App;
