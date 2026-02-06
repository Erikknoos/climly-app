function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Användarvillkor</h1>
        <p className="last-updated">Senast uppdaterad: 2026-02-05</p>

        <section>
          <h2>1. Tjänstens syfte</h2>
          <p>
            Climy tillhandahåller ett verktyg för att beräkna uppskattade CO₂-utsläpp för företag. 
            Beräkningarna baseras på användarens egna uppgifter samt branschgenomsnitt och 
            standardvärden från tillgängliga datakällor.
          </p>
        </section>

        <section>
          <h2>2. Begränsningar och ansvarsfriskrivning</h2>
          <p>
            <strong>Climy ger ingen garanti för:</strong>
          </p>
          <ul>
            <li>Att beräkningarna är 100% korrekta eller fullständiga</li>
            <li>Att rapporten uppfyller alla krav i CSRD-direktivet</li>
            <li>Att myndigheters eller revisorers godkännande av rapporten</li>
            <li>Att användningen av tjänsten ensam uppfyller lagkrav</li>
          </ul>
          <p>
            Användaren ansvarar själv för att säkerställa att all rapportering uppfyller 
            gällande lagkrav och kan behöva komplettera med extern revision eller konsultation.
          </p>
        </section>

        <section>
          <h2>3. Användning av tjänsten</h2>
          <p>
            Genom att använda Climy godkänner du att:
          </p>
          <ul>
            <li>Tillhandahålla korrekta uppgifter om ditt företag</li>
            <li>Endast använda tjänsten för lagliga ändamål</li>
            <li>Inte dela ditt konto med obehöriga</li>
            <li>Inte försöka manipulera eller sabotera systemet</li>
          </ul>
        </section>

        <section>
          <h2>4. Betalning och återbetalning</h2>
          <p>
            Betalning sker via Stripe/Klarna. Efter genomförd betalning får du tillgång till 
            din CO₂-rapport. Återbetalning kan ske inom 14 dagar om rapporten inte levererats 
            enligt beskrivning.
          </p>
        </section>

        <section>
          <h2>5. Immateriella rättigheter</h2>
          <p>
            Alla rapporter, beräkningar och data som genereras är din egendom. Climy behåller 
            rätten till plattformen, logotyper och varumärken.
          </p>
        </section>

        <section>
          <h2>6. Ansvarsbegränsning</h2>
          <p>
            Climy ansvarar inte för:
          </p>
          <ul>
            <li>Ekonomiska förluster till följd av felaktiga beräkningar</li>
            <li>Böter eller sanktioner från myndigheter</li>
            <li>Indirekta skador eller följdskador</li>
          </ul>
          <p>
            Vårt totala ansvar är begränsat till det belopp du betalat för tjänsten.
          </p>
        </section>

        <section>
          <h2>7. Ändring av villkor</h2>
          <p>
            Vi förbehåller oss rätten att ändra dessa villkor. Du meddelas via e-post om 
            väsentliga förändringar.
          </p>
        </section>

        <section>
          <h2>8. Kontakt</h2>
          <p>
            För frågor om användarvillkoren, kontakta oss på:<br />
            E-post: legal@climy.se<br />
            Adress: [Din adress]<br />
            Org.nr: [Ditt org.nr]
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;