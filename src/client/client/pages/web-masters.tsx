import Main from "layouts/Main";
import styles from "styles/pages/devTeam.module.scss";
import facebook from "assets/icons/socialMedia/facebook";
import instagram from "assets/icons/socialMedia/instagram";
import github from "assets/icons/socialMedia/github";
import linkedin from "assets/icons/socialMedia/linkedin";
import Head from "next/head";

const CustomHead = () => (
  <Head>
    <title>Developement team - ENSAM CASA</title>
    {/* facebook - start */}
    <meta property="og:title" content="Developement team - Ensam Casablanca" />
    <meta property="og:site_name" content="Ensam Casablanca official website" />
    <meta
      property="og:description"
      content="Developement team du site web de L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
      affiliée à l'Université Hassan II de Casablanca."
    />
    <meta
      property="og:image"
      content="https://ensam-casa.herokuapp.com/logo.jpg"
    />
    <meta property="og:url" content="https://ensam-casa.herokuapp.com/" />
    {/* facebook - start */}

    {/* twitter - start */}
    <meta name="twitter:title" content="Ensam casa" />
    <meta
      name="twitter:description"
      content="L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
      affiliée à l'Université Hassan II de Casablanca."
    />
    <meta
      name="twitter:image"
      content="https://ensam-casa.herokuapp.com/logo.jpg"
    />
    <meta name="twitter:card" content="https://ensam-casa.herokuapp.com/" />
    <meta name="twitter:image:alt" content="Ensam Casa logo" />
    {/* twitter - end */}

    <meta property="og:type" content="website" />
  </Head>
);

function OurTeam() {
  return (
    <Main>
      <>
        <CustomHead />
        <div className={styles.devSectionWrapper}>
          <h1>Developement team</h1>
          <div className={styles.container}>
            {/* <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/club.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>A&C Digital Manufacturing</h4>
                  <h5>Le club encadrant ...</h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/company/a-c-digital-manufacturing/mycompany/">
                    {linkedin}
                  </a>
                  <a href="https://www.instagram.com/aec.digital.manufacturing/">
                    {instagram}
                  </a>
                </div>
              </div>
            </div> */}
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/karim.png" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Karim Gehad</h4>
                  <h5>
                    Project Manager
                    <br />
                    Full-Stack Dev.
                  </h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/karim-gehad/">
                    {linkedin}
                  </a>
                  <a href="https://github.com/karimGeh">{github}</a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/aalae.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Aalae Bousskoul</h4>
                  <h5>
                    UI/UX Designer
                    <br />
                    Frontend Dev.
                  </h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/aala-eddine-bousskoul-1187b4225/">
                    {linkedin}
                  </a>
                  <a href="https://github.com/aalaebl">{github}</a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/azziz.jfif" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Abdelaziz Facoiti</h4>
                  <h5>Dev Ops Engineer</h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/taoufik-ayoub/">
                    {linkedin}
                  </a>
                  <a href="https://github.com/BitsWarrior">{github}</a>
                </div>
              </div>
            </div>
            {/* <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/hind.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Hind Lakhal</h4>
                  <h5>
                    Communication
                    <br />
                    Content team
                  </h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/hind-lakhal-2171461b0/">
                    {linkedin}
                  </a>
                  <a href="https://github.com/HIND-Lak">{github}</a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/amal.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Amal Es-snoussi</h4>
                  <h5>Content team</h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/amal-es-snoussi-7702751bb/">
                    {linkedin}
                  </a>
                  <a href="#">{github}</a>
                </div>
              </div>
            </div> */}
            {/* <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/souhail.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Souhail Karam</h4>
                  <h5>Developer</h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/souhail-karam-49b878214/">{linkedin}</a>
                  <a href="https://github.com/ForeignVisitor">{github}</a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgBx}>
                  <img src="/team/chaimae.jpg" alt="" />
                </div>
                <div className={styles.contentBx}>
                  <h4>Chaimaa Elargoubi</h4>
                  <h5>Developer</h5>
                </div>
                <div className={styles.sci}>
                  <a href="https://www.linkedin.com/in/chaimaa-elargoubi-2260411a4/">{linkedin}</a>
                  <a href="https://github.com/ChaimaaElargoubi">{github}</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    </Main>
  );
}

export default OurTeam;
