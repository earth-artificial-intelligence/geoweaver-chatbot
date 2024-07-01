import React, { useState } from 'react';
import { DeepChat } from 'deep-chat-react';
import axios from 'axios';
import './Chatbot.css'; // Import the CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const userMessage = {
      text: message,
      user: 'User',
    };

    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        context: 'Wildfire data context',
        question: message,
      });

      const botMessage = {
        text: response.data.answer,
        user: 'Bot',
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="container-fluid h-100 d-flex flex-column p-0">
      <div className="row flex-grow-1 m-0">
        <div className="col-3 bg-light border-right overflow-auto p-3">
          <h2>Message History</h2>
          <ul className="list-unstyled">
            {messages.map((msg, index) => (
              <li key={index} className={msg.user === 'User' ? 'text-primary' : 'text-success'}>
                <strong>{msg.user}:</strong> {msg.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-9 d-flex flex-column p-3">
          <DeepChat
            className="flex-grow-1"
            style={{borderRadius: '10px'}}
            messages={messages.map((msg) => ({
              message: msg.text,
              user: msg.user,
            }))}
            onSendMessage={(msg) => handleSendMessage(msg)}
            user={{ name: 'User' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
