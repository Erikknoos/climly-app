import { useState } from 'react';
import './LoginModal.css';

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    alert('Inloggad!');
    onClose();
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    alert('Registrerad!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img src="/climlylogoclean.png" alt="Climy Logo" className="modal-logo" />
        </div>

        {!showRegister ? (
          <div className="modal-body">
            <button className="modal-button-primary" onClick={handleLogin}>
              Logga in
            </button>
            <button className="modal-button-secondary" onClick={() => setShowRegister(true)}>
              Registrera
            </button>
          </div>
        ) : (
          <div className="modal-body">
            <h2 className="modal-title">Skapa konto</h2>
            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Namn" required className="modal-input" />
              <input type="email" placeholder="E-post" required className="modal-input" />
              <input type="password" placeholder="Lösenord" required className="modal-input" />
              <button type="submit" className="modal-button-primary">Registrera</button>
              <button type="button" className="modal-button-secondary" onClick={() => setShowRegister(false)}>
                Tillbaka till inloggning
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;