import React from 'react';
import '../components/Style.css'


export default function Home() {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" href="https://github.com/sakariye22">Länk till GitHub</a>
        </li>
        <li className="nav-li">

          <a className ="nav-li" href="/min-cv.pdf" target="_blank" rel="noopener noreferrer">Länk till CV</a>
        </li>
        
      </ul>
    </nav>
  );
}
