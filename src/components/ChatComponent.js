// src/components/ChatComponent.js

import React, { useState } from 'react';

const ChatComponent = ({ apiKey }) => {
	const [message, setMessage] = useState('');

	const handleSendMessage = () => {
		// Chame a função para enviar mensagem usando a API do WhatsApp
		sendMessage(apiKey, message);
		setMessage('');
	};

	return (
		<div>
			<textarea placeholder='Digite sua mensagem' value={message} onChange={(e) => setMessage(e.target.value)} />
			<button onClick={handleSendMessage}>Enviar Mensagem</button>
		</div>
	);
};

export default ChatComponent;
