
/* ================================
   AGROASIST | DISEÑO PRINCIPAL
================================ */

:root {
  --forest: #174b35;
  --green: #27834f;
  --mint: #dff3e5;
  --lime: #b9df91;
  --cream: #f8f8ef;
  --white: #ffffff;
  --text: #26392e;
  --muted: #68786d;
  --shadow: 0 12px 35px rgba(28, 75, 48, .10);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: var(--cream);
  color: var(--text);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

/* MENU */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 17px 6%;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 3px 20px rgba(0,0,0,.06);
}

.logo {
  color: var(--forest);
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -1px;
}

.nav {
  display: flex;
  gap: 23px;
  align-items: center;
}

.nav a {
  color: var(--text);
  font-size: 14px;
  font-weight: 650;
  transition: .25s;
}

.nav a:hover {
  color: var(--green);
}

.menu-btn {
  display: none;
  border: 0;
  background: var(--mint);
  color: var(--forest);
  padding: 7px 12px;
  border-radius: 9px;
  font-size: 22px;
  cursor: pointer;
}

/* PORTADA */

.hero {
  position: relative;
  overflow: hidden;
  min-height: 590px;
  padding: 75px 7%;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 55px;
  color: white;
  background:
    radial-gradient(circle at 85% 15%, rgba(185,223,145,.25), transparent 30%),
    linear-gradient(125deg, #103d2b, #23764a);
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 50%;
  pointer-events: none;
}

.hero::before {
  width: 420px;
  height: 420px;
  right: -130px;
  top: -180px;
}

.hero::after {
  width: 250px;
  height: 250px;
  left: -130px;
  bottom: -150px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.hero .tag {
  display: inline-block;
  color: #d4efb9;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(40px, 5.5vw, 70px);
  line-height: 1.08;
  letter-spacing: -2px;
}

.hero h1 span {
  color: var(--lime);
}

.hero p {
  max-width: 560px;
  color: #e3f1e7;
  font-size: 17px;
  margin-bottom: 30px;
}

.hero-image {
  position: relative;
  z-index: 1;
}

.hero-image img {
  width: 100%;
  height: 390px;
  object-fit: cover;
  border: 8px solid rgba(255,255,255,.16);
  border-radius: 35px 10px 35px 10px;
  box-shadow: 0 25px 55px rgba(0,0,0,.25);
}

/* BOTONES */

.btn {
  display: inline-block;
  padding: 13px 25px;
  color: var(--forest);
  background: var(--lime);
  border-radius: 30px;
  font-weight: 800;
  box-shadow: 0 7px 20px rgba(0,0,0,.12);
  transition: .25s;
}

.btn:hover {
  background: white;
  transform: translateY(-4px);
}

/* SECCIONES */

.section {
  max-width: 1180px;
  margin: auto;
  padding: 85px 25px;
}

.section-heading {
  text-align: center;
  margin-bottom: 45px;
}

.section-heading span,
.profile span {
  color: var(--green);
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 3px;
}

.section-heading h2 {
  margin-top: 8px;
  color: var(--forest);
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: -1px;
}

.section-heading p {
  color: var(--muted);
  margin-top: 8px;
}

/* GALERIA */

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.gallery-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: var(--shadow);
  transition: .35s;
}

.gallery-grid img:hover {
  transform: translateY(-8px) scale(1.02);
}

/* PROYECTO */

.intro-text {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
  color: var(--muted);
  font-size: 18px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 720px;
  margin: 45px auto;
  padding: 28px;
  background: white;
  border: 1px solid #e5eee5;
  border-radius: 25px;
  box-shadow: var(--shadow);
}

.profile img {
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--mint);
}

.profile h3 {
  color: var(--forest);
  margin: 5px 0;
}

