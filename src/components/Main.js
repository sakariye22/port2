import React from 'react';
import '../components/Style.css';

export default function Main() {
  return (
    <div className="main-container">
      <section className="grid-container">
        <div className="image-container">
          <img src={require("../port-image.jpg")} alt="en bild av mig" className="" />
        </div>
        <div className="">
          <h2>Om mig</h2>
          <p>Jag är en dedikerad webbutvecklare med en stark kompetens inom MERN-stacken (MongoDB, Express.js, React och Node.js). 
            Under det senaste året och en halv har jag arbetat intensivt med dessa teknologier för att skapa robusta och 
            innovativa webbapplikationer.</p>
<p>Min kompetens sträcker sig särskilt inom backend-utveckling, där jag har fördjupat mig i MongoDB och Express.js.
   Jag har arbetat med att bygga och optimera databaser samt utveckla API:er för att stödja frontend-funktionalitet.
    Dessutom har jag utforskat React Native för mobilutveckling och har erfarenhet av att bygga mobilappar.</p>
<p>Utöver min tekniska kompetens har jag en gedigen förståelse för utvecklingsverktyg 
  som Git och terminalen (Git Bash). Dessa verktyg har hjälpt mig att hantera kodprojekt 
  effektivt och samarbeta smidigt med andra utvecklare.</p>
<p>För att ytterligare förbättra mina färdigheter och skaffa praktisk erfarenhet 
  kommer jag att delta i ett lärande i arbete från den 20 november i år till den 3 maj nästa år. 
  Målet är att arbeta i ett team och använda agila eller scrum-baserade metoder för att förbättra min projektledningskompetens 
  och skapa ännu bättre webbapplikationer.</p>
<p>Sammanfattningsvis är jag en passionerad webbutvecklare med en gedigen erfarenhet inom MERN-stacken och expertis i Git och Git Bash. Jag är redo att ta itu med utmaningar
   inom webbutveckling och fortsätta växa som en professionell utvecklare.</p>
           </div>
      </section>
      <footer className="footer">
        <p>Kontakt: Telefon: +46728396495 | E-post: zakariye1942@icloud.com</p>
      </footer>
    </div>
  );
}
