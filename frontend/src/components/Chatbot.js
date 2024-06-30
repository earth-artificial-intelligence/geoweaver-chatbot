import React, { useState } from 'react';
import { DeepChat } from 'deep-chat';
import axios from 'axios';

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
    <div>
      <DeepChat
        messages={messages.map((msg) => ({
          message: msg.text,
          user: msg.user,
        }))}
        onSendMessage={(msg) => handleSendMessage(msg)}
        user={{ name: 'User' }}
      />
    </div>
  );
};

export default Chatbot;