.profile p {
  color: var(--muted);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.info-card {
  padding: 30px;
  background: white;
  border-radius: 20px;
  border: 1px solid #e5eee5;
  box-shadow: var(--shadow);
  transition: .3s;
}

.info-card:hover {
  transform: translateY(-7px);
  border-color: #b9dfc2;
}

.info-card h3 {
  color: var(--green);
  margin-bottom: 12px;
  font-size: 21px;
}

.info-card p,
.info-card li {
  color: var(--muted);
}

.info-card ul {
  padding-left: 21px;
}

/* VIDEOS */

.video {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #102d1b;
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-section {
  max-width: 900px;
}

.video-link {
  display: inline-block;
  margin-top: 14px;
  color: var(--green);
  font-weight: 800;
}

/* CRONOGRAMA */

.gantt img {
  width: 100%;
  padding: 12px;
  background: white;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

/* SEMESTRES */

.semesters {
  max-width: 1050px;
}

.semester-card {
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 25px;
  margin-bottom: 32px;
  padding: 38px;
  background: white;
  border: 1px solid #e4eee5;
  border-radius: 25px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: .3s;
}

.semester-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 7px;
  background: linear-gradient(var(--green), var(--lime));
}

.semester-card:hover {
  transform: translateY(-5px);
}

.semester-number {
  color: #d5ead9;
  font-size: 65px;
  font-weight: 900;
  line-height: 1;
}

.semester-content .tag {
  color: var(--green);
  font-weight: 850;
  font-size: 12px;
  letter-spacing: 2px;
}

.semester-content h3 {
  color: var(--forest);
  font-size: 27px;
  margin: 12px 0;
}

.semester-content h4 {
  color: var(--green);
  margin: 23px 0 9px;
}

.semester-content p,
.semester-content li {
  color: var(--muted);
}

.semester-content ul {
  padding-left: 22px;
}

.status {
  display: inline-block;
  margin-top: 17px;
  padding: 8px 16px;
  color: var(--forest);
  background: var(--mint);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 800;
}

/* EVOLUCION */

.evolution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.evolution-grid article {
  padding: 30px;
  background: white;
  border-radius: 22px;
  box-shadow: var(--shadow);
  transition: .3s;
}

.evolution-grid article:hover {
  transform: translateY(-7px);
}

.evolution-grid strong {
  color: #a9d69c;
  font-size: 40px;
}

.evolution-grid h3 {
  color: var(--forest);
  margin: 8px 0;
}

.evolution-grid p {
  color: var(--muted);
}

/* IDENTIDAD */

.identity {
  max-width: 800px;
  text-align: center;
}

.identity img {
  width: 190px;
  height: 190px;
  object-fit: contain;
  margin: 0 auto 25px;
  padding: 15px;
  background: white;
  border-radius: 30px;
  box-shadow: var(--shadow);
}

.identity h2 {
  color: var(--forest);
  font-size: 32px;
}

.identity p {
  max-width: 600px;
  margin: 10px auto;
  color: var(--muted);
}

/* PIE DE PAGINA */

footer {
  padding: 65px 20px 25px;
  text-align: center;
  color: white;
  background:
    radial-gradient(circle at 80% 10%, #327d50, transparent 30%),
    var(--forest);
}

footer h2 {
  font-size: clamp(25px, 4vw, 36px);
}

footer p {
  color: #d8eadb;
  margin: 12px 0 25px;
}

footer img {
  width: 145px;
  margin: 30px auto;
  padding: 9px;
  background: white;
  border-radius: 15px;
}

footer small {
  display: block;
  margin-top: 20px;
  color: #c9dfce;
}

/* ANIMACIONES */

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .65s ease, transform .65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* TABLETAS */

@media (max-width: 900px) {
  .header {
    padding: 15px 5%;
  }

  .nav {
    gap: 12px;
  }

  .nav a {
    font-size: 12px;
  }

  .hero {
    gap: 30px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* CELULARES */

@media (max-width: 700px) {
  .menu-btn {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    padding: 22px;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 10px 20px rgba(0,0,0,.10);
  }

  .nav.open {
    display: flex;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 55px 7%;
  }

  .hero h1 {
    font-size: 43px;
  }

  .hero-image img {
    height: 270px;
  }

  .section {
    padding: 60px 20px;
  }

  .info-grid,
  .evolution-grid {
    grid-template-columns: 1fr;
  }

  .semester-card {
    grid-template-columns: 1fr;
    padding: 27px;
    gap: 10px;
  }

  .semester-number {
    font-size: 42px;
  }

  .semester-content h3 {
    font-size: 23px;
  }

  .profile {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 420px) {
  .gallery-grid img {
    height: 135px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .info-card {
    padding: 23px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
