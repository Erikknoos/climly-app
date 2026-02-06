import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginModal from './LoginModal';

interface CO2FormData {
  companyName: string;
  orgNumber: string;
  contactEmail: string;
  employees: string;
  officeSpace: string;
  companyVehicles: string;
  vehicleCount: string;
  energyType: string;
  monthlyEnergyUsage: string;
  businessTrips: string;
  remoteWorkPercentage: string;
  wasteManagement: string;
}

function MainApp() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState<CO2FormData>({
    companyName: '',
    orgNumber: '',
    contactEmail: '',
    employees: '',
    officeSpace: '',
    companyVehicles: '',
    vehicleCount: '',
    energyType: '',
    monthlyEnergyUsage: '',
    businessTrips: '',
    remoteWorkPercentage: '',
    wasteManagement: ''
  });
  const [loading, setLoading] = useState(false);
const [co2Result, setCo2Result] = useState<any>(null);
const [showResult, setShowResult] = useState(false);
const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
const [notification, setNotification] = useState<{
  message: string;
  type: 'success' | 'error' | 'info';
} | null>(null);

//Test*
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [loginUsername, setLoginUsername] = useState('');
const [loginPassword, setLoginPassword] = useState('');
const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  // Validering
  if (!formData.companyName) {
    showNotification('⚠️ Företagsnamn saknas', 'error');
    return;
  }
  if (!formData.orgNumber || !formData.orgNumber.match(/^\d{6}-\d{4}$/)) {
    showNotification('⚠️ Organisationsnummer måste vara i format: XXXXXX-XXXX', 'error');
    return;
  }
  if (!formData.contactEmail || !formData.contactEmail.includes('@')) {
    showNotification('⚠️ Ogiltig e-postadress', 'error');
    return;
  }
  setLoading(true);
  setShowResult(false);
  
  
  try {
    const response = await fetch('https://climly-backend.onrender.com/api/co2/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Beräkning misslyckades');
    }
    
    const result = await response.json();
    setCo2Result(result);
    setShowResult(true);
    showNotification('✅ Beräkning klar!', 'success');
    
    setTimeout(() => {
      const resultSection = document.querySelector('.result-section');
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    
  } catch (error) {
    console.error('Error:', error);
    showNotification('❌ Något gick fel. Kontrollera att alla fält är ifyllda.', 'error');
  } finally {
    setLoading(false);
  }
};
const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
  setNotification({ message, type });
  setTimeout(() => {
    setNotification(null);
  }, 5000); // Försvinner efter 5 sekunder
};
const downloadPDF = async () => {
  try {
    const button = document.querySelector('.btn-primary') as HTMLButtonElement;
    const originalText = button?.textContent || '';
    if (button) {
      button.disabled = true;
      button.textContent = '⏳ Genererar PDF...';
    }
    
    const response = await fetch('https://climly-backend.onrender.com/api/co2/generate-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('PDF-generering misslyckades');
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `climy-rapport-${formData.companyName.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
    
    showNotification('✅ PDF nedladdad!', 'success');
    
  } catch (error) {
    console.error('Error:', error);
    showNotification('❌ Kunde inte generera PDF. Försök igen.', 'error');
    
    const button = document.querySelector('.btn-primary') as HTMLButtonElement;
    if (button) {
      button.disabled = false;
      button.textContent = '📄 Ladda ner rapport (PDF)';
    }
  }
};

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  // Login Test
  const handleLogin = (e: any) => {
    e.preventDefault();
    
    if (loginUsername === 'adminclimly' && loginPassword === 'ADMIN123!') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setLoginError('');
      showNotification('✅ Inloggad som admin!', 'success');
    } else {
      setLoginError('Fel användarnamn eller lösenord');
    }
  };

  {/*LOG OUT*/}
  const handleLogout = () => {
  setIsLoggedIn(false);
  setShowLogoutConfirm(false);
  showNotification('👋 Utloggad', 'info');
};

  return (
    <>
    {notification && (
      <div className={`notification notification-${notification.type}`}>
        <span>{notification.message}</span>
        <button 
          className="notification-close"
          onClick={() => setNotification(null)}
        >
          ×
        </button>
      </div>
    )}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/climlylogoclean.png" alt="Climy Logo" className="logo" />
          
          <div className="nav-links">
            <a href="#how-it-works" className="nav-link">Så funkar det</a>
            <a href="#csrd-info" className="nav-link">Om CSRD</a>
            <a href="#contact" className="nav-link">Kontakt</a>
          </div>
    

          {isLoggedIn ? (
  <button className="login-btn" onClick={() => setShowLogoutConfirm(true)}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4"/>
      <path d="M20 21a8 8 0 1 0-16 0"/>
    </svg>
    Logga ut (Admin)
  </button>
) : (
  <button className="login-btn" onClick={() => setShowLoginModal(true)}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4"/>
      <path d="M20 21a8 8 0 1 0-16 0"/>
    </svg>
    Logga in
  </button>
)}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
  <div className="hero-overlay">
    <div className="hero-content">
      
      <h1 className="hero-title">Få fram företagets CO₂-utsläpp på 5 minuter</h1>
      <p className="hero-subtitle">
        PDF-rapport med total CO₂, uppdelning per kategori - enkel att använda i dialog med kunder och framtida krav.
      </p>
      <a href="#co2-form" className="hero-cta">Få CO₂-rapport</a>
      <p className="hero-subtitle">
        Från 299 kr/år
      </p>

<ul className="hero-checklist">
  <li>Ingen inloggning krävs</li>
  <li>Anpassad för småföretag</li>
  <li>Bygger på schablondata</li>
</ul>
      
      
    </div>
  </div>
  
</section>
<div className="disclaimer-banner">
  <p>
    ⚠️ <strong>Viktigt att veta:</strong> Climly ger en uppskattning av företagets CO₂-utsläpp baserad på 
    schablon- och branchdata. Rapporten kan användas i dialog med kunder, upphandlingar och som ett första steg inför framtida klimatkrav.
    Den ersätter inte fullständig CSRD-rapportering eller extern revision.
  </p>
</div>

      {/* Info Section */}
      <section className="info-section" id="how-it-works">
  <div className="info-container">
    <h2>Så fungerar det</h2>
    <div className="steps">
      <div className="step">
        <div className="step-number">1</div>
        <h3>Fyll i företagsuppgifter</h3>
        <p>Besvara frågor om er verksamhet - energi, transporter, lokaler och personal</p>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <h3>Vi uppskattar era utsläpp</h3>
        <p>Få en översiktlig bild av era CO₂-utsläpp baserat på era svar</p>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <h3>Få er rapport</h3>
        <p>Ni får en sammanställning med förbättringsförslag för att minska era utsläpp</p>
      </div>
    </div>
  </div>
</section>

      {/* CSRD Info */}
      <section className="csrd-section" id="csrd-info">
  <div className="csrd-container">
    <div className="csrd-text">
      <h2>Vad är CSRD?</h2>
      <p>
        <strong>Corporate Sustainability Reporting Directive (CSRD)</strong> är EU:s nya direktiv 
        som kräver att företag rapporterar sina hållbarhetsdata, inklusive CO₂-utsläpp.
      </p>
      <ul className="csrd-list">
        <li>✓ Gäller stora och börsnoterade företag från 2024</li>
        <li>✓ Även småföretag kan behöva visa sina utsläpp</li>
        <li>✓ Kräver mätning av klimatpåverkan</li>
        <li>✓ Börja mäta era utsläpp redan idag</li>
      </ul>
      <p style={{marginTop: '20px', fontSize: '14px', color: '#666'}}>
        <em>Climly hjälper er att börja mäta, men ersätter inte formell CSRD-rapportering eller extern granskning.</em>
      </p>
    </div>
    <div className="csrd-visual">
      <div className="co2-icon">CO₂</div>
      <p className="csrd-highlight">Ta första steget mot klimatmedvetenhet</p>
    </div>
  </div>
</section>

      {/* Main Form */}
      <main id="co2-form">
  <div className="form-header">
    <h2>Beräkna era CO₂-utsläpp</h2>
    <p className="form-description">
      Fyll i uppgifterna nedan så ger vi er en uppskattning av era totala CO₂-utsläpp. 
      Detta är ett första steg för att förstå ert klimatavtryck.
    </p>
  </div>

  {!isLoggedIn ? (
    <div style={{
      textAlign: 'center', 
      padding: '60px 20px',
      background: '#f5f9f5',
      borderRadius: '12px',
      margin: '40px 0'
    }}>
      <h2 style={{color: '#2e5f1f', marginBottom: '20px'}}>
        🔒 Inloggning krävs
      </h2>
      <p style={{fontSize: '18px', marginBottom: '30px', color: '#666'}}>
        Du måste vara inloggad för att använda CO₂-kalkylatorn
      </p>
      <button 
        className="btn-primary"
        onClick={() => setShowLoginModal(true)}
      >
        Logga in
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      {/* Företagsinfo */}
      <div className="form-section">
        <h3 className="section-title">Företagsinformation</h3>
        
        <div className="question">
          <label htmlFor="companyName">Företagsnamn <span className="required">*</span></label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Ert företagsnamn"
            required 
          />
        </div>

        <div className="question">
          <label htmlFor="orgNumber">Organisationsnummer <span className="required">*</span></label>
          <input 
            type="text" 
            id="orgNumber" 
            name="orgNumber" 
            value={formData.orgNumber}
            onChange={handleChange}
            placeholder="XXXXXX-XXXX"
            required 
          />
        </div>

        <div className="question">
          <label htmlFor="contactEmail">Kontakt e-post <span className="required">*</span></label>
          <input 
            type="email" 
            id="contactEmail" 
            name="contactEmail" 
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="kontakt@företag.se"
            required 
          />
        </div>
      </div>

      {/* Personal */}
      <div className="form-section">
        <h3 className="section-title">Personal & Arbetsplats</h3>
        
        <div className="question">
          <label htmlFor="employees">Antal anställda <span className="required">*</span></label>
          <select 
            id="employees" 
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            required
          >
            <option value="">Välj antal</option>
            <option value="1-10">1-10 anställda</option>
            <option value="11-50">11-50 anställda</option>
            <option value="51-200">51-200 anställda</option>
            <option value="201-500">201-500 anställda</option>
            <option value="500+">500+ anställda</option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="officeSpace">Kontorsyta (m²) <span className="required">*</span></label>
          <input 
            type="number" 
            id="officeSpace" 
            name="officeSpace" 
            value={formData.officeSpace}
            onChange={handleChange}
            placeholder="T.ex. 500"
            required 
          />
        </div>

        <div className="question">
          <label htmlFor="remoteWorkPercentage">Andel distansarbete <span className="required">*</span></label>
          <select 
            id="remoteWorkPercentage" 
            name="remoteWorkPercentage"
            value={formData.remoteWorkPercentage}
            onChange={handleChange}
            required
          >
            <option value="">Välj andel</option>
            <option value="0">0% - Alla på kontoret</option>
            <option value="25">25% - Delvis distans</option>
            <option value="50">50% - Hybrid</option>
            <option value="75">75% - Mestadels distans</option>
            <option value="100">100% - Helt distans</option>
          </select>
        </div>
      </div>

      {/* Energi */}
      <div className="form-section">
        <h3 className="section-title">Energiförbrukning</h3>
        
        <div className="question">
          <label htmlFor="energyType">Typ av uppvärmning/el <span className="required">*</span></label>
          <select 
            id="energyType" 
            name="energyType"
            value={formData.energyType}
            onChange={handleChange}
            required
          >
            <option value="">Välj typ</option>
            <option value="green">Förnybar el</option>
            <option value="mixed">Blandad el (Nordpool)</option>
            <option value="fossil">Fossil energi (olja, gas)</option>
            <option value="district">Fjärrvärme</option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="monthlyEnergyUsage">Månatlig elförbrukning (kWh) <span className="required">*</span></label>
          <input 
            type="number" 
            id="monthlyEnergyUsage" 
            name="monthlyEnergyUsage" 
            value={formData.monthlyEnergyUsage}
            onChange={handleChange}
            placeholder="T.ex. 5000"
            required 
          />
        </div>
      </div>

      {/* Transporter */}
      <div className="form-section">
        <h3 className="section-title">Transporter & Resor</h3>
        
        <div className="question">
          <label htmlFor="companyVehicles">Har ni företagsfordon? <span className="required">*</span></label>
          <select 
            id="companyVehicles" 
            name="companyVehicles"
            value={formData.companyVehicles}
            onChange={handleChange}
            required
          >
            <option value="">Välj alternativ</option>
            <option value="no">Nej</option>
            <option value="yes-electric">Ja, elbilar</option>
            <option value="yes-hybrid">Ja, hybrid</option>
            <option value="yes-fossil">Ja, bensin/diesel</option>
          </select>
        </div>

        {formData.companyVehicles && formData.companyVehicles !== 'no' && (
          <div className="question">
            <label htmlFor="vehicleCount">Antal fordon</label>
            <input 
              type="number" 
              id="vehicleCount" 
              name="vehicleCount" 
              value={formData.vehicleCount}
              onChange={handleChange}
              placeholder="Antal"
            />
          </div>
        )}

        <div className="question">
          <label htmlFor="businessTrips">Tjänsteresor per år <span className="required">*</span></label>
          <select 
            id="businessTrips" 
            name="businessTrips"
            value={formData.businessTrips}
            onChange={handleChange}
            required
          >
            <option value="">Välj omfattning</option>
            <option value="none">Inga eller mycket få</option>
            <option value="low">1-10 resor/år</option>
            <option value="medium">11-50 resor/år</option>
            <option value="high">50+ resor/år</option>
          </select>
        </div>
      </div>

      {/* Avfall */}
      <div className="form-section">
        <h3 className="section-title">Avfallshantering</h3>
        
        <div className="question">
          <label htmlFor="wasteManagement">Källsorterar ni avfall? <span className="required">*</span></label>
          <select 
            id="wasteManagement" 
            name="wasteManagement"
            value={formData.wasteManagement}
            onChange={handleChange}
            required
          >
            <option value="">Välj alternativ</option>
            <option value="full">Ja, fullständig källsortering</option>
            <option value="partial">Ja, delvis</option>
            <option value="none">Nej</option>
          </select>
        </div>
      </div>

      <div className="form-footer">
        <p className="privacy-note">
          🔒 Era uppgifter hanteras säkert och används endast för att skapa er CO₂ rapport.
          Vi delar inte information vidare utöver vad som krävs för drift av tjänsten.
        </p>
        <button type="submit" disabled={loading}>
          {loading ? '⏳ Beräknar...' : 'Beräkna era CO₂-utsläpp'}
        </button>
      </div>
    </form>
  )}
</main>



      {/* Resultat-sektion */}
{showResult && co2Result && (
  <section className="result-section">
    <div className="result-container">
      <h2>🌍 Ert klimatavtryck</h2>
      
      <div className="result-total">
        <div className="total-number">{co2Result.totalCO2.toFixed(1)}</div>
        <div className="total-label">ton CO₂ per år</div>
      </div>
      
      <div className="result-comparison">
        <p>{co2Result.comparisonToBenchmark}</p>
        <p>🌳 Motsvarar {co2Result.treesNeeded} träd för att kompensera</p>
      </div>
      
      <div className="result-breakdown">
        <h3>Uppdelning av utsläpp</h3>
        <div className="breakdown-grid">
          <div className="breakdown-item">
            <span className="breakdown-label">⚡ Energi</span>
            <span className="breakdown-value">{co2Result.energyCO2.toFixed(2)} ton</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">🚗 Transporter</span>
            <span className="breakdown-value">{co2Result.transportCO2.toFixed(2)} ton</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">🏢 Kontor</span>
            <span className="breakdown-value">{co2Result.officeCO2.toFixed(2)} ton</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">✈️ Resor</span>
            <span className="breakdown-value">{co2Result.travelCO2.toFixed(2)} ton</span>
          </div>
        </div>
      </div>
      
      <div className="result-actions">
  <button 
    className="btn-primary"
    onClick={downloadPDF}
    style={{marginRight: '15px'}}
  >
    📄 Ladda ner rapport (PDF)
  </button>
  
  <button 
    className="btn-secondary"
    onClick={() => {
      setShowResult(false);
      window.scrollTo({ top: document.getElementById('co2-form')?.offsetTop || 0, behavior: 'smooth' });
    }}
  >
    📝 Gör ny beräkning
  </button>
</div>
    </div>
  </section>
)}

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/climlylogoclean.png" alt="Climy" className="footer-logo" />
            <p>CSRD-anpassad CO₂-rapportering för svenska företag</p>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>info@climy.se</p>
            <p>+46 8 123 456 78</p>
            <p>Storgatan 1, Stockholm</p>
          </div>
          <div className="footer-section">
            <h4>Resurser</h4>
            <a href="#">CSRD-guide</a>
            <a href="#">Vanliga frågor</a>
            <a href="#">Priser</a>
            <a href="#">Supportcenter</a>
          </div>
        </div>
        <div className="footer-bottom">
  <p>
    © 2026 Climy AB. Alla rättigheter förbehållna. | 
    <a href="/terms"> Användarvillkor</a> | 
    <a href="/privacy"> Integritetspolicy</a> | 
    <a href="/cookies"> Cookie-policy</a>
  </p>
</div>
      </footer>

      {showLoginModal && (
  <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setShowLoginModal(false)}>×</button>
      
      <h2>Logga in</h2>
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Användarnamn</label>
          <input
            type="text"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            placeholder="användarnamn"
            autoComplete="username"
          />
        </div>
        
        <div className="form-group">
          <label>Lösenord</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="•••••••"
            autoComplete="current-password"
          />
        </div>
        
        {loginError && (
          <div className="login-error">{loginError}</div>
        )}
        
        <button type="submit" className="btn-primary" style={{width: '100%'}}>
          Logga in
        </button>
      </form>
      
    
    </div>
  </div>
)}

{/* Logout Confirmation Modal */}
{showLogoutConfirm && (
  <div className="modal-overlay" onClick={() => setShowLogoutConfirm(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setShowLogoutConfirm(false)}>×</button>
      
      <h2>Logga ut?</h2>
      
      <p style={{textAlign: 'center', marginBottom: '30px', color: '#666'}}>
        Är du säker på att du vill logga ut?
      </p>
      
      <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
        <button 
          className="btn-secondary"
          onClick={() => setShowLogoutConfirm(false)}
        >
          Avbryt
        </button>
        
        <button 
          className="btn-primary"
          onClick={handleLogout}
        >
          Ja, logga ut
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

export default MainApp;