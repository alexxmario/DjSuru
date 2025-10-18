import React from 'react';
import { Helmet } from 'react-helmet-async';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>DJ Suru - Termeni și condiții</title>
      </Helmet>
      <section className="terms-conditions">
        <div className="container">
          <h1>Termeni și condiții</h1>

          <div className="policy-content">
            <h2>I. Condiții generale de utilizare a site-ului web</h2>

            <h3>1. Domeniul de aplicare</h3>
            <p>Prezentele condiții generale reglementează utilizarea site-ului web DJ Suru (djsuru.ro) și contractarea serviciilor DJ oferite de Romulus Virgil Suru. Prin accesarea și utilizarea site-ului, utilizatorul acceptă în totalitate aceste condiții.</p>

            <h3>2. Drepturi de proprietate intelectuală</h3>
            <p>Conținutul site-ului DJ Suru, inclusiv textele, imaginile, mixurile, logo-ul și designul sunt protejate de drepturi de autor și aparțin în exclusivitate lui DJ Suru. Este interzisă reproducerea, distribuirea sau utilizarea acestora fără acordul scris prealabil.</p>

            <h3>3. Răspunderea</h3>
            <p>DJ Suru nu își asumă răspunderea pentru:</p>
            <ul>
              <li>Întreruperea temporară a accesului la site din motive tehnice</li>
              <li>Utilizarea necorespunzătoare a informațiilor de pe site</li>
              <li>Daunele indirecte rezultate din utilizarea site-ului</li>
              <li>Conținutul site-urilor externe către care se face trimitere</li>
            </ul>

            <h3>4. Disponibilitatea serviciilor</h3>
            <p>DJ Suru își rezervă dreptul de a modifica sau întrerupe temporar accesul la site pentru mentenanță, actualizări sau îmbunătățiri, fără notificare prealabilă.</p>

            <h3>5. Interzicerea materialelor dăunătoare</h3>
            <p>Este strict interzis să introduceți pe site materiale care:</p>
            <ul>
              <li>Conțin viruși informatici sau cod malițios</li>
              <li>Încalcă drepturile terților</li>
              <li>Au caracter defăimător sau obscen</li>
              <li>Promovează activități ilegale</li>
            </ul>

            <h3>6. Atacuri electronice</h3>
            <p>Orice tentativă de atac asupra sistemelor informatice ale DJ Suru va fi raportată autorităților competente și urmărită conform legii.</p>

            <h2>II. Dispoziții finale</h2>

            <h3>7. Jurisdicția competentă</h3>
            <p>Pentru soluționarea litigiilor sunt competente instanțele din România. Legea aplicabilă este legea română.</p>

            <h3>8. Modificări și amendamente</h3>
            <p>DJ Suru își rezervă dreptul de a modifica oricând acești termeni și condiții. Modificările vor fi publicate pe site și vor intra în vigoare imediat. Utilizatorii vor fi notificați despre modificările importante prin mijloacele de contact disponibile.</p>

            <h3>9. Clauza de invaliditate parțială</h3>
            <p>În cazul în care una sau mai multe prevederi din prezentele condiții generale devin nule sau inaplicabile, validitatea celorlalte prevederi nu va fi afectată. Prevederile nule vor fi înlocuite cu prevederi valide și aplicabile care să reflecte cât mai fidel intenția inițială.</p>

            <h3>10. Contact și informații suplimentare</h3>
            <p>Pentru orice întrebări legate de acești termeni și condiții sau pentru contractarea serviciilor, ne puteți contacta prin intermediul paginii de <a href="/contact">contact</a> sau direct la datele de contact afișate pe site.</p>

            <p className="last-updated">Ultima actualizare: Ianuarie 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;