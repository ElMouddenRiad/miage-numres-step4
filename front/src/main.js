import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
<main id="main-content">

  <header>
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page About,
      <a href="about/">aller à la page À propos</a>
    </p>
  </header>

  <nav class="topnav" aria-label="Réseaux sociaux">
    <a href="#" aria-label="Facebook" class="fa fa-facebook"></a>
    <a href="#" aria-label="Twitter" class="fa fa-twitter"></a>
    <a href="#" aria-label="Google" class="fa fa-google"></a>
    <a href="#" aria-label="LinkedIn" class="fa fa-linkedin"></a>
    <a href="#" aria-label="YouTube" class="fa fa-youtube"></a>
    <a href="#" aria-label="Instagram" class="fa fa-instagram"></a>
    <a href="#" aria-label="Pinterest" class="fa fa-pinterest"></a>
    <a href="#" aria-label="Snapchat" class="fa fa-snapchat-ghost"></a>
    <a href="#" aria-label="Skype" class="fa fa-skype"></a>
    <a href="#" aria-label="Android" class="fa fa-android"></a>
    <a href="#" aria-label="Dribbble" class="fa fa-dribbble"></a>
    <a href="#" aria-label="Vimeo" class="fa fa-vimeo"></a>
    <a href="#" aria-label="Tumblr" class="fa fa-tumblr"></a>
    <a href="#" aria-label="Vine" class="fa fa-vine"></a>
    <a href="#" aria-label="Foursquare" class="fa fa-foursquare"></a>
    <a href="#" aria-label="StumbleUpon" class="fa fa-stumbleupon"></a>
    <a href="#" aria-label="Flickr" class="fa fa-flickr"></a>
    <a href="#" aria-label="Yahoo" class="fa fa-yahoo"></a>
    <a href="#" aria-label="Reddit" class="fa fa-reddit"></a>
    <a href="#" aria-label="RSS" class="fa fa-rss"></a>
  </nav>

  <section class="row">

    <section class="leftcolumn">
      <article class="card">
        <h2>Nom étudiant</h2>
        <p>Description</p>

        <section id="quiz">
          <h3>A TOI DE JOUER</h3>
          <div id="question" aria-live="polite"></div>
          <div id="proposals"></div>
        </section>

      </article>
    </section>

    <aside class="rightcolumn">
      <div class="card">
        <img 
          src="/question.png"
          alt="Illustration représentant un point d'interrogation"
          width="500"
          height="600"
        >
      </div>
    </aside>

  </section>

  <footer>
    <p>@2024</p>
  </footer>

</main>
`;

initQuizz();
