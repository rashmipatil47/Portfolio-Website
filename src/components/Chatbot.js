import React, { useState, useRef, useEffect } from 'react';
import { chatbotSystemPrompt } from '../data/portfolioData';
import './Chatbot.css';

const QUICK_REPLIES = [
  "What are Rashmi's top skills?",
  "Tell me about her projects",
  "Is she available for hire?",
  "How can I contact her?",
];

const TypingIndicator = () => (
  <div className="chat-bubble chat-bubble-ai">
    <div className="typing-indicator">
      <span /><span /><span />
    </div>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Rashmi's AI assistant. Ask me anything about her skills, projects, or how to hire her!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
      setHasNew(false);
    }
  }, [messages, isOpen]);

  // Show notification dot after 8 seconds if not opened
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isOpen) setHasNew(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    const userMsg = { role: 'user', content: userText };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for API (exclude the initial greeting from API history)
      const apiMessages = updatedMessages
        .filter((_, i) => i > 0) // skip initial greeting
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: chatbotSystemPrompt,
          messages: apiMessages,
        }),
      });

      const data = await response.json();
      const aiText = data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Oops! Something went wrong. Please check your API key setup or try again shortly.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* FAB Button */}
      <button
        className={`chatbot-fab ${isOpen ? 'fab-open' : ''}`}
        onClick={() => { setIsOpen(o => !o); setHasNew(false); }}
        aria-label="Open AI Chat"
      >
        {hasNew && !isOpen && <span className="fab-badge" />}
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'chatbot-open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <span>🤖</span>
            <div className="chatbot-status-dot" />
          </div>
          <div className="chatbot-header-info">
            <p className="chatbot-name">Rashmi's AI Assistant</p>
            <p className="chatbot-status">Powered by Claude</p>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-bubble-${msg.role === 'user' ? 'user' : 'ai'}`}>
              {msg.content}
            </div>
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && !isLoading && (
          <div className="quick-replies">
            {QUICK_REPLIES.map((q, i) => (
              <button key={i} className="quick-reply-btn" onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input-area">
          <textarea
            ref={inputRef}
            className="chatbot-input"
            placeholder="Ask me anything about Rashmi..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={isLoading}
          />
          <button
            className="chatbot-send"
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            aria-label="Send"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
