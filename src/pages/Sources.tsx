function Sources() {
  return (
    <div style={{maxWidth: '900px', margin: '50px auto', padding: '20px', lineHeight: '1.6'}}>
      <h1 style={{color: '#2e5f1f', marginBottom: '10px'}}>Metodik och källor</h1>
      <p style={{color: '#666', fontSize: '14px'}}><em>Senast uppdaterad: 7 februari 2026</em></p>
      
      <h2 style={{color: '#2e5f1f', marginTop: '30px'}}>Om beräkningarna</h2>
      <p>
        Climly beräknar CO₂-utsläpp baserat på branschgenomsnitt och schablonvärden från 
        svenska och internationella myndigheter. Beräkningarna ger en uppskattning och 
        ersätter inte fullständig klimatrapportering enligt CSRD.
      </p>

      <h2 style={{color: '#2e5f1f', marginTop: '40px'}}>Emissionsfaktorer för energi</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #2e5f1f'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>Energityp</th>
            <th style={{textAlign: 'right', padding: '10px'}}>kg CO₂ per kWh</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Källa</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Förnybar el</td>
            <td style={{textAlign: 'right', padding: '10px'}}>0.008</td>
            <td style={{padding: '10px'}}>Energimyndigheten (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Blandad el (Nordpool)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>0.013</td>
            <td style={{padding: '10px'}}>Energimyndigheten (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Fossil energi</td>
            <td style={{textAlign: 'right', padding: '10px'}}>0.820</td>
            <td style={{padding: '10px'}}>IPCC (2021)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Fjärrvärme</td>
            <td style={{textAlign: 'right', padding: '10px'}}>0.060</td>
            <td style={{padding: '10px'}}>Energiföretagen Sverige (2024)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{color: '#2e5f1f', marginTop: '40px'}}>Emissionsfaktorer för transporter</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #2e5f1f'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>Fordonstyp</th>
            <th style={{textAlign: 'right', padding: '10px'}}>kg CO₂ per fordon/år</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Källa</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Elbil</td>
            <td style={{textAlign: 'right', padding: '10px'}}>390</td>
            <td style={{padding: '10px'}}>Trafikverket (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Hybridbil</td>
            <td style={{textAlign: 'right', padding: '10px'}}>1,600</td>
            <td style={{padding: '10px'}}>Trafikverket (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Bensin/Diesel</td>
            <td style={{textAlign: 'right', padding: '10px'}}>2,400</td>
            <td style={{padding: '10px'}}>Trafikverket (2024)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{color: '#2e5f1f', marginTop: '40px'}}>Tjänsteresor (flyg)</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #2e5f1f'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>Resnivå</th>
            <th style={{textAlign: 'right', padding: '10px'}}>kg CO₂ per anställd/år</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Källa</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Få resor (1-10/år)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>200</td>
            <td style={{padding: '10px'}}>Naturvårdsverket (2023)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Medel (11-50/år)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>800</td>
            <td style={{padding: '10px'}}>Naturvårdsverket (2023)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Många (50+/år)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>2,000</td>
            <td style={{padding: '10px'}}>Naturvårdsverket (2023)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{color: '#2e5f1f', marginTop: '40px'}}>Övriga faktorer</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #2e5f1f'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>Kategori</th>
            <th style={{textAlign: 'right', padding: '10px'}}>Värde</th>
            <th style={{textAlign: 'left', padding: '10px'}}>Källa</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Kontorsyta</td>
            <td style={{textAlign: 'right', padding: '10px'}}>30 kg CO₂/m²/år</td>
            <td style={{padding: '10px'}}>Boverket (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Anställd (basutsläpp)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>600 kg CO₂/år</td>
            <td style={{padding: '10px'}}>SCB (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Avfall per anställd</td>
            <td style={{textAlign: 'right', padding: '10px'}}>500 kg CO₂/år</td>
            <td style={{padding: '10px'}}>Avfall Sverige (2024)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Träd (CO₂-absorption)</td>
            <td style={{textAlign: 'right', padding: '10px'}}>22 kg CO₂/år</td>
            <td style={{padding: '10px'}}>Naturvårdsverket (2023)</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Branschsnitt per anställd</td>
            <td style={{textAlign: 'right', padding: '10px'}}>3.5 ton CO₂/år</td>
            <td style={{padding: '10px'}}>Klimatutredningen (2024)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{color: '#2e5f1f', marginTop: '40px'}}>Källförteckning</h2>
      <ul style={{lineHeight: '1.8'}}>
        <li><strong>Energimyndigheten</strong> (2024). Miljövärdering av el och fjärrvärme.</li>
        <li><strong>IPCC</strong> (2021). Climate Change 2021: The Physical Science Basis.</li>
        <li><strong>Trafikverket</strong> (2024). Emissionsfaktorer för vägtransporter.</li>
        <li><strong>Naturvårdsverket</strong> (2023). Klimatpåverkan från flygresor och kolsänkor.</li>
        <li><strong>Boverket</strong> (2024). Klimatdeklaration av byggnader.</li>
        <li><strong>SCB</strong> (2024). Statistik om hushållens konsumtion och utsläpp.</li>
        <li><strong>Avfall Sverige</strong> (2024). Svensk avfallshantering.</li>
        <li><strong>Energiföretagen Sverige</strong> (2024). Fjärrvärmens miljöpåverkan.</li>
        <li><strong>Klimatutredningen</strong> (2024). Branschstatistik för svenska företag.</li>
      </ul>

      <div style={{marginTop: '40px', padding: '20px', background: '#f5f9f5', borderRadius: '8px'}}>
        <h3 style={{color: '#2e5f1f', marginTop: '0'}}>Om metodiken</h3>
        <p>
          Climly använder schablonvärden och branschgenomsnitt för att ge en snabb uppskattning 
          av företagets klimatavtryck. För mer exakta beräkningar rekommenderar vi fullständig 
          klimatanalys med primärdata från er verksamhet.
        </p>
        <p style={{marginBottom: '0'}}>
          <strong>Osäkerhet:</strong> Schablonberäkningar har en uppskattad osäkerhet på ±30-50% 
          jämfört med verkliga mätningar.
        </p>
      </div>

      <a href="/" style={{display: 'inline-block', marginTop: '40px', color: '#2e5f1f', textDecoration: 'underline', fontSize: '16px'}}>
        ← Tillbaka till startsidan
      </a>
    </div>
  );
}

export default Sources;