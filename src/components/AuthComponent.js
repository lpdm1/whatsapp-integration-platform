// src/components/AuthComponent.js

import React, { useState } from 'react';

const AuthComponent = ({ onAuthenticate }) => {
	const [apiKey, setApiKey] = useState('');

	const handleAuthenticate = () => {
		// Chame a função de autenticação com a chave da API
		onAuthenticate(apiKey);
	};

	return (
		<div>
			<input type='text' placeholder='Digite sua chave de API do WhatsApp' value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
			<button onClick={handleAuthenticate}>Autenticar</button>
		</div>
	);
};

export default AuthComponent;
