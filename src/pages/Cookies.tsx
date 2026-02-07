import React from 'react';

function Cookies() {
  return (
    <div style={{maxWidth: '800px', margin: '50px auto', padding: '20px', lineHeight: '1.6'}}>
      <h1 style={{color: '#2e5f1f', marginBottom: '10px'}}>Cookie-policy</h1>
      <p style={{color: '#666', fontSize: '14px'}}><em>Senast uppdaterad: 7 februari 2026</em></p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>1. Vad är cookies?</h2>
      <p>
        Cookies är små textfiler som lagras på din enhet när du besöker en webbplats.
        De hjälper oss att förbättra din upplevelse och analysera hur tjänsten används.
      </p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>2. Hur använder vi cookies?</h2>
      <p>Climly använder cookies för att:</p>
      <ul style={{marginLeft: '20px'}}>
        <li>Hålla dig inloggad (sessionscookies)</li>
        <li>Komma ihåg dina inställningar</li>
        <li>Analysera användning av tjänsten</li>
      </ul>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>3. Typer av cookies</h2>
      <p><strong>Nödvändiga cookies:</strong> Krävs för att tjänsten ska fungera (inloggning, säkerhet).</p>
      <p><strong>Funktionella cookies:</strong> Förbättrar användarupplevelsen.</p>
      <p><strong>Analytiska cookies:</strong> Hjälper oss förstå hur tjänsten används.</p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>4. Hantera cookies</h2>
      <p>
        Du kan blockera cookies i din webbläsares inställningar. Observera att vissa funktioner
        kanske inte fungerar om du blockerar cookies.
      </p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>5. Kontakt</h2>
      <p>
        För frågor om cookies, kontakta: <a href="mailto:info@climy.se" style={{color: '#2e5f1f'}}>info@climy.se</a>
      </p>
      
      <a href="/" style={{display: 'inline-block', marginTop: '40px', color: '#2e5f1f', textDecoration: 'underline', fontSize: '16px'}}>
        ← Tillbaka till startsidan
      </a>
    </div>
  );
}

export default Cookies;