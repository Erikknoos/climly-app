function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Integritetspolicy</h1>
        <p className="last-updated">Senast uppdaterad: 2026-02-05</p>

        <section>
          <h2>1. Personuppgiftsansvarig</h2>
          <p>
            Climy AB (org.nr: XXXXXX-XXXX)<br />
            Adress: [Din adress]<br />
            E-post: privacy@climy.se
          </p>
        </section>

        <section>
          <h2>2. Vilka uppgifter samlar vi in?</h2>
          <p>Vi samlar in följande kategorier av personuppgifter:</p>
          
          <h3>Kontaktuppgifter:</h3>
          <ul>
            <li>E-postadress</li>
            <li>Företagsnamn</li>
            <li>Organisationsnummer</li>
            <li>Telefonnummer (om angivet)</li>
          </ul>

          <h3>Företagsdata:</h3>
          <ul>
            <li>Antal anställda</li>
            <li>Kontorsyta</li>
            <li>Energiförbrukning</li>
            <li>Fordonsdata</li>
            <li>Resevanor</li>
          </ul>

          <h3>Teknisk information:</h3>
          <ul>
            <li>IP-adress</li>
            <li>Cookies och sessionsdata</li>
            <li>Webbläsartyp</li>
          </ul>
        </section>

        <section>
          <h2>3. Varför samlar vi in uppgifterna?</h2>
          <ul>
            <li>För att beräkna era CO₂-utsläpp</li>
            <li>För att skicka rapport och faktura</li>
            <li>För att hantera ditt konto</li>
            <li>För att förbättra tjänsten</li>
            <li>För att uppfylla lagkrav (bokföring, skatt)</li>
          </ul>
        </section>

        <section>
          <h2>4. Rättslig grund (GDPR)</h2>
          <p>Vi behandlar dina personuppgifter baserat på:</p>
          <ul>
            <li><strong>Avtal:</strong> För att leverera tjänsten du köpt</li>
            <li><strong>Laglig förpliktelse:</strong> Bokföring och skatt (7 år)</li>
            <li><strong>Berättigat intresse:</strong> Förbättra tjänsten och support</li>
          </ul>
        </section>

        <section>
          <h2>5. Hur länge sparar vi uppgifterna?</h2>
          <ul>
            <li><strong>Företagsdata för beräkningar:</strong> Så länge du har ett aktivt konto</li>
            <li><strong>Fakturor och betalningar:</strong> 7 år (bokföringslag)</li>
            <li><strong>Tekniska loggar:</strong> 12 månader</li>
          </ul>
        </section>

        <section>
          <h2>6. Vem delar vi uppgifter med?</h2>
          <p>Vi delar aldrig era affärsuppgifter med tredje part. Vi använder:</p>
          <ul>
            <li><strong>Stripe/Klarna:</strong> För betalningar</li>
            <li><strong>MongoDB Atlas:</strong> Databas (krypterad)</li>
            <li><strong>E-postleverantör:</strong> För att skicka rapporter</li>
          </ul>
          <p>Alla leverantörer är GDPR-certifierade och har dataskyddsavtal.</p>
        </section>

        <section>
          <h2>7. Dina rättigheter (GDPR)</h2>
          <p>Du har rätt att:</p>
          <ul>
            <li>Få tillgång till dina uppgifter (registerutdrag)</li>
            <li>Rätta felaktiga uppgifter</li>
            <li>Radera dina uppgifter ("rätten att bli glömd")</li>
            <li>Begränsa behandling</li>
            <li>Överföra uppgifter (dataportabilitet)</li>
            <li>Invända mot behandling</li>
          </ul>
          <p>Kontakta oss på privacy@climy.se för att utöva dina rättigheter.</p>
        </section>

        <section>
          <h2>8. Säkerhet</h2>
          <p>Vi skyddar dina uppgifter genom:</p>
          <ul>
            <li>Krypterade lösenord (bcrypt)</li>
            <li>HTTPS/SSL för all datatrafik</li>
            <li>Säkra HttpOnly cookies</li>
            <li>Regelbundna säkerhetskopior</li>
            <li>Begränsad åtkomst för personal</li>
          </ul>
        </section>

        <section>
          <h2>9. Cookies</h2>
          <p>Vi använder cookies för:</p>
          <ul>
            <li><strong>Nödvändiga:</strong> Inloggning och sessionshantering</li>
            <li><strong>Analys:</strong> Förbättra användarupplevelsen (kan avböjas)</li>
          </ul>
          <p>Du kan hantera cookies i din webbläsare.</p>
        </section>

        <section>
          <h2>10. Kontakt och klagomål</h2>
          <p>
            Frågor: privacy@climy.se<br />
            Klagomål till Integritetsskyddsmyndigheten (IMY): www.imy.se
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;