import {
  CycleIngenieur,
  CyclePrepa,
  LicenseDUniversite,
  MasterDUniversite,
} from "components/pages/nos-formations";
import Main from "layouts/Main";
import Head from "next/head";
import styles from "../styles/pages/nosFormations.module.scss";

const NosFormation = () => {
  return (
    <Main>
      <>
        <CustomHead />
        <div className={styles["container"]}>
          <div className={styles["titleWrapper"]}>
            <h1>NOS FORMATIONS</h1>
          </div>
          <CyclePrepa />
          <CycleIngenieur />
          <LicenseDUniversite />
          <MasterDUniversite />
        </div>
      </>
    </Main>
  );
};

const CustomHead = () => (
  <Head>
    <title>Nos Formations - ENSAM CASA</title>
    {/* facebook - start */}
    <meta property="og:title" content="Ensam Casablanca" />
    <meta property="og:site_name" content="Ensam Casablanca official website" />
    <meta
      property="og:description"
      content="L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
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

export default NosFormation;
