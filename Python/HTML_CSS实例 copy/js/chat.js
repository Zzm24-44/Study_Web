document.addEventListener('DOMContentLoaded', function () {
  const chatMessages = document.getElementById('chatMessages');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const aiAssistantBtn = document.getElementById('ai-assistant-btn');
  const chatModal = document.getElementById('chat-modal');
  const closeBtn = document.getElementsByClassName('close')[0];

  aiAssistantBtn.onclick = function (e) {
    e.preventDefault();
    chatModal.style.display = "block";
    setTimeout(() => chatModal.classList.add('show'), 50);
  }

  closeBtn.onclick = function () {
    chatModal.classList.remove('show');
    setTimeout(() => chatModal.style.display = "none", 300);
  }

  sendBtn.onclick = sendMessage;
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage('user', message);
      userInput.value = '';
      // Simulate AI response (replace with actual AI call)
      setTimeout(() => {
        const aiResponse = "This is a simulated AI response. In a real application, this would be replaced with an actual API call to an AI service.";
        addMessage('ai', aiResponse);
      }, 1000);
    }
  }

  function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Add event listeners for control buttons
  document.getElementById('settingsBtn').addEventListener('click', () => {
    alert('Settings functionality to be implemented');
  });

  document.getElementById('clearChatBtn').addEventListener('click', () => {
    chatMessages.innerHTML = '';
  });

  document.getElementById('helpBtn').addEventListener('click', () => {
    alert('Help functionality to be implemented');
  });
});
