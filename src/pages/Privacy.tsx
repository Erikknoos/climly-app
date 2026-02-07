import React from 'react';

function Privacy() {
  return (
    <div style={{maxWidth: '800px', margin: '50px auto', padding: '20px', lineHeight: '1.6'}}>
      <h1 style={{color: '#2e5f1f', marginBottom: '10px'}}>Integritetspolicy</h1>
      <p style={{color: '#666', fontSize: '14px'}}><em>Senast uppdaterad: 7 februari 2026</em></p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>1. Insamling av uppgifter</h2>
      <p>
        När du använder Climly samlar vi in företagsinformation som företagsnamn, organisationsnummer,
        kontakt-e-post samt uppgifter om energiförbrukning, transporter och verksamhet.
      </p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>2. Användning av uppgifter</h2>
      <p>Dina uppgifter används för att:</p>
      <ul style={{marginLeft: '20px'}}>
        <li>Beräkna och generera CO₂-rapporter</li>
        <li>Förbättra vår tjänst</li>
        <li>Kommunicera med dig om din rapport</li>
      </ul>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>3. Delning av uppgifter</h2>
      <p>
        Vi delar inte dina uppgifter med tredje part, förutom när det krävs för drift av tjänsten
        (t.ex. molntjänster som MongoDB Atlas och Render).
      </p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>4. Lagring av uppgifter</h2>
      <p>
        Dina uppgifter lagras säkert i MongoDB Atlas (EU-region) och raderas på begäran.
      </p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>5. Dina rättigheter (GDPR)</h2>
      <p>Du har rätt att:</p>
      <ul style={{marginLeft: '20px'}}>
        <li>Få tillgång till dina uppgifter</li>
        <li>Begära rättelse eller radering</li>
        <li>Invända mot behandling</li>
      </ul>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>6. Kontakt</h2>
      <p>
        För frågor om integritet, kontakta: <a href="mailto:info@climy.se" style={{color: '#2e5f1f'}}>info@climy.se</a>
      </p>
      
      <a href="/" style={{display: 'inline-block', marginTop: '40px', color: '#2e5f1f', textDecoration: 'underline', fontSize: '16px'}}>
        ← Tillbaka till startsidan
      </a>
    </div>
  );
}

export default Privacy;